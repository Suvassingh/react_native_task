import { View, FlatList, StyleSheet, InteractionManager } from "react-native";
import { useCallback, useMemo, useState, useEffect } from "react";
import ProductSearchItem from "../components/ProductSearchItem";
import { getLargeProducts } from "../data/large-products";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FilterBar from "../components/FilterBar";

function ProductSearchScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [priceRange, setPriceRange] = useState("all");
  const [toggles, setToggles] = useState({
    inStock: false,
    bestSeller: false,
    featured: false,
  });
  const [sortKey, setSortKey] = useState("name");
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const id = setTimeout(() => setDebouncedSearch(search), 200);
    return () => clearTimeout(id);
  }, [search]);
  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      setAllProducts(getLargeProducts());
    });
    return () => task.cancel();
  }, []);

  const visibleItems = useMemo(() => {
    const queryItem = debouncedSearch.trim().toLowerCase();
    const filtered = allProducts.filter((pro) => {
      if (queryItem) {
        const haystack = (
          pro._search ?? `${pro.title} ${pro.brand}`
        ).toLowerCase();
        if (!haystack.includes(queryItem)) return false;
      }
      if (priceRange !== "all" && pro.priceRange !== priceRange) return false;
      if (toggles.inStock && !pro.inStock) return false;
      if (toggles.bestSeller && !pro.isBestSeller) return false;
      if (toggles.featured && !pro.isFeatured) return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sortKey === "price-asc") return a.price - b.price;
      if (sortKey === "price-desc") return b.price - a.price;
      return a.title.localeCompare(b.title);
    });
  }, [allProducts, debouncedSearch, priceRange, toggles, sortKey]);

  const goToDetail = useCallback(
    (productId) => {
      const baseId = productId.split("-")[0];
      navigation.navigate("ProductDetail", { productId: baseId });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }) => (
      <ProductSearchItem item={item} onPress={() => goToDetail(item.id)} />
    ),
    [goToDetail],
  );

  const keyExtractor = useCallback((item) => item.id, []);

  function handleToggleChange(key, value) {
    setToggles((current) => ({ ...current, [key]: value }));
  }
  return (
    <SafeAreaView style={styles.flex} edges={["bottom"]}>
      <View style={styles.flex}>
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          toggles={toggles}
          onToggleChange={handleToggleChange}
          sortKey={sortKey}
          onSortChange={setSortKey}
        />
        <FlatList
          data={visibleItems}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={12}
          maxToRenderPerBatch={12}
          windowSize={7}
          removeClippedSubviews
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        />
      </View>
    </SafeAreaView>
  );
}

export default ProductSearchScreen;
const styles = StyleSheet.create({
  flex: { flex: 1 },
});

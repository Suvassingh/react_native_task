import { View, FlatList, TextInput, StyleSheet } from "react-native";
import { useCallback, useMemo, useState } from "react";
import ProductSearchItem from "../components/ProductSearchItem";
import { getLargeProducts } from "../data/large-products";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

function ProductSearchScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const allProducts = useMemo(() => getLargeProducts(), []);
  const visibleItems = useMemo(() => {
    const queryItem = query.trim().toLowerCase();
    if (!queryItem) return allProducts;
    return allProducts.filter((pro) => {
      const haystack = (
        pro._search ?? `${pro.title} ${pro.brand}`
      ).toLowerCase();
      return haystack.includes(queryItem);
    });
  }, [allProducts, query]);

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
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <View style={{ flex: 1 }}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search products..."
          style={styles.input}
          autoCorrect={false}
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
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  input: {
    margin: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 14,
  },
});

import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { useFavorites } from "../store/favorites-context";
import { PRODUCTS, CATEGORIES } from "../data/dummy-data";
import FavoriteGridTile from "../components/FavoriteGridTile";
function SavedScreen() {
  const { favoriteIds } = useFavorites();
  const favoritesProducts = PRODUCTS.filter((product) =>
    favoriteIds?.includes(product.id),
  );
  if (favoritesProducts.length === 0) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>
          No favorites yet. Tap the ★ on a product to save it!
        </Text>
      </View>
    );
  }
  function renderFavoriteItem(itemData) {
    const product = itemData.item;
    const category = CATEGORIES.find((cat) =>
      product.categoryIds?.includes(cat.id),
    );
    const color = category ? category.color : "#ddd";

    return (
      <FavoriteGridTile
        id={product.id}
        title={product.title}
        color={color}
        imageUrl={product.imageUrl}
        brand={product.brand}
        price={product.price}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <FlatList
        data={favoritesProducts}
        keyExtractor={(item) => item.id}
        numColumns={1}
        renderItem={renderFavoriteItem}
        contentContainerStyle={{ paddingBottom: 16, paddingTop: 8 }}
      />
    </SafeAreaView>
  );
}

export default SavedScreen;
const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  fallbackText: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
  },
});

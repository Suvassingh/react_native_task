import {
  View,
  Text,

  StyleSheet,
  Platform,
} from "react-native";

import { PRODUCTS } from "../data/dummy-data";
import ProductList from "../components/ProductList";

function ProductOverviewScreen({ route }) {
  const catId = route?.params?.categoryId;

  const displayedProducts = PRODUCTS.filter((pro) =>
    pro.categoryIds.includes(catId),
  );

  if (!displayedProducts.length) {
    return (
      <View style={styles.fallback}>
        <Text>No products found in this category.</Text>
      </View>
    );
  }
  return <ProductList items={displayedProducts} />;
}

export default ProductOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },

  card: {
    borderRadius: 12,
    backgroundColor: "#9beef2",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    paddingBottom: 16,
    marginBottom: 32,
  },

  image: {
    width: "100%",
    height: 220,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 12,
    marginHorizontal: 16,
    color: "#222",
  },

  detailsContainer: {
    paddingHorizontal: 16,
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  detailLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },

  detailValue: {
    fontSize: 14,
    color: "#555",
    flexShrink: 1,
    textAlign: "right",
    marginLeft: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#222",
  },

  bullet: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
    paddingLeft: 4,
    lineHeight: 20,
  },

  fallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

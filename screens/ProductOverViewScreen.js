import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";

import { PRODUCTS } from "../data/dummy-data";

function ProductList({ route }) {
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
  return (
    <ScrollView style={styles.container}>
      {displayedProducts.map((pro) => (
        <View key={pro.id} style={styles.card}>
          <Image source={pro.imageUrl} style={styles.image} />{" "}
          <Text style={styles.title}>{pro.title}</Text>
          <View style={styles.detailsContainer}>
            <DetailRow label="Brand" value={pro.brand} />
            <DetailRow label="Price" value={`$${pro.price}`} />
            <DetailRow label="Price Range" value={pro.priceRange} />

            <DetailRow label="Featured" value={pro.isFeatured ? "Yes" : "No"} />
            <DetailRow
              label="Best Seller"
              value={pro.isBestSeller ? "Yes" : "No"}
            />
            <DetailRow label="In Stock" value={pro.inStock ? "Yes" : "No"} />
            <DetailRow
              label="Warranty"
              value={pro.hasWarranty ? "Yes" : "No"}
            />

            <Text style={styles.sectionTitle}>Specs</Text>
            {pro.specs.map((spec, index) => (
              <Text key={index} style={styles.bullet}>
                • {spec}
              </Text>
            ))}

            <Text style={styles.sectionTitle}>Features</Text>
            {pro.features.map((feature, index) => (
              <Text key={index} style={styles.bullet}>
                • {feature}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
function DetailRow({ label, value }) {
  return (
    <View style={styles.detailsRow}>
      <Text style={styles.detailLabel}>{label}:</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}
export default ProductList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },

  card: {
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    paddingBottom: 16,
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

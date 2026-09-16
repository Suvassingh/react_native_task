import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { PRODUCTS } from "../data/dummy-data";

function ProductDetails({ route }) {
  const productId = route.params.productId;
  const product = PRODUCTS.find((pro) => pro.id === productId);
  if (!product) {
    return (
      <View style={styles.fallback}>
        <Text>Product not found.</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.root}>
      <Image source={product.imageUrl} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>

      <View style={styles.detailsContainer}>
        <DetailRow label="Brand" value={product.brand} />
        <DetailRow label="Price" value={`$${product.price}`} />
        <DetailRow label="Price Range" value={product.priceRange} />
        <DetailRow label="Featured" value={product.isFeatured ? "Yes" : "No"} />
        <DetailRow
          label="Best Seller"
          value={product.isBestSeller ? "Yes" : "No"}
        />
        <DetailRow label="In Stock" value={product.inStock ? "Yes" : "No"} />
        <DetailRow
          label="Warranty"
          value={product.hasWarranty ? "Yes" : "No"}
        />

        <Text style={styles.sectionTitle}>Specs</Text>
        {product.specs.map((spec, i) => (
          <Text key={i} style={styles.bullet}>
            • {spec}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Features</Text>
        {product.features.map((feature, i) => (
          <Text key={i} style={styles.bullet}>
            • {feature}
          </Text>
        ))}
      </View>
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
export default ProductDetails;
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#f5f5f5", paddingBottom: 32 },
  image: { width: "100%", height: 300 },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 12,
    marginHorizontal: 16,
    color: "#222",
  },
  detailsContainer: { paddingHorizontal: 16 },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  detailLabel: { fontSize: 14, fontWeight: "bold", color: "#333" },
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
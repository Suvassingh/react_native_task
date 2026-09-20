import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { PRODUCTS } from "../data/dummy-data";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { GlobalStyles } from "../Constants/Style";
import DialogBox from "../components/DialogBox";

function ProductDetails({ route, navigation }) {
  const [isDialogVisible, setDialogVisible] = useState(false);
  const productId = route.params.productId;
  const product = PRODUCTS.find((pro) => pro.id === productId);
  function changeFavrouteStatusHandler() {
    console.log("test click ");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="star"
          color="white"
          onPress={changeFavrouteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavrouteStatusHandler]);
  if (!product) {
    return (
      <View style={styles.fallback}>
        <Text>Product not found.</Text>
      </View>
    );
  }
  function reviewProduct() {
    setDialogVisible(true);
  }

  function closeDialog() {
    setDialogVisible(false);
  }

  function submitReview({ reviewText, rating }) {
    console.log("Review submitted:", reviewText);
  }
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={{ paddingBottom: 12 }}
      >
        <Image source={product.imageUrl} style={styles.image} />
        <View style={styles.titleReview}>
          <Text style={styles.title} numberOfLines={2}>
            {product.title}
          </Text>
          <Button style={styles.button} mode="flat" onPress={reviewProduct}>
            Review
          </Button>
        </View>

        <View style={styles.detailsContainer}>
          <DetailRow label="Brand" value={product.brand} />
          <DetailRow label="Price" value={`$${product.price}`} />
          <DetailRow label="Price Range" value={product.priceRange} />
          <DetailRow
            label="Featured"
            value={product.isFeatured ? "Yes" : "No"}
          />
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
      <DialogBox
        visible={isDialogVisible}
        onClose={closeDialog}
        onSubmit={submitReview}
      />
    </SafeAreaView>
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
  root: { flex: 1, backgroundColor: "#f5f5f5" },
  image: { width: "100%", height: 300 },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: "#222",
    flexShrink: 1,
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
  titleReview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  button: {
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: GlobalStyles.colors.accent500,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

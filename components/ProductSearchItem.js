import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";

function ProductSearchItem({ item, onPress }) {
  return (
    <View style={styles.card}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={onPress}
      >
        <View style={styles.row}>
          <Image source={item.imageUrl} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.meta} numberOfLines={1}>
              {item.brand} . {item.priceRange}
            </Text>
            <View style={styles.badges}>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              {item.isBestSeller && (
                <Text style={styles.badge}>Best Seller</Text>
              )}
              {!item.inStock && (
                <Text style={[styles.badge, styles.out]}>Out of Stock</Text>
              )}
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default React.memo(ProductSearchItem);
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressed: { opacity: 0.6 },
  row: { flexDirection: "row", padding: 10 },
  image: { width: 80, height: 80, borderRadius: 8, backgroundColor: "#eee" },
  info: { flex: 1, marginLeft: 12, justifyContent: "center" },
  title: { fontSize: 15, fontWeight: "600", color: "#222" },
  meta: { fontSize: 12, color: "#777", marginTop: 2 },
  badges: { flexDirection: "row", alignItems: "center", marginTop: 6, gap: 8 },
  price: { fontSize: 14, fontWeight: "bold", color: "#111" },
  badge: {
    fontSize: 10,
    color: "#fff",
    backgroundColor: "#4F46E5",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: "hidden",
  },
  out: { backgroundColor: "#c0392b" },
});

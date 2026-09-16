import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function ProductItem({ id, title, imageUrl, brand, price, priceRange }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("ProductDetail", { productId: id });
  }

  return (
    <View style={styles.card}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={pressHandler}
      >
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{brand}</Text>
          <Text style={styles.meta}>${price}</Text>
          <Text style={styles.meta}>{priceRange}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 12,
    backgroundColor: "#9beef2",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressed: { opacity: 0.5 },
  image: { width: "100%", height: 200 },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 12,
  },
  meta: { fontSize: 13, color: "#333" },
});

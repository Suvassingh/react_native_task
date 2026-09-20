import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function FavoriteGridTile({ id, title, color, imageUrl, brand, price }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("ProductDetail", { productId: id });
  }

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressHandler}
      >
        <Image source={imageUrl} style={styles.image} />
        <View style={styles.innerContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.meta}>
            {brand} • ${price}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default FavoriteGridTile;

const styles = StyleSheet.create({
  gridItem: {
    marginHorizontal: 16,
    marginVertical: 8,
    height: 100,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: 100,
    height: "100%",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  meta: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },
});

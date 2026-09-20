import { StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating-widget";

export default function ReviewScreen({rating,onChange}) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Rate your experience:</Text>

      <StarRating
        rating={rating}
        onChange={onChange}
        starSize={36}
        color="#f1c40f"
        emptyColor="#bdc3c7"
        maxStars={5}
      />

      <Text style={styles.resultText}>Selected: {rating} / 5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "600",
  },
  resultText: {
    marginTop: 12,
    fontSize: 16,
    color: "#333",
  },
});

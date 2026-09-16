import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Hello Suvas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

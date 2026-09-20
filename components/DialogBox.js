import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import ReviewScreen from "./Star";

const { width } = Dimensions.get("window");

export default function DialogBox({ visible, onClose, onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0);

  function handleSubmit() {
    if (onSubmit) {
      onSubmit({ reviewText: inputValue, rating });
    }
    setInputValue("");
    setRating(0);
    onClose();
  }

  function handleCancel() {
    setInputValue("");
    setRating(0);
    onClose();
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      presentationStyle="overFullScreen"
      onDismiss={onClose}
    >
      <View style={styles.viewWrapper}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Write a Review</Text>

          <TextInput
            placeholder="Enter your review..."
            value={inputValue}
            style={styles.textInput}
            onChangeText={(value) => setInputValue(value)}
            multiline
          />
          <ReviewScreen rating={rating} onChange={setRating} />
         
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Button title="Cancel" color="#999" onPress={handleCancel} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, { translateY: -110 }],
    height: 220,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#222",
  },
  textInput: {
    width: "100%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 16,
    minHeight: 60,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
});

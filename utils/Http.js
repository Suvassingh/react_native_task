import axios from "axios";

const BASE_URL = "https://react-native-task-86636-default-rtdb.firebaseio.com/";

export async function storeReview(proId, reviewData) {
  const response = await axios.post(
    BASE_URL + `/reviews/${proId}.json`,
    reviewData,
  );
  const id = response.data.name;
  return id;
}

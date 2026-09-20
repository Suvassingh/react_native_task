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

export async function getReviews(proId) {
  const response = await axios.get(BASE_URL + `/reviews/${proId}.json`);
  const reviews = [];
  console.log(response.data);
  for (const key in response.data) {
    const reviewObj = {
      id: key,
      reviewText: response.data[key].reviewText,
      rating: response.data[key].rating,
      date: new Date(response.data[key].date),
    };
    reviews.push(reviewObj);
  }
  return reviews;
}

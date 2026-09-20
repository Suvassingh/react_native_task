import { createContext, useContext, useState } from "react";

const ReviewsContext = createContext();

export function ReviewsProvider({ children }) {
  const [reviewsByProduct, setReviewsByProduct] = useState({});

  function addReview(productId, review) {
    setReviewsByProduct((prev) => {
      const existing = prev[productId] ?? [];
      const newReview = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        ...review,
      };
      return {
        ...prev,
        [productId]: [newReview, ...existing], 
      };
    });
  }

  function getReviews(productId) {
    return reviewsByProduct[productId] ?? [];
  }

  return (
    <ReviewsContext.Provider value={{ addReview, getReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export function useReviews() {
  const ctx = useContext(ReviewsContext);
  if (!ctx) {
    throw new Error("useReviews must be used inside a ReviewsProvider");
  }
  return ctx;
}

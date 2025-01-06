import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getReviewsByExperienceId = async (experienceId) => {
  try {
    const reviewsRef = collection(db, "reviews");
    const q = query(reviewsRef, where("experienceId", "==", experienceId));
    const querySnapshot = await getDocs(q);

    const reviews = [];
    querySnapshot.forEach((doc) => {
      reviews.push({ id: doc.id, ...doc.data() });
    });

    return reviews;
  } catch (error) {
    console.error("Error obteniendo reseñas:", error);
    return [];
  }
};


import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const addReview = async ({ experienceId, userName, comment, rating }) => {
  const newReview = {
    experienceId,
    userName,
    comment,
    rating,
    timestamp: new Date().toISOString(),
  };

  await addDoc(collection(db, "reviews"), newReview);
  return newReview;
};

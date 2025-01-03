import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { addReview } from "../services/reviewService";
import { toast } from "react-toastify";

const useAddReviewModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setNewRating(0);
    setNewComment("");
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setAuthUser(result.user);
      toast.success(`Bienvenido ${result.user.displayName}`);
    } catch (error) {
      console.error("Error durante la autenticación:", error);
      toast.error("Error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  const handleAddReview = async (experienceId, onReviewAdded) => {
    if (!newRating) {
      toast.error("Debes agregar una valoración.");
      return;
    }

    try {
      const newReview = await addReview({
        experienceId,
        userName: authUser.displayName,
        comment: newComment,
        rating: newRating,
      });
      toast.success("Reseña agregada correctamente.");
      onReviewAdded(newReview);
      closeModal();
    } catch (error) {
      console.error("Error agregando la reseña:", error);
      toast.error("Hubo un error al agregar la reseña. Inténtalo de nuevo.");
    }
  };

  return {
    isModalOpen,
    authUser,
    newRating,
    newComment,
    setNewRating,
    setNewComment,
    openModal,
    closeModal,
    handleLogin,
    handleAddReview,
  };
};

export default useAddReviewModal;

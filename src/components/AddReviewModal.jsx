import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import { addReview } from "../services/reviewService";
import { toast } from "react-toastify";
import CloseIcon from "../assets/icons/Close.svg";
import { useAuth } from "../context/AuthContext";

const AddReviewModal = ({ experienceId, onReviewAdded, onClose }) => {
  const { user, loginWithGoogle } = useAuth();
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");

  const handleAddReview = async (e) => {
    e.preventDefault();

    if (!newRating) {
      toast.error("Debes agregar una valoración.");
      return;
    }

    try {
      const newReview = await addReview({
        experienceId,
        userName: user.displayName,
        comment: newComment,
        rating: newRating,
      });
      toast.success("Reseña agregada correctamente.");
      onReviewAdded(newReview);
      onClose();
    } catch (error) {
      console.error("Error agregando la reseña:", error);
      toast.error("Hubo un error al agregar la reseña. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2"
          aria-label="Cerrar modal"
        >
          <img src={CloseIcon} alt="Cerrar" className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-bold mb-4">Agregar Reseña</h2>
        {!user ? (
          <div className="flex flex-col items-center">
            <p className="text-red-500 mb-4">Debes iniciar sesión para agregar una reseña.</p>
            <button
              onClick={loginWithGoogle}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Iniciar sesión con Google
            </button>
          </div>
        ) : (
          <form onSubmit={handleAddReview}>
            <label className="block mb-2 font-semibold">Tu valoración:</label>
            <StarRatings
              rating={newRating}
              starRatedColor="gold"
              starEmptyColor="lightgray"
              changeRating={setNewRating}
              numberOfStars={5}
              starDimension="24px"
              starSpacing="2px"
              name="rating-input"
            />

            <label className="block mt-4 mb-2 font-semibold">Comentario:</label>
            <textarea
              className="border p-2 w-full mb-4"
              rows="3"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-Tan hover:bg-Gold text-white px-4 py-2 rounded"
              >
                Agregar Reseña
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

AddReviewModal.propTypes = {
  experienceId: PropTypes.string.isRequired,
  onReviewAdded: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddReviewModal;

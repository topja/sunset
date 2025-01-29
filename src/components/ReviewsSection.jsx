import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import AddReviewModal from "./AddReviewModal";
import { getReviewsByExperienceId } from "../services/firestoreService";

const ReviewsSection = ({ experienceId }) => {
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getReviewsByExperienceId(experienceId);
      setReviews(fetchedReviews);
      setLoadingReviews(false);
    };

    fetchReviews();
  }, [experienceId]);

  const handleReviewAdded = (newReview) => {
    setReviews((prev) => [...prev, newReview]);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl text-Charcoal text-center font-agbalumo mt-2">Reseñas</h2>
      {loadingReviews ? (
        <p>Cargando reseñas...</p>
      ) : (
        <div className="text-lg text-black text-center font-semibold">
          <span className="text-black font-bold">
            {averageRating.toFixed(1)}{" "}
            {"★".repeat(Math.round(averageRating)) +
              "☆".repeat(5 - Math.round(averageRating))}
          </span>{" "}
          ({reviews.length})
        </div>
      )}
      <div className="mt-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b py-4 flex items-center gap-4">
            <div>
              <p className="font-semibold">{review.userName}</p>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-yellow-500">
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-transparent hover:text-black text-Charcoal text-2xl font-agbalumo px-4 py-2 rounded-lg transition duration-300 mt-4"
        onClick={() => setIsReviewModalOpen(true)}
      >
        Agregar Nueva Reseña
      </button>

      {isReviewModalOpen && (
        <AddReviewModal
          experienceId={experienceId}
          onReviewAdded={handleReviewAdded}
          onClose={() => setIsReviewModalOpen(false)}
        />
      )}
    </div>
  );
};

ReviewsSection.propTypes = {
  experienceId: PropTypes.string.isRequired,
};

export default ReviewsSection;

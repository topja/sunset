import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewsByExperienceId } from "../services/firestoreService";

const CardList = ({ items, onCardClick, buttonLabel, isExperience }) => {
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const fetchRatings = async () => {
      const ratingsMap = {};
      for (const item of items) {
        const reviews = await getReviewsByExperienceId(item.id);
        const averageRating =
          reviews.length > 0
            ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
            : 0;
        ratingsMap[item.id] = {
          average: averageRating,
          count: reviews.length,
        };
      }
      setRatings(ratingsMap);
    };

    fetchRatings();
  }, [items]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {items.map((item) => {
        const ratingInfo = ratings[item.id] || { average: 0, count: 0 };

        if (isExperience) {
          // Card como Link para experiencias
          return (
            <Link
              key={item.id}
              to={`/experience/${item.id}`}
              className="flex flex-col h-full shadow-lg rounded-md overflow-hidden bg-white"
            >
              <div className="h-48 md:h-56 lg:h-64 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-gray-50 flex-1 p-4 md:p-6 lg:p-8">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {item.duration && (
                  <p className="text-gray-600">{item.duration}</p>
                )}
                {item.price && <p className="text-gray-600">{item.price}</p>}
                {/* Promedio de reseñas */}
                {ratingInfo.count > 0 && (
                  <p className="text-sm text-black font-bold mt-2">
                    {ratingInfo.average.toFixed(1)}{" "}
                    {"★".repeat(Math.round(ratingInfo.average)) +
                      "☆".repeat(5 - Math.round(ratingInfo.average))}{" "}
                    ({ratingInfo.count})
                  </p>
                )}
              </div>
            </Link>
          );
        }

        // Si es un Kit
        return (
          <div
            key={item.id}
            className="flex flex-col h-full shadow-lg rounded-md overflow-hidden bg-white"
          >
            <div className="h-48 md:h-56 lg:h-64 w-full">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-gray-50 flex-1 flex flex-col justify-between">
              <div className="px-4 md:px-6 lg:px-8 mt-3 mb-3">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <button
                className="bg-Tan hover:bg-Gold mt-2 text-white font-medium px-4 py-2 rounded-blg
                           transition font-inter duration-300 w-full"
                           onClick={() => onCardClick(item, isExperience)}
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      duration: PropTypes.string,
      price: PropTypes.string,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  isExperience: PropTypes.bool.isRequired,
};

export default CardList;

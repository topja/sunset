import PropTypes from "prop-types";

const CardList = ({ items, onCardClick, buttonLabel }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {items.map((item, index) => (
        <div
          key={index}
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
          <div className="bg-gray-50 flex-1 flex flex-col justify-between p-4 md:p-6 lg:p-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              {item.duration && <p className="text-gray-600">{item.duration}</p>}
              {item.price && <p className="text-gray-600">{item.price}</p>}
            </div>
            <button
              className="bg-Tan hover:bg-Gold mt-2 text-white font-medium px-4 py-2 rounded-lg transition font-inter duration-300"
              onClick={() => onCardClick(item)}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      duration: PropTypes.string,
      price: PropTypes.string,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default CardList;

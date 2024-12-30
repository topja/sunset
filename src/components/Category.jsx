import PropTypes from "prop-types";
import CardList from "./CardList";

const Category = ({ title, items, onCardClick, buttonLabel }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 capitalize">{title}</h2>
      <CardList items={items} onCardClick={onCardClick} buttonLabel={buttonLabel} />
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
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

export default Category;

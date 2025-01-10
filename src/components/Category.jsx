import PropTypes from "prop-types";
import CardList from "./CardList";

const Category = ({ title, items, onCardClick, buttonLabel, isExperience }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl text-Charcoal font-agbalumo mb-4 capitalize">{title}</h2>
      <CardList
        items={items}
        onCardClick={(item, isExperience) => onCardClick(item, isExperience)}
        buttonLabel={buttonLabel}
        isExperience={isExperience}
      />
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  isExperience: PropTypes.bool.isRequired,
};

export default Category;

import PropTypes from "prop-types";

const CardList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col shadow-md rounded-md overflow-hidden"
        >
          {/* Imagen */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-48 md:h-56 lg:h-64 object-cover"
          />

          {/* Contenido */}
          <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-between bg-white h-full">
            <div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              {item.duration && <p className="text-gray-600">{item.duration}</p>}
              {item.price && <p className="text-gray-600">{item.price}</p>}
            </div>

            {/* Botón de Reserva */}
            <button
              className="mt-4 py-2 px-4 bg-verdeOscuro text-white font-medium rounded-md hover:bg-pink-200 hover:text-pink-400 transition-all"
            >
              Reservar
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
};

export default CardList;

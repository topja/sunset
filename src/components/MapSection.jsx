import PropTypes from "prop-types";

const MapSection = ({ airbnbUrl, mapSrc }) => {
  return (
    <div className="w-full">
      <h2 className="mb-2 font-inter mt-8 text-lg text-center">
        Reserva con nosotros en{" "}
        <a
          href={airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-Charcoal font-bold hover:underline"
        >
          Airbnb
        </a>
      </h2>
      <iframe
        title="Ubicación"
        src={mapSrc}
        className="w-full h-[400px] border-0 rounded-md shadow-md"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

MapSection.propTypes = {
  airbnbUrl: PropTypes.string.isRequired,
  mapSrc: PropTypes.string.isRequired,
};

export default MapSection;

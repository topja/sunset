import PropTypes from 'prop-types';
import ImageCarousel from './ImageCarousel';
import Airbnb from '../assets/icons/Airbnb.svg';

const MapSection = ({ airbnbUrl, mapSrc, images }) => {
  return (
    <div className="w-full">
      <h2 className="mb-2 text-gray-700 font-inter mt-20 text-lg text-center">
        Reserva con nosotros en{' '}
        <a
          href={airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Airbnb}
            alt="Airbnb"
            className="h-6 inline hover:scale-105 transition-transform duration-300"
          />
        </a>
      </h2>

      <div className="mt-6 mb-10">
        <ImageCarousel images={images} />
      </div>

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
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MapSection;

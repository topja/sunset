import PropTypes from 'prop-types';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Airbnb from '../assets/icons/Airbnb.svg';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const MapSection = ({ airbnbUrl, mapSrc, images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      <h2 className="mb-2 text-gray-700 font-inter mt-20 text-lg text-center">
        Reserva con nosotros en{' '}
        <a
          href={airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Airbnb} alt="Airbnb"  className="h-6 inline hover:scale-105 transition-transform duration-300" />
        </a>
      </h2>
      <div className="mt-6">
        <Carousel responsive={responsive}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex mx-2 items-center justify-center bg-gray-200 rounded-md overflow-hidden shadow-md mb-10"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-48 cursor-pointer"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <iframe
        title="Ubicación"
        src={mapSrc}
        className="w-full h-[400px] border-0 rounded-md shadow-md"
        loading="lazy"
        allowFullScreen
      ></iframe>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={currentImageIndex}
          onIndexChange={setCurrentImageIndex}
        />
      )}
    </div>
  );
};

MapSection.propTypes = {
  airbnbUrl: PropTypes.string.isRequired,
  mapSrc: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MapSection;

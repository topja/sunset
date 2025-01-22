import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const MapSection = ({ airbnbUrl, mapSrc, images }) => {
  return (
    <div className="w-full">
      <h2 className="mb-2 font-inter mt-20 text-lg text-center">
        Reserva con nosotros en{" "}
        <a
          href={airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 rounded-2xl bg-Air font-bold hover:bg-AirHover"
        >
          Airbnb
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
                className="object-cover w-full h-48"
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
      
    </div>
  );
};

MapSection.propTypes = {
  airbnbUrl: PropTypes.string.isRequired,
  mapSrc: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MapSection;

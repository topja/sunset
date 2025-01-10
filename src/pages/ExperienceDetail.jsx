import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { cards } from "../data/bannerData";
import useReservationModal from "../hooks/useReservationModal";
import ReservationModal from "../components/ReservationModal";
import ReviewsSection from "../components/ReviewsSection";
import Clock from "../assets/icons/Clock.svg";
import Price from "../assets/icons/Price.svg";
import Date from "../assets/icons/Date.svg";

function ExperienceDetail() {
  const { id } = useParams();
  const allExperiences = [...cards.relax, ...cards.food, ...cards.sports];
  const experience = allExperiences.find((item) => item.id === id);

  if (!experience) {
    return <div className="p-4">No se encontró la experiencia.</div>;
  }

  const {
    isModalOpen,
    formData,
    handleOpenModal,
    handleCloseModal,
    updateFormField,
    handleReservation,
  } = useReservationModal();

  return (
    <div className="mt-24 md:mt-32 mx-4 md:mx-8 lg:mx-24">
      <ToastContainer position="top-right" autoClose={3000} />

      <img
        src={experience.image}
        alt={experience.title}
        className="my-4 w-full max-w-md object-cover rounded-lg"
      />
      <h2 className="text-2xl text-Charcoal font-agbalumo mb-2">{experience.title}</h2>
      <p className="text-gray-600 mb-2">{experience.description}</p>

      <div className="flex gap-2 mt-2">
        <img src={Clock} alt="Clock" className="h-6" />
        <div>
          <p className="font-bold">Duración</p>
          <p className="text-gray-700">{experience.duration}</p>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <img src={Price} alt="Price" className="h-6" />
        <div>
          <p className="font-bold">Precio</p>
          <p className="text-gray-700">{experience.price}</p>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <img src={Date} alt="Date" className="h-6" />
        <div>
          <p className="font-bold">Cancelación gratuita por 48 horas</p>
          <p className="text-gray-700">Si cambias de opinión, recibirás un reembolso total.</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-Charcoal font-agbalumo mt-2">Más detalles</h2>
        <p className="text-gray-600">{experience.completeDescription}</p>
      </div>

      <ReviewsSection experienceId={id} />

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <button
          className="bg-Gold m-auto hover:bg-Tan text-white px-4 py-2 rounded transition duration-300"
          onClick={() => handleOpenModal(experience, true)}
        >
          Reservar
        </button>
      </div>

      {isModalOpen && (
        <ReservationModal
          formData={formData}
          updateFormField={updateFormField}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleReservation}
          isExperience={true}
        />
      )}
    </div>
  );
}

export default ExperienceDetail;

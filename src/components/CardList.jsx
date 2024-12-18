import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import ReservationModal from "./ReservationModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedItem(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReservation = (e) => {
    e.preventDefault();

    const templateParams = {
      title: selectedItem.title,
      description: selectedItem.description,
      duration: selectedItem.duration || "No especificada",
      price: selectedItem.price || "No especificado",
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message || "Sin mensaje adicional",
    };

    // Enviar correo al cliente
    emailjs
      .send("service_5ba4aea", "template_gyhrm9d", templateParams, "VEdUEvObsOGRosT3B")
      .then(() => console.log("Correo enviado al cliente."));

    // Enviar correo al usuario
    emailjs
      .send("service_5ba4aea", "template_vau954s", templateParams, "VEdUEvObsOGRosT3B")
      .then(() => {
        toast.success("Reserva enviada correctamente. Revisa tu correo electrónico.");
        handleCloseModal();
      })
      .catch((error) => {
        toast.error("Hubo un error al enviar la reserva. Inténtalo de nuevo.");
        console.error("Error:", error);
      });
  };

  return (
    <>
      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-full shadow-lg rounded-md overflow-hidden bg-white"
          >
            {/* Imagen */}
            <div className="h-48 md:h-56 lg:h-64 w-full">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Contenido */}
            <div className="bg-gray-50 flex-1 flex flex-col justify-between p-4 md:p-6 lg:p-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {item.duration && <p className="text-gray-600">{item.duration}</p>}
                {item.price && <p className="text-gray-600">{item.price}</p>}
              </div>

              {/* Botón de Reserva */}
              <button
                className="bg-amber-500 hover:bg-amber-600 mt-2 text-white font-medium px-4 py-2 rounded-lg transition font-inter duration-300"
                onClick={() => handleOpenModal(item)}
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal del formulario */}
      {isModalOpen && (
        <ReservationModal
          formData={formData}
          handleChange={handleChange}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleReservation}
        />
      )}
    </>
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

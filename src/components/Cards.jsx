import { useState } from "react";
import { tabs, cards } from "../data/bannerData";
import Tabs from "./Tabs";
import Category from "./Category";
import ReservationModal from "./ReservationModal";
import { sendReservation } from "../services/ReservationService";
import { toast, ToastContainer } from "react-toastify";

const Cards = () => {
  const [activeTab, setActiveTab] = useState("kits");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    guests: 1,
    arrivalDate: new Date(),
  });

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setFormData({ name: "", email: "", phone: "", message: "", guests: 1, arrivalDate: new Date() });
  };

  const updateFormField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleReservation = async (e) => {
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
      guests: formData.guests,
      arrivalDate: formData.arrivalDate.toISOString().split("T")[0], // Formato YYYY-MM-DD
    };

    const result = await sendReservation(templateParams);

    if (result.success) {
      toast.success("Reserva enviada correctamente.");
      handleCloseModal();
    } else {
      toast.error("Error al enviar la reserva. Inténtalo de nuevo.");
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="bg-white px-6 md:px-8 lg:px-24 mb-12 mt-10">
        {activeTab === "kits" ? (
          <Category
            title="Kit de Bienvenida"
            items={cards.kits}
            onCardClick={handleOpenModal}
            buttonLabel="Lo Quiero"
          />
        ) : (
          Object.entries({
            Relajación: cards.relax,
            Gastronómicas: cards.food,
            Deportivas: cards.sports,
          }).map(([category, items]) => (
            <Category
              key={category}
              title={category}
              items={items}
              onCardClick={handleOpenModal}
              buttonLabel="Reservar"
            />
          ))
        )}
      </div>

      {isModalOpen && (
        <ReservationModal
          formData={formData}
          updateFormField={updateFormField}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleReservation}
        />
      )}
    </div>
  );
};

export default Cards;

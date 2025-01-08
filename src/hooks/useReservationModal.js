import { useState } from "react";
import { toast } from "react-toastify";
import { sendReservation } from "../services/ReservationService";

export default function useReservationModal() {
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

  const handleOpenModal = (item, isExperience = false) => {
    setSelectedItem(item);
    setFormData((prev) => ({
      ...prev,
      guests: isExperience ? prev.guests || 1 : undefined, 
      isExperience,
    }));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      guests: 1,
      arrivalDate: new Date(),
    });
  };

  const updateFormField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReservation = async (e) => {
    e.preventDefault();

    const templateParams = {
      title: selectedItem?.title,
      description: selectedItem?.description,
      duration: selectedItem?.duration || "No especificada",
      price: selectedItem?.price || "No especificado",
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message || "Sin mensaje adicional",
      guests: formData.guests,
      arrivalDate: formData.arrivalDate.toISOString().split("T")[0],
    };

    const result = await sendReservation(templateParams);

    if (result.success) {
      toast.success("Reserva enviada correctamente.");
      handleCloseModal();
    } else {
      toast.error("Error al enviar la reserva. Inténtalo de nuevo.");
    }
  };

  return {
    isModalOpen,
    selectedItem,
    formData,
    handleOpenModal,
    handleCloseModal,
    updateFormField,
    handleReservation,
  };
}
import { useState } from "react";
import { tabs, cards } from "../data/Data";
import Tabs from "./Tabs";
import Category from "./Category";
import ReservationModal from "./ReservationModal";
import { ToastContainer } from "react-toastify";
import useReservationModal from "../hooks/useReservationModal";

const Cards = () => {
  const [activeTab, setActiveTab] = useState("kits");

  const {
    isModalOpen,
    formData,
    handleOpenModal,
    handleCloseModal,
    updateFormField,
    handleReservation,
  } = useReservationModal();

  const categories = [
    { title: "Kits de Bienvenida", items: cards.kits, isExperience: false },
    { title: "Relajación", items: cards.relax, isExperience: true },
    { title: "Gastronómicas", items: cards.food, isExperience: true },
    { title: "Deportivas", items: cards.sports, isExperience: true },
  ];

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="bg-white px-6 md:px-8 lg:px-24 mb-12 mt-10">
        {categories
          .filter((category) => activeTab === "kits" ? !category.isExperience : category.isExperience)
          .map(({ title, items, isExperience }) => (
            <Category
              key={title}
              title={title}
              items={items}
              onCardClick={(item) => handleOpenModal(item, isExperience)}
              buttonLabel={isExperience ? "Reservar" : "Lo Quiero"}
              isExperience={isExperience}
            />
          ))}
      </div>

      {isModalOpen && (
        <ReservationModal
          formData={formData}
          updateFormField={updateFormField}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleReservation}
          isExperience={formData.isExperience}
        />
      )}
    </div>
  );
};

export default Cards;

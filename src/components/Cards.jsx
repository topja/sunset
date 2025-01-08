import { useState } from "react";
import { tabs, cards } from "../data/bannerData";
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

  return (
    <div>
     
      <ToastContainer position="top-right" autoClose={3000} />

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="bg-white px-6 md:px-8 lg:px-24 mb-12 mt-10">
        {activeTab === "kits" ? (
          <Category
            title="Kits de Bienvenida"
            items={cards.kits}
            onCardClick={(item) => handleOpenModal(item, false)}  
            buttonLabel="Lo Quiero"
            isExperience={false} 
          />
        ) : (
          <>
            <Category
              title="Relajación"
              items={cards.relax}
              onCardClick={handleOpenModal}
              buttonLabel="Reservar"
              isExperience={true}
            />
            <Category
              title="Gastronómicas"
              items={cards.food}
              onCardClick={handleOpenModal}
              buttonLabel="Reservar"
              isExperience={true}
            />
            <Category
              title="Deportivas"
              items={cards.sports}
              onCardClick={handleOpenModal}
              buttonLabel="Reservar"
              isExperience={true}
            />
          </>
        )}
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

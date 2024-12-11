import { useState } from "react";
import { tabs, cards } from "../data/bannerData";
import Tabs from "./Tabs";
import CardList from "./CardList";

const Banner = () => {
  const [activeTab, setActiveTab] = useState("kits");

  return (
    <div
      className="relative h-[500px] md:h-[600px] lg:h-[600px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/ElTabo5.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Encabezado */}
      <div className="relative top-0 left-0 w-full p-4 flex justify-between items-center text-white md:p-6 lg:p-8">
        <img src="/src/assets/sunset.svg" alt="logo" className="h-12 md:h-16 lg:h-20" />
        <nav className="flex space-x-4 text-sm md:text-base lg:text-lg">
          <a href="#about" className="hover:underline font-bold">
            About
          </a>
          <a href="#blog" className="hover:underline font-bold">
            Blog
          </a>
          <a href="#contact" className="hover:underline font-bold">
            Contact
          </a>
        </nav>
      </div>

      {/* Contenido Central */}
      <div className="relative flex flex-col justify-center items-start h-full text-left px-4 md:px-12 lg:px-20">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
          Limpia tu cuerpo, sana tu alma
        </h2>
        <p className="text-white font-bold text-base md:text-lg lg:text-xl mb-8">
          Empieza tu desconexión desde el primer momento.
        </p>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tarjetas */}
      <div className="bg-white px-6 md:px-8 lg:px-10">
        <CardList items={cards[activeTab]} />
      </div>
    </div>
  );
};

export default Banner;

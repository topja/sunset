import { useState } from "react";
import { tabs, cards } from "../data/bannerData";
import Tabs from "./Tabs";
import CardList from "./CardList";

const Banner = () => {
  const [activeTab, setActiveTab] = useState("kits");

  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/ElTabo.jpg')" }}
    >
      {/* Encabezado */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">S E</h1>
        <nav className="flex space-x-4">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#blog" className="hover:underline">
            Blog
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>

      {/* Contenido Central */}
      <div className="flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h2 className="text-2xl font-bold mb-2">Limpia tu cuerpo, sana tu alma</h2>
        <p className="text-base mb-8">Explora nuestras experiencias únicas y kits de bienvenida</p>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tarjetas */}
      <div className="bg-white p-6 mt-4">
        <CardList items={cards[activeTab]} />
      </div>
    </div>
  );
};

export default Banner;

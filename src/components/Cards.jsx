import { useState } from "react";
import { tabs, cards } from "../data/bannerData";
import Tabs from "./Tabs";
import CardList from "./CardList";

const Cards = () => {
  const [activeTab, setActiveTab] = useState("kits");

  return (
    <div className="">
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tarjetas */}
      <div className="bg-white px-6 md:px-8 lg:px-24 mb-12">
        <CardList items={cards[activeTab]} />
      </div>
    </div>
  );
};

export default Cards;

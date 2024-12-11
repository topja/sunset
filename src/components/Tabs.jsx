import PropTypes from "prop-types";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-white overflow-hidden">
      {/* Contenedor de pestañas - Scrollable */}
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 pl-4 pr-4 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-shrink-0 py-2 px-4 font-medium rounded-b-md whitespace-nowrap ${
              activeTab === tab.id ? "bg-amber-600 text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  /** Arreglo de objetos con las pestañas disponibles */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,

  /** ID de la pestaña actualmente activa */
  activeTab: PropTypes.string.isRequired,

  /** Función para cambiar la pestaña activa */
  setActiveTab: PropTypes.func.isRequired,
};

export default Tabs;

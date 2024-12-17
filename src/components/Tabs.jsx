import PropTypes from "prop-types";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="bottom-0 left-0 w-full bg-white overflow-hidden border-b border-gray-200">
      {/* Contenedor de pestañas */}
      <div className="flex overflow-x-auto md:overflow-visible scrollbar-hide space-x-4 pl-4 pr-4 justify-start md:justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex-shrink-0 py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 font-medium whitespace-nowrap transition-colors duration-200 ease-out 
              ${
                activeTab === tab.id
                  ? "border-b-2 border-verdeOscuro text-verdeOscuro"
                  : "border-b-2 border-transparent text-gray-700 hover:text-gray-900"
              }`}
          >
            {tab.label}
            {/* Efecto adicional para una línea activa debajo */}
            {activeTab === tab.id && (
              <span
                aria-hidden="true"
                className=""
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Tabs;

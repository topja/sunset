import PropTypes from "prop-types";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-white overflow-hidden">
      {/* Contenedor de pestañas */}
      <div
        className="flex overflow-x-auto md:overflow-visible scrollbar-hide space-x-4 pl-4 pr-4 pb-4 md:pb-6 lg:pb-8 justify-start md:justify-center"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-shrink-0 py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 font-medium rounded-b-md whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-verdeOscuro text-white"
                : "bg-white text-gray-700"
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

import PropTypes from "prop-types";
import WhatsappIcon from "../assets/icons/Whatsapp.svg";

const WhatsAppButton = ({ phoneNumber }) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, "")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 transition duration-300"
    >
      <img src={WhatsappIcon} alt="WhatsApp" className="w-12 h-12" />
    </button>
  );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};

export default WhatsAppButton;

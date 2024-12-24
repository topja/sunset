import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CloseIcon from "../assets/icons/Close.svg";

const MobileMenu = ({ links, isOpen, closeMenu }) => {
  if (!isOpen) return null; // No renderizar si isOpen es false

  return (
    <div
      className="fixed inset-0 z-40 transition-all duration-300 opacity-100 visible"
      onClick={closeMenu}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Menu Container */}
      <nav
        className="absolute top-0 left-0 h-full w-3/4 bg-Charcoal shadow-md transform translate-x-0 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} >
            <img src={CloseIcon} alt="Cerrar" className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col p-6">
          {links.map((link, index) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="block ml-3 py-3 text-2xl font-inter font-bold text-Gold hover:text-Tan transition-all"
                onClick={closeMenu}
              >
                {link.label}
              </Link>

              {/* Separador */}
              {index !== links.length - 1 && <div className="border-t border-gray-300 my-2" />}
            </li>
          ))}
        </ul>

        {/* Footer (Opcional) */}
        <div className="absolute bottom-6 left-6">
          <p className="text-sm text-Gold">© 2024 Sunset Experience</p>
        </div>
      </nav>
    </div>
  );
};

MobileMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default MobileMenu;

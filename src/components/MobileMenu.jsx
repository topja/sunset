import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MobileMenu = ({ links, isOpen, closeMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu}>
      {/* Menú */}
      <nav
        className="absolute top-0 left-0 w-3/4 h-full bg-white shadow-md z-50"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del menú cierre el fondo
      >
        <ul className="flex flex-col space-y-4 p-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="block text-gray-900 font-bold hover:text-customBlue"
                onClick={closeMenu} // Cierra el menú al hacer clic en un enlace
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
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

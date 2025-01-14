import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MenuIcon from "../assets/icons/Menu.svg";
import MobileMenu from "./MobileMenu";
import Logo from "../assets/Logo1.png";
import UseIcon from "../assets/icons/User.svg";

const NavigationBar = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-Charcoal shadow-md z-50">
      <div className="flex justify-between items-center p-4 md:px-8 lg:px-24">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12 md:h-16" />
        </Link>

        {/* Links y Menú de Hamburguesa */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 items-center" aria-label="Desktop Navigation">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-Gold hover:text-Tan font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {user && (
            <button
              onClick={logout}
              className="p-2 rounded-full hover:bg-Gold transition duration-300"
              aria-label="Cerrar sesión"
            >
              <img src={UseIcon} alt="Cerrar sesión" className="h-7 w-7" />
            </button>
          )}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={MenuIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menú desplegable en Mobile */}
      <MobileMenu
        links={links}
        isOpen={isMenuOpen}
        closeMenu={closeMenu}
        aria-label="Mobile Navigation"
      />
    </header>
  );
};

NavigationBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavigationBar;

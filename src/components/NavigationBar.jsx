import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/icons/Menu.svg";
import MobileMenu from "./MobileMenu";

const NavigationBar = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4 md:p-6 lg:p-8">
        {/* Logo */}
        <Link to="/">
          <img src="/src/assets/sunset.svg" alt="Logo" className="h-12 md:h-16" />
        </Link>

        {/* Links - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-gray-700 hover:text-customBlue font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Menú de Hamburguesa - Mobile */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={MenuIcon} alt="Menu" className="h-6 w-6" />
        </button>
      </div>

      {/* Menú desplegable en Mobile */}
      <MobileMenu links={links} isOpen={isMenuOpen} />
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

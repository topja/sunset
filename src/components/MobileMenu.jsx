import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MobileMenu = ({ links, isOpen }) => {
  if (!isOpen) return null; 

  return (
    <nav className="md:hidden bg-white shadow-md">
      <ul className="flex flex-row justify-center space-x-4 p-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="block text-gray-900 font-bold hover:text-customBlue"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
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
};

export default MobileMenu;

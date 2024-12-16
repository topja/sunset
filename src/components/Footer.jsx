import { Link } from "react-router-dom";
import FacebookIcon from "../assets/icons/Facebook.svg";
import TwitterIcon from "../assets/icons/Twitter.svg";
import InstagramIcon from "../assets/icons/Instagram.svg";
import LinkedinIcon from "../assets/icons/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center mt-5">
      <div className="container mx-auto p-6">
        {/* Redes Sociales */}
        <section className="mb-4 flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-gray-400 border transition-all hover:invert hover:brightness-0"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="h-6 w-6 hover:invert hover:brightness-0"
            />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-gray-400 border transition-all hover:invert hover:brightness-0"
          >
            <img
              src={TwitterIcon}
              alt="Twitter"
              className="h-6 w-6 hover:invert hover:brightness-0"
            />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-gray-400 border transition-all hover:invert hover:brightness-0"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="h-6 w-6 hover:invert hover:brightness-0"
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-gray-400 border transition-all hover:invert hover:brightness-0"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="h-6 w-6 hover:invert hover:brightness-0"
            />
          </a>
        </section>

        {/* Links Importantes */}
        <section className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h5 className="text-lg font-bold text-white mb-2">
                Sunset Experience
              </h5>
              <ul>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link to="/experiences" className="hover:text-white transition-colors">
                    Experiencias
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-2">Enlaces Útiles</h5>
              <ul>
                <li>
                  <Link to="/faq" className="hover:text-white transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-2">Experiencias</h5>
              <ul>
                <li>
                  <Link to="/experiences/cultural" className="hover:text-white transition-colors">
                    Culturales
                  </Link>
                </li>
                <li>
                  <Link to="/experiences/wellness" className="hover:text-white transition-colors">
                    Bienestar
                  </Link>
                </li>
                <li>
                  <Link to="/experiences/sports" className="hover:text-white transition-colors">
                    Deportes
                  </Link>
                </li>
                <li>
                  <Link to="/experiences/food" className="hover:text-white transition-colors">
                    Gastronomía
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-2">Contacto</h5>
              <p>Email: info@sunsetexperience.cl</p>
              <p>Teléfono: +56 9 1234 5678</p>
            </div>
          </div>
        </section>
      </div>

      {/* Línea Final */}
      <div className="bg-gray-900 text-gray-400 py-4 px-2 text-sm">
        © {new Date().getFullYear()} Sunsetexperience.cl. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

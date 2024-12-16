import { Link } from "react-router-dom";
import FacebookIcon from "../assets/facebook.svg";
import TwitterIcon from "../assets/Twitter.svg";
import InstagramIcon from "../assets/Instagram.svg";
import LinkedinIcon from "../assets/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-black text-center p-6">
      <div className="container mx-auto">
        {/* Redes Sociales */}
        <section className="mb-4 flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-2 border rounded-full  transition-all hover:brightness-50"
          >
            <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-2 border rounded-full transition-all hover:brightness-50"
          >
            <img src={TwitterIcon} alt="Twitter" className="h-6 w-6" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-2 border rounded-full transition-all hover:brightness-50"
          >
            <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-2 border rounded-full transition-all hover:brightness-50"
          >
            <img src={LinkedinIcon} alt="LinkedIn" className="h-6 w-6" />
          </a>
        </section>

        {/* Links Importantes */}
        <section className="mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h5 className="text-lg font-bold mb-2">Sunset Experience</h5>
              <ul>
                <li>
                  <Link to="/about" className="hover:text-indigo-500">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-indigo-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-indigo-500">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link to="/experiences" className="hover:text-indigo-500">
                    Experiencias
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-2">Enlaces Útiles</h5>
              <ul>
                <li>
                  <Link to="/faq" className="hover:text-indigo-500">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-indigo-500">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-indigo-500">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-2">Experiencias</h5>
              <ul>
                <li>
                  <Link to="/experiences/cultural" className="hover:text-indigo-500">
                    Culturales
                  </Link>
                </li>
                <li>
                  <Link to="/experiences/wellness" className="hover:text-indigo-500">
                    Bienestar
                  </Link>
                </li>
                <li>
                  <Link to="/experiences/sports" className="hover:text-indigo-500">
                    Deportes
                  </Link>
                </li>
                <li>
                  <Link to="/experiences/food" className="hover:text-indigo-500">
                    Gastronomía
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-2">Contacto</h5>
              <p>Email: info@sunsetexperience.cl</p>
              <p>Teléfono: +56 9 1234 5678</p>
            </div>
          </div>
        </section>

        {/* Derechos de Autor */}
        <div className="mt-6 border-t border-black pt-4 text-sm">
          © {new Date().getFullYear()} Sunsetexperience.cl. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

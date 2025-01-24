import { useState } from "react";
import MailIcon from "../assets/icons/Mail.svg";
import PhoneIcon from "../assets/icons/Phone.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PiscinaImage from "../assets/Piscina.avif";
import { sendContactEmail } from "../services/contactService";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";
import { mapSectionImages } from '../data/Data';

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormStatus("loading");
      await sendContactEmail(formData);

      setFormStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: "",
      });
      toast.success("¡Gracias! Hemos recibido tu mensaje.");
    } catch (error) {
      setFormStatus("error");
      toast.error("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <div
        className="relative mt-24 md:mt-32 mx-4 md:mx-8 lg:mx-24 h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center rounded-2xl"
        style={{ backgroundImage: `url(${PiscinaImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
        <div className="text-center relative z-10 text-white px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-agbalumo mb-3">
            Contáctanos
          </h1>
          <p className="text-white font-inter font-bold text-base md:text-lg lg:text-xl">
            Estamos aquí para responder tus preguntas y ayudarte a planificar
            momentos inolvidables.
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="mt-10 mb-10 px-4 lg:px-24 lg:mt-24 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center font-inter shadow-lg py-10 px-2 border-2 border-gray-200 rounded-md">
            <h2 className="text-3xl font-semibold tracking-tight text-Charcoal md:text-4xl font-agbalumo">
              Contáctanos
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              ¿Tienes consultas sobre nuestras experiencias o kits? Envíanos tu
              mensaje.
            </p>
            <div className="flex-col justify-center gap-10 mt-10">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={MailIcon}
                  alt="Mail"
                  className="h-10 w-10 p-2 rounded-full bg-Gold border-Charcoal border"
                />
                <p className="text-gray-700">inversioneselatardecer@gmail.com</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={PhoneIcon}
                  alt="Phone"
                  className="h-10 w-10 p-2 rounded-full bg-Gold border-Charcoal border"
                />
                <p className="text-gray-700">+56 9 9174 8857</p>
              </div>
            </div>
          </div>
          <ContactForm
            formData={formData}
            formStatus={formStatus}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <MapSection
          airbnbUrl="https://www.airbnb.cl/rooms/753469374767232802?_set_bev_on_new_domain=1734363698_EANTUwYzM2ZDQ3MG&source_impression_id=p3_1734389820_P35FlgGnExNXUxD2"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.647393720606!2d-71.66793932507089!3d-33.45849193908687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966215e164239725%3A0x75a314c38b24fc7c!2sWaldemar%20-%20Dr.%20A.%20Coutts%20171%2C%202690071%20El%20Tabo%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1737571111023!5m2!1ses!2scl"
          images={mapSectionImages}
        />
      </div>
    </>
  );
};

export default Contact;

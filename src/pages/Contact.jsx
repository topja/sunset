import { useState } from "react";
import MailIcon from "../assets/icons/Mail.svg";
import PhoneIcon from "../assets/icons/Phone.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PiscinaImage from "../assets/Piscina.avif";
import sendContactEmail from "../services/contactService";

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
    setFormStatus("loading");

    const emailData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      number: formData.number,
      message: formData.message,
    };

    const result = await sendContactEmail(emailData);

    if (result.success) {
      setFormStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: "",
      });
      toast.success("¡Gracias! Hemos recibido tu mensaje.");
    } else {
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
            <p className="mt-2 text-lg text-gray-600">
              ¿Tienes consultas sobre nuestras experiencias o kits? Envíanos tu
              mensaje.
            </p>
            <div className="flex justify-center gap-10 mt-10">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={MailIcon}
                  alt="Mail"
                  className="h-10 w-10 p-2 rounded-full bg-Gold border-Charcoal border"
                />
                <p>inversioneselatardecer@gmail.com</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={PhoneIcon}
                  alt="Phone"
                  className="h-10 w-10 p-2 rounded-full bg-Gold border-Charcoal border"
                />
                <p>+56 9 9174 8857</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 font-inter text-white p-6 rounded-md shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    Nombres
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Nombre completo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Apellidos
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Apellidos"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Correo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Correo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="number" className="block text-sm font-medium">
                    Número telefónico
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="text"
                    value={formData.number}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-700 p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Teléfono"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Deja tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Escribe tu mensaje aquí"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full sm:w-auto px-6 py-2 rounded bg-Tan text-white font-semibold hover:bg-Gold transition-all"
              >
                {formStatus === "loading" ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import { useState } from "react";
import MailIcon from "../assets/icons/Mail.svg";
import PhoneIcon from "../assets/icons/Phone.svg";
import OfficeIcon from "../assets/icons/Office.svg";

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
      const response = await fetch("https://formspree.io/f/xyyaoqnq", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="mt-10 mb-10 px-4 lg:px-24 lg:mt-24 lg:mb-24">
      
      <div className="bg-gradient-to-r h-20 from-verdeOscuro to-gray-800 text-white py-6 rounded-t-xl">
      </div> 

      {/* Formulario */}
      <div className="py-12">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center shadow-lg p-10 border-2 border-gray-200 rounded-md">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Contáctanos
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              ¿Tienes consultas sobre nuestras experiencias o kits? Envíanos tu mensaje.
            </p>
            <div className="flex justify-center gap-10 mt-10">
              <div className="flex flex-col items-center gap-2">
                <img src={MailIcon} alt="Mail" className="h-10 w-10 p-2 rounded-full border-gray-400 border" />
                <p className="font-bold">Correo</p>
                <p>info@example.com</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src={PhoneIcon} alt="Phone" className="h-10 w-10 p-2 rounded-full border-gray-400 border" />
                <p className="font-bold">Teléfono</p>
                <p>+56 123 456 789</p>
              </div>
            </div>
          </div>
          {/* Formulario */}
          <div className="bg-gray-800 text-white p-6 rounded-md shadow-md">
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

              {/* Botón */}
              <button
                type="submit"
                className="mt-6 w-full sm:w-auto px-6 py-2 rounded-md bg-verdeOscuro text-white font-semibold hover:bg-indigo-500 transition-all"
              >
                {formStatus === "loading" ? "Enviando..." : "Enviar Mensaje"}
              </button>
                    {/* Mensaje de estado */}
                {formStatus === "success" && (
                  <p className="mt-4 text-green-600">¡Gracias! Hemos recibido tu mensaje.</p>
                )}
                {formStatus === "error" && (
                  <p className="mt-4 text-red-600">Ocurrió un error. Inténtalo de nuevo.</p>
                )}
            </form>
             
          
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full mt-8">
          <p className="mb-2 mt-2 text-center">
            Reserva con nosotros en{" "}
            <a
              href="https://www.airbnb.cl/rooms/753469374767232802?_set_bev_on_new_domain=1734363698_EANTUwYzM2ZDQ3MG&source_impression_id=p3_1734389820_P35FlgGnExNXUxD2" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-verdeOscuro font-bold hover:underline"
            >
              Airbnb
            </a>
          </p>
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26081.5143879394!2d-71.6683081236221!3d-33.457312586493494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662160ac9bd0e47%3A0x147352da12254861!2sPlaza%20El%20Tabo!5e0!3m2!1ses!2scl!4v1734368862180!5m2!1ses!2scl"
            className="w-full h-[400px] border-0 rounded-md shadow-md"
            loading="lazy"
            allowFullScreen
          ></iframe>
      </div>
    </div>
  );
};

export default Contact;

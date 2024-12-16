import { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      setFormStatus("loading");
      const response = await fetch("https://formspree.io/f/xyyaoqnq", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          ¿Tienes consultas sobre nuestras experiencias o kits? Envíanos tu mensaje.
        </p>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {formStatus === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </div>
      </form>

      {formStatus === "success" && (
        <p className="mt-6 text-center text-green-600">
          ¡Gracias! Hemos recibido tu mensaje.
        </p>
      )}
      {formStatus === "error" && (
        <p className="mt-6 text-center text-red-600">
          Ocurrió un error. Inténtalo de nuevo.
        </p>
      )}

      {/* Botón para Airbnb */}
      <div className="mt-10 text-center">
        <a
          href="https://airbnb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-amber-500 px-4 py-2.5 text-white font-semibold shadow hover:bg-amber-400 transition-all"
        >
          Reserva en Airbnb
        </a>
      </div>
    </div>
  );
};

export default Contact;

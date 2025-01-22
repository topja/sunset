import PropTypes from "prop-types";

const ContactForm = ({ formData, formStatus, handleChange, handleSubmit }) => {
  return (
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
  );
};

ContactForm.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string,
    message: PropTypes.string.isRequired,
  }).isRequired,
  formStatus: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

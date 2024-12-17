import PropTypes from "prop-types";

const ReservationModal = ({
  formData,
  handleChange,
  handleCloseModal,
  handleSubmit,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Completa tu Reserva</h2>
        <form onSubmit={handleSubmit} className="space-y-4" role="form" >
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">
              Teléfono
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Deja un mensaje si quieres que consideremos algún cambio
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCloseModal}
              className="py-2 px-4 bg-gray-400 text-white rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-verdeOscuro text-white rounded-md hover:bg-pink-200 transition-all"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ReservationModal.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ReservationModal;

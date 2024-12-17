import PropTypes from "prop-types";
import ReserveIcon from "../assets/icons/Reserve.svg";

const ReservationModal = ({
  formData,
  handleChange,
  handleCloseModal,
  handleSubmit,
}) => {
  return (
    <div className="fixed inset-0 flex font-inter items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-1/3">
        <img src={ReserveIcon} alt="Reserve" className="h-20 w-20 p-2 rounded-full bg-teal-100 m-auto" />
        <h2 className="text-xl text-center font-agbalumo font-bold mb-4 mt-4">Completa tu Reserva</h2>
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
          <div className="flex justify-center flex-col lg:flex-row gap-3">
            <button
              type="submit"
              className="py-1 px-4 lg:w-44 text-white rounded-md font-bold bg-amber-500 hover:bg-amber-600 transition-all"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="py-1 px-4 lg:w-44 border-gray-300 border-2 bg-white font-bold text-black rounded-md hover:bg-gray-100 transition-all"
            >
              Cancelar
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

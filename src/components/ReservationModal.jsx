import PropTypes from "prop-types";
import ReserveIcon from "../assets/icons/Reserve.svg";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import esLocale from "date-fns/locale/es";
import { TextField, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ReservationModal = ({
  formData,
  updateFormField,
  handleCloseModal,
  handleSubmit,
  isExperience,
}) => {
  const incrementGuests = () => {
    updateFormField("guests", (formData.guests || 1) + 1); 
  };
  
  const decrementGuests = () => {
    if (formData.guests > 1) {
      updateFormField("guests", formData.guests - 1);
    }
  };  

  return (
    <div className="fixed inset-0 flex font-inter items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-6 md:px-9 lg:px-24 rounded-lg shadow-lg w-full md:w-2/3">
        <img
          src={ReserveIcon}
          alt="Reserve"
          className="h-12 w-12 p-2 rounded-full bg-teal-100 m-auto"
        />
        <h2 className="text-Charcoal text-xl text-center font-agbalumo font-bold mb-4 mt-4">
          Completa tu Reserva
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4" role="form">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => updateFormField("name", e.target.value)}
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
              onChange={(e) => updateFormField("email", e.target.value)}
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
              onChange={(e) => updateFormField("phone", e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          {isExperience && (
            <div>
              <label className="block text-gray-700">Número de Personas</label>
              <div className="flex items-center gap-4">
                <IconButton
                  onClick={decrementGuests}
                  color="primary"
                  disabled={formData.guests <= 1}
                >
                  <RemoveIcon />
                </IconButton>
                <span className="text-lg font-semibold">{formData.guests || 1}</span> 
                <IconButton onClick={incrementGuests} color="primary">
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          )}
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
              <DatePicker
                label="Fecha de Llegada"
                value={formData.arrivalDate}
                onChange={(date) => updateFormField("arrivalDate", date)}
                minDate={new Date()}
                textField={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </div>
          <div className="flex justify-center flex-col lg:flex-row gap-3">
            <button
              type="submit"
              className="py-1 px-4 lg:w-44 text-white rounded-md font-bold bg-Tan hover:bg-Gold transition-all"
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
    guests: PropTypes.number.isRequired,
    arrivalDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  updateFormField: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isExperience: PropTypes.bool.isRequired,
};

export default ReservationModal;
import emailjs from "@emailjs/browser";

export const sendReservation = async (templateParams) => {
  try {

    // Enviar correo al usuario
    await emailjs.send(
      "service_46sy2if",
      "template_mz5ugy7", 
      templateParams,
      "RZlA9W7LydyMmrvvO"
    );

    const phoneWithPlus = templateParams.user_phone.startsWith("+")
    ? templateParams.user_phone
    : `+${templateParams.user_phone}`;

    // Generar el mensaje para WhatsApp
    const whatsappMessage = `
      ¡Hola! Somos *Sunset Experience* y estamos muy contentos de que nos elijas para vivir momentos inolvidables. 

      Aquí están los detalles de tu reserva:
      - *Título*: ${templateParams.title}
      - *Descripción*: ${templateParams.description}
      - *Duración*: ${templateParams.duration}
      - *Precio*: ${templateParams.price}
      - *Número de Personas*: ${templateParams.guests}
      - *Fecha de Llegada*: ${templateParams.arrivalDate}

      *Tus datos*:
      - *Nombre*: ${templateParams.user_name}
      - *Correo*: ${templateParams.user_email}
      - *Teléfono*: ${phoneWithPlus}

      ¡Gracias por confiar en nosotros! 
    `.trim();

    // Codificar correctamente el mensaje
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Crear la URL para WhatsApp
    const phoneNumber = "56984506314"; 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");

    return { success: true };
  } catch (error) {
    console.error("Error al enviar la reserva:", error);
    return { success: false, error };
  }
};

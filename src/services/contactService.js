import emailjs from "@emailjs/browser";

export const sendContactEmail = async (formData) => {
  const serviceId = "service_46sy2if"; 
  const templateId = "template_pqssfqq"; 
  const userId = "RZlA9W7LydyMmrvvO"; 

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        number: formData.number,
        message: formData.message,
      },
      userId
    );

    return { success: true };
  } catch (error) {
    throw new Error(`Error al enviar el correo: ${error.message}`);
  }
};

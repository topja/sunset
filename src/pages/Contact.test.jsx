import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";
import { vi } from "vitest";
import * as contactService from "../services/contactService";

vi.mock("../services/contactService");

describe("Contact Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all form fields and Airbnb link", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/Nombres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Apellidos/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Número telefónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Deja tu mensaje/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Enviar mensaje/i })).toBeInTheDocument();

    const airbnbLink = screen.getByRole("link", { name: /Airbnb/i });
    expect(airbnbLink).toHaveAttribute(
      "href",
      "https://www.airbnb.cl/rooms/753469374767232802?_set_bev_on_new_domain=1734363698_EANTUwYzM2ZDQ3MG&source_impression_id=p3_1734389820_P35FlgGnExNXUxD2"
    );

    const googleMap = screen.getByTitle(/Ubicación/i);
    expect(googleMap).toBeInTheDocument();
  });

  it("updates form fields when the user types", () => {
    render(<Contact />);

    const firstNameInput = screen.getByLabelText(/Nombres/i);
    const lastNameInput = screen.getByLabelText(/Apellidos/i);
    const emailInput = screen.getByLabelText(/Correo/i);
    const messageInput = screen.getByLabelText(/Deja tu mensaje/i);

    fireEvent.change(firstNameInput, { target: { value: "Juan" } });
    fireEvent.change(lastNameInput, { target: { value: "Pérez" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Quiero reservar un kit" } });

    expect(firstNameInput.value).toBe("Juan");
    expect(lastNameInput.value).toBe("Pérez");
    expect(emailInput.value).toBe("juan@example.com");
    expect(messageInput.value).toBe("Quiero reservar un kit");
  });

  it("shows success message on successful submission", async () => {
    contactService.sendContactEmail.mockResolvedValueOnce({ success: true });

    render(<Contact />);

    const submitButton = screen.getByRole("button", { name: /Enviar mensaje/i });

    fireEvent.change(screen.getByLabelText(/Nombres/i), { target: { value: "Juan" } });
    fireEvent.change(screen.getByLabelText(/Apellidos/i), { target: { value: "Pérez" } });
    fireEvent.change(screen.getByLabelText(/Correo/i), { target: { value: "juan@example.com" } });
    fireEvent.change(screen.getByLabelText(/Deja tu mensaje/i), {
      target: { value: "Estoy interesado en el kit" },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(contactService.sendContactEmail).toHaveBeenCalledTimes(1);
      expect(contactService.sendContactEmail).toHaveBeenCalledWith({
        firstName: "Juan",
        lastName: "Pérez",
        email: "juan@example.com",
        number: "",
        message: "Estoy interesado en el kit",
      });
    });

    expect(
      await screen.findByText(/¡Gracias! Hemos recibido tu mensaje./i)
    ).toBeInTheDocument();
  });

  it("shows error message if submission fails", async () => {
    contactService.sendContactEmail.mockRejectedValueOnce(new Error("Error al enviar el correo"));

    render(<Contact />);

    const submitButton = screen.getByRole("button", { name: /Enviar mensaje/i });

    fireEvent.change(screen.getByLabelText(/Nombres/i), { target: { value: "Juan" } });
    fireEvent.change(screen.getByLabelText(/Apellidos/i), { target: { value: "Pérez" } });
    fireEvent.change(screen.getByLabelText(/Correo/i), { target: { value: "juan@example.com" } });
    fireEvent.change(screen.getByLabelText(/Deja tu mensaje/i), {
      target: { value: "Estoy interesado en el kit" },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(contactService.sendContactEmail).toHaveBeenCalledTimes(1);
    });

    expect(
      await screen.findByText(/Ocurrió un error al enviar el mensaje. Inténtalo de nuevo./i)
    ).toBeInTheDocument();
  });

  it("prevents submission if required fields are empty", () => {
    render(<Contact />);

    const submitButton = screen.getByRole("button", { name: /Enviar mensaje/i });

    fireEvent.click(submitButton);

    expect(contactService.sendContactEmail).not.toHaveBeenCalled();
    expect(screen.queryByText(/¡Gracias! Hemos recibido tu mensaje./i)).not.toBeInTheDocument();
  });
});

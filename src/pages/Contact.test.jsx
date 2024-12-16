import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";
import { vi } from "vitest";

// Mockeamos el fetch
global.fetch = vi.fn();

describe("Contact Section", () => {
  beforeEach(() => {
    fetch.mockReset(); // Reinicia el mock de fetch antes de cada prueba
  });

  it("renders the form fields and the Airbnb button", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Enviar mensaje/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Reserva en Airbnb/i })).toBeInTheDocument();
  });

  it("updates input fields when the user types", () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nombre completo/i);
    const emailInput = screen.getByLabelText(/Correo electrónico/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);

    fireEvent.change(nameInput, { target: { value: "Juan Pérez" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Estoy interesado en un kit." } });

    expect(nameInput.value).toBe("Juan Pérez");
    expect(emailInput.value).toBe("juan@example.com");
    expect(messageInput.value).toBe("Estoy interesado en un kit.");
  });

  it("shows a success message after submitting the form", async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nombre completo/i);
    const emailInput = screen.getByLabelText(/Correo electrónico/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);
    const submitButton = screen.getByRole("button", { name: /Enviar mensaje/i });

    fireEvent.change(nameInput, { target: { value: "Juan Pérez" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Estoy interesado en un kit." } });

    fireEvent.click(submitButton);

    expect(fetch).toHaveBeenCalledWith(
      "https://formspree.io/f/xyyaoqnq",
      expect.objectContaining({
        method: "POST",
        body: expect.any(FormData),
        headers: expect.objectContaining({
          Accept: "application/json",
        }),
      })
    );

    expect(await screen.findByText(/¡Gracias! Hemos recibido tu mensaje./i)).toBeInTheDocument();
  });

  it("shows an error message if submission fails", async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nombre completo/i);
    const emailInput = screen.getByLabelText(/Correo electrónico/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);
    const submitButton = screen.getByRole("button", { name: /Enviar mensaje/i });

    fireEvent.change(nameInput, { target: { value: "Juan Pérez" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Estoy interesado en un kit." } });

    fireEvent.click(submitButton);

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(await screen.findByText(/Ocurrió un error. Inténtalo de nuevo./i)).toBeInTheDocument();
  });

  it("prevents submission if fields are empty", () => {
    render(<Contact />);

    const submitButton = screen.getByRole("button", { name: /Enviar mensaje/i });

    fireEvent.click(submitButton);

    expect(fetch).not.toHaveBeenCalled();
    expect(screen.queryByText(/¡Gracias! Hemos recibido tu mensaje./i)).not.toBeInTheDocument();
  });
});

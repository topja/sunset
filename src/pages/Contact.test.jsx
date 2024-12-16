import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";
import { vi } from "vitest";

vi.mock("@emailjs/browser", () => ({
  send: vi.fn(() => Promise.resolve("Success")),
}));

describe("Contact Section", () => {
  it("renders the form fields and the Airbnb button", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Enviar mensaje/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Reserva en Airbnb/i })).toBeInTheDocument();
  });

});

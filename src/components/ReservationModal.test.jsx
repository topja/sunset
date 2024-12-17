import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ReservationModal from "./ReservationModal";

describe("ReservationModal Component", () => {
  const mockProps = {
    formData: {
      name: "John Doe",
      email: "john@example.com",
      phone: "123456789",
      message: "Quiero un cambio en la reserva",
    },
    handleChange: vi.fn(),
    handleCloseModal: vi.fn(),
    handleSubmit: vi.fn(),
  };

  it("renders the form fields correctly", () => {
    render(<ReservationModal {...mockProps} />);
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Correo Electrónico")).toBeInTheDocument();
    expect(screen.getByLabelText("Teléfono")).toBeInTheDocument();
    expect(
      screen.getByLabelText(
        "Deja un mensaje si quieres que consideremos algún cambio"
      )
    ).toBeInTheDocument();
  });

  it("calls handleCloseModal when clicking 'Cancelar'", () => {
    render(<ReservationModal {...mockProps} />);
    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);

    expect(mockProps.handleCloseModal).toHaveBeenCalled();
  });

  it("calls handleSubmit when submitting the form", () => {
    render(<ReservationModal {...mockProps} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(mockProps.handleSubmit).toHaveBeenCalled();
  });
});

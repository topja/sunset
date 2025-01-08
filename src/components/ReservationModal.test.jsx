import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ReservationModal from "./ReservationModal";

describe("ReservationModal Component", () => {
  const mockFormData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "123456789",
    guests: 2,
    arrivalDate: new Date(),
  };

  const mockUpdateFormField = vi.fn();
  const mockHandleCloseModal = vi.fn();
  const mockHandleSubmit = vi.fn((e) => e.preventDefault());

  it("renders the form fields correctly when isExperience is true", () => {
    render(
      <ReservationModal
        formData={mockFormData}
        updateFormField={mockUpdateFormField}
        handleCloseModal={mockHandleCloseModal}
        handleSubmit={mockHandleSubmit}
        isExperience={true} 
      />
    );

    expect(screen.getByLabelText("Nombre")).toHaveValue(mockFormData.name);
    expect(screen.getByLabelText("Correo Electrónico")).toHaveValue(mockFormData.email);
    expect(screen.getByLabelText("Teléfono")).toHaveValue(mockFormData.phone);
    expect(screen.getByText("Número de Personas")).toBeInTheDocument();
    expect(screen.getByLabelText("Fecha de Llegada")).toBeInTheDocument();
  });

  it("renders the form fields correctly when isExperience is false", () => {
    render(
      <ReservationModal
        formData={mockFormData}
        updateFormField={mockUpdateFormField}
        handleCloseModal={mockHandleCloseModal}
        handleSubmit={mockHandleSubmit}
        isExperience={false} 
      />
    );

    expect(screen.getByLabelText("Nombre")).toHaveValue(mockFormData.name);
    expect(screen.getByLabelText("Correo Electrónico")).toHaveValue(mockFormData.email);
    expect(screen.getByLabelText("Teléfono")).toHaveValue(mockFormData.phone);
    expect(screen.queryByText("Número de Personas")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Fecha de Llegada")).toBeInTheDocument();
  });

  it("calls updateFormField when inputs change", () => {
    render(
      <ReservationModal
        formData={mockFormData}
        updateFormField={mockUpdateFormField}
        handleCloseModal={mockHandleCloseModal}
        handleSubmit={mockHandleSubmit}
        isExperience={true}
      />
    );

    const nameInput = screen.getByLabelText("Nombre");
    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
    expect(mockUpdateFormField).toHaveBeenCalledWith("name", "Jane Doe");
  });

  it("calls handleCloseModal when clicking 'Cancelar'", () => {
    render(
      <ReservationModal
        formData={mockFormData}
        updateFormField={mockUpdateFormField}
        handleCloseModal={mockHandleCloseModal}
        handleSubmit={mockHandleSubmit}
        isExperience={true}
      />
    );

    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);
    expect(mockHandleCloseModal).toHaveBeenCalled();
  });

  it("calls handleSubmit when submitting the form", () => {
    render(
      <ReservationModal
        formData={mockFormData}
        updateFormField={mockUpdateFormField}
        handleCloseModal={mockHandleCloseModal}
        handleSubmit={mockHandleSubmit}
        isExperience={true}
      />
    );

    const submitButton = screen.getByText("Enviar");
    fireEvent.click(submitButton);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});

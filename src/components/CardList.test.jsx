import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CardList from "./CardList";

vi.mock("@emailjs/browser", () => ({
  send: vi.fn(() => Promise.resolve()), // Mock de emailjs para evitar llamadas reales
}));

describe("CardList Component", () => {
  const mockItems = [
    {
      title: "Reserva 1",
      description: "Descripción de reserva 1",
      image: "image1.jpg",
      duration: "2 horas",
      price: "50 USD",
    },
    {
      title: "Reserva 2",
      description: "Descripción de reserva 2",
      image: "image2.jpg",
      duration: "3 horas",
      price: "70 USD",
    },
  ];

  const mockOnCardClick = vi.fn();

  it("renders cards correctly", () => {
    render(<CardList items={mockItems} buttonLabel="Reservar" onCardClick={mockOnCardClick} />);
    expect(screen.getByText("Reserva 1")).toBeInTheDocument();
    expect(screen.getByText("Descripción de reserva 1")).toBeInTheDocument();
    expect(screen.getByText("50 USD")).toBeInTheDocument();

    expect(screen.getByText("Reserva 2")).toBeInTheDocument();
    expect(screen.getByText("Descripción de reserva 2")).toBeInTheDocument();
    expect(screen.getByText("70 USD")).toBeInTheDocument();
  });

  it("calls onCardClick when clicking the button", () => {
    render(<CardList items={mockItems} buttonLabel="Reservar" onCardClick={mockOnCardClick} />);
    const button = screen.getAllByText("Reservar")[0];
    fireEvent.click(button);

    expect(mockOnCardClick).toHaveBeenCalledWith(mockItems[0]);
  });
});

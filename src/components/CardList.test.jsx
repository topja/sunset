import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CardList from "./CardList";

vi.mock("@emailjs/browser", () => ({
  send: vi.fn(() => Promise.resolve()), 
}));

describe("CardList Component (Kits)", () => {
  const mockItemsKits = [
    {
      id: "kit-1",
      title: "Kit Clásico",
      description: "Descripción de kit clásico",
      image: "kit1.jpg",
    },
    {
      id: "kit-2",
      title: "Kit Playero",
      description: "Descripción de kit playero",
      image: "kit2.jpg",
    },
  ];

  const mockOnCardClick = vi.fn();

  it("renders kits correctly", () => {
    render(
      <CardList
        items={mockItemsKits}
        buttonLabel="Lo quiero"
        onCardClick={mockOnCardClick}
        isExperience={false}
      />
    );

    expect(screen.getByText("Kit Clásico")).toBeInTheDocument();
    expect(screen.getByText("Descripción de kit clásico")).toBeInTheDocument();

    expect(screen.getByText("Kit Playero")).toBeInTheDocument();
    expect(screen.getByText("Descripción de kit playero")).toBeInTheDocument();
  });

  it("calls onCardClick when clicking the button (kits)", () => {
    render(
      <CardList
        items={mockItemsKits}
        buttonLabel="Lo quiero"
        onCardClick={mockOnCardClick}
        isExperience={false}
      />
    );

    const button = screen.getAllByText("Lo quiero")[0];
    fireEvent.click(button);

    expect(mockOnCardClick).toHaveBeenCalledWith(mockItemsKits[0]);
  });
});

describe("CardList Component (Experiences)", () => {
  const mockItemsExperiences = [
    {
      id: "reserva-1",
      title: "Reserva 1",
      description: "Descripción de reserva 1",
      image: "image1.jpg",
      duration: "2 horas",
      price: "Desde 50 CLP/Persona",
    },
    {
      id: "reserva-2",
      title: "Reserva 2",
      description: "Descripción de reserva 2",
      image: "image2.jpg",
      duration: "3 horas",
      price: "Desde 70 CLP/Persona",
    },
  ];

  it("renders experiences as links", () => {

    render(
      <MemoryRouter>
        <CardList
          items={mockItemsExperiences}
          buttonLabel="Reservar"
          onCardClick={vi.fn()} 
          isExperience={true}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Reserva 1")).toBeInTheDocument();
    expect(screen.getByText("Descripción de reserva 1")).toBeInTheDocument();
    expect(screen.getByText("Desde 50 CLP/Persona")).toBeInTheDocument();

    expect(screen.getByText("Reserva 2")).toBeInTheDocument();
    expect(screen.getByText("Descripción de reserva 2")).toBeInTheDocument();
    expect(screen.getByText("Desde 70 CLP/Persona")).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);

    expect(links[0]).toHaveAttribute("href", "/experience/reserva-1");
  });

});

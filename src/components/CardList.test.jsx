import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

const mockItems = [
  {
    title: "Kit Clásico",
    description: "Botella de vino y chocolate.",
    image: "kit-clasico.jpg",
    duration: "2 horas",
    price: "$20",
  },
  {
    title: "Kit Playero",
    description: "Aperol y snack sorpresa.",
    image: "kit-playero.jpg",
    duration: "3 horas",
    price: "$25",
  },
];

describe("CardList Component", () => {
  it("renders all cards correctly", () => {
    render(<CardList items={mockItems} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it("renders the 'Reservar' button in each card", () => {
    render(<CardList items={mockItems} />);

    const buttons = screen.getAllByText("Reservar");
    expect(buttons).toHaveLength(mockItems.length);
  });

  it("displays the correct duration and price when provided", () => {
    render(<CardList items={mockItems} />);

    mockItems.forEach((item) => {
      if (item.duration) {
        expect(screen.getByText(item.duration)).toBeInTheDocument();
      }
      if (item.price) {
        expect(screen.getByText(item.price)).toBeInTheDocument();
      }
    });
  });

  it("uses lazy loading for images", () => {
    render(<CardList items={mockItems} />);

    const images = screen.getAllByRole("img");
    images.forEach((img, index) => {
      expect(img).toHaveAttribute("src", mockItems[index].image);
      expect(img).toHaveAttribute("loading", "lazy");
      expect(img).toHaveAttribute("alt", mockItems[index].title);
    });
  });
});

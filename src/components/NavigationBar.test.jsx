import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const mockLinks = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

describe("NavigationBar Component", () => {
  const renderWithRouter = (component) =>
    render(<BrowserRouter>{component}</BrowserRouter>);

  it("renders the logo", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation links on desktop", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);

    // Buscar solo los links de desktop
    const desktopNav = screen.getByRole("navigation");
    mockLinks.forEach((link) => {
      expect(desktopNav).toHaveTextContent(link.label);
    });
  });

  it("shows the hamburger menu button", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);
    const hamburgerButton = screen.getByRole("button");
    expect(hamburgerButton).toBeInTheDocument();
  });
});

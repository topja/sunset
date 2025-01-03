import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import NavigationBar from "./NavigationBar";

// Mock del contexto de autenticación
vi.mock("../context/AuthContext", () => ({
  useAuth: vi.fn(),
}));

const mockLinks = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

describe("NavigationBar Component", () => {
  const renderWithRouter = (component) =>
    render(<BrowserRouter>{component}</BrowserRouter>);

  beforeEach(() => {
    const { useAuth } = require("../context/AuthContext");
    useAuth.mockReturnValue({
      user: { displayName: "Test User" }, // Simula un usuario autenticado
      logout: vi.fn(), // Simula la función de cerrar sesión
    });
  });

  it("renders the logo", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation links on desktop", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);
    const desktopNav = screen.getByRole("navigation", {
      name: "Desktop Navigation",
    });
    mockLinks.forEach((link) => {
      expect(desktopNav).toHaveTextContent(link.label);
    });
  });

  it("shows the hamburger menu button", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);
    const hamburgerButton = screen.getByAltText("Menu");
    expect(hamburgerButton).toBeInTheDocument();
  });

  it("shows the logout icon when user is logged in", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);
    const logoutIcon = screen.getByAltText("Cerrar sesión");
    expect(logoutIcon).toBeInTheDocument();
  });
});

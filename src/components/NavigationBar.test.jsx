import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import NavigationBar from "./NavigationBar";
import { useAuth } from "../context/AuthContext";

vi.mock("../context/AuthContext", () => ({
  useAuth: vi.fn(),
}));

const mockLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

describe("NavigationBar Component", () => {
  const renderWithRouter = (component) =>
    render(<BrowserRouter>{component}</BrowserRouter>);

  beforeEach(() => {
    useAuth.mockReturnValue({
      user: { displayName: "Test User" },
      logout: vi.fn(),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
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

  it("shows the hamburger menu button on mobile", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);
    const hamburgerButton = screen.getByAltText("Menu");
    expect(hamburgerButton).toBeInTheDocument();
  });

  it("shows the logout icon when the user is logged in", () => {
    renderWithRouter(<NavigationBar links={mockLinks} />);
    const logoutIcon = screen.getByAltText("Cerrar sesión");
    expect(logoutIcon).toBeInTheDocument();
  });

  it("calls logout when the logout icon is clicked", () => {
    const mockLogout = vi.fn();
    useAuth.mockReturnValue({
      user: { displayName: "Test User" },
      logout: mockLogout,
    });

    renderWithRouter(<NavigationBar links={mockLinks} />);
    const logoutIcon = screen.getByAltText("Cerrar sesión");
    fireEvent.click(logoutIcon);

    expect(mockLogout).toHaveBeenCalled();
  });
});

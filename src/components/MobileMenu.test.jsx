import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const mockLinks = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

describe("MobileMenu Component", () => {
  const renderWithRouter = (component) =>
    render(<BrowserRouter>{component}</BrowserRouter>);

  const mockCloseMenu = vi.fn();

  it("does not render menu when closed", () => {
    renderWithRouter(
      <MobileMenu links={mockLinks} isOpen={false} closeMenu={mockCloseMenu} />
    );
    mockLinks.forEach((link) => {
      expect(screen.queryByText(link.label)).not.toBeInTheDocument();
    });
  });

  it("renders menu links when open", () => {
    renderWithRouter(
      <MobileMenu links={mockLinks} isOpen={true} closeMenu={mockCloseMenu} />
    );
    mockLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });
});

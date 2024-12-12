import { render, screen, fireEvent } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

const mockLinks = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

describe("NavigationBar Component", () => {
  it("renders the logo", () => {
    render(<NavigationBar links={mockLinks} />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation links on desktop", () => {
    render(<NavigationBar links={mockLinks} />);

    mockLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it("toggles the mobile menu when clicking the hamburger button", () => {
    render(<NavigationBar links={mockLinks} />);

    const hamburgerButton = screen.getByRole("button");
    fireEvent.click(hamburgerButton);

    mockLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });

    fireEvent.click(hamburgerButton);

    mockLinks.forEach((link) => {
      expect(screen.queryByText(link.label)).not.toBeInTheDocument();
    });
  });
});

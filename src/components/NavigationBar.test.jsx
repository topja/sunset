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
});

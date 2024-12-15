import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

const mockTabs = [
  { id: "kits", label: "Kit Bienvenida" },
  { id: "experiences", label: "Experiencias" },
  { id: "sports", label: "Deporte" },
];

describe("Tabs Component", () => {
  it("renders all tabs correctly", () => {
    render(<Tabs tabs={mockTabs} activeTab="kits" setActiveTab={() => {}} />);

    mockTabs.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  it("applies active styles to the correct tab", () => {
    render(<Tabs tabs={mockTabs} activeTab="experiences" setActiveTab={() => {}} />);

    const activeTab = screen.getByText("Experiencias");
    expect(activeTab).toHaveClass("bg-verdeOscuro text-white");
  });

  it("calls setActiveTab when a tab is clicked", () => {
    const setActiveTabMock = vi.fn();
    render(<Tabs tabs={mockTabs} activeTab="kits" setActiveTab={setActiveTabMock} />);

    fireEvent.click(screen.getByText("Deporte"));

    expect(setActiveTabMock).toHaveBeenCalledWith("sports");
  });
});

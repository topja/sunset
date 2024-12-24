import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import WhatsAppButton from "./WhatsAppButton";

describe("WhatsAppButton Component", () => {
  it("renders the WhatsApp button", () => {
    render(<WhatsAppButton phoneNumber="+56991748857" />);
    const button = screen.getByRole("button", { name: /Chat on WhatsApp/i });
    expect(button).toBeInTheDocument();
  });

  it("opens WhatsApp on click", () => {
    global.open = vi.fn(); // Mock window.open
    render(<WhatsAppButton phoneNumber="+56991748857" />);
    const button = screen.getByRole("button", { name: /Chat on WhatsApp/i });

    fireEvent.click(button);

    expect(global.open).toHaveBeenCalledWith(
      "https://wa.me/+56991748857",
      "_blank"
    );
  });
});

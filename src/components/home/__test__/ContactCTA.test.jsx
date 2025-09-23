/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import ContactCTA from "../ContactCTA";
import "@testing-library/jest-dom";

describe("ContactCTA Component", () => {
  beforeEach(() => {
    render(<ContactCTA />);
  });

  test("renders the heading", () => {
    const heading = screen.getByRole("heading", { name: /get in touch with us/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the paragraph", () => {
    const paragraph = screen.getByText(/whether you have questions, prayer requests, or want to get involved/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("renders the Contact Us button with correct href", () => {
    const button = screen.getByRole("link", { name: /contact us/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/contact");
  });

  test("button has correct classes for styling and hover", () => {
    const button = screen.getByRole("link", { name: /contact us/i });
    expect(button).toHaveClass("bg-yellow-400");
    expect(button).toHaveClass("text-purple-900");
    expect(button).toHaveClass("rounded-lg");
  });
});

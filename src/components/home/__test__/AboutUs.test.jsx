/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import AboutUs from "../AboutUs";
import "@testing-library/jest-dom";
import { FaArrowRight } from "react-icons/fa";

describe("AboutUs Component", () => {
  beforeEach(() => {
    render(<AboutUs />);
  });

  test("renders the section with correct id", () => {
    const section = screen.getByRole("region", { name: /about/i });
    expect(section).toBeInTheDocument();
  });

  test("renders the heading", () => {
    const heading = screen.getByRole("heading", { name: /welcome to kingdom prevailers/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all paragraphs", () => {
    const paragraphs = screen.getAllByText(/we warmly welcome you|here, you’ll experience|come and be part/i);
    expect(paragraphs.length).toBe(3);
  });

  test("renders the image with correct src and alt", () => {
    const image = screen.getByAltText("Welcoming community");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/welcome-image.webp");
  });

  test("renders About Us button with icon", () => {
    const button = screen.getByRole("link", { name: /about us/i });
    expect(button).toBeInTheDocument();
    const icon = button.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  test("renders correct classes on button", () => {
    const button = screen.getByRole("link", { name: /about us/i });
    expect(button).toHaveClass("bg-purple-600");
    expect(button).toHaveClass("group");
  });
});

/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import ConnectWithUs from "../ConnectWithUs";
import "@testing-library/jest-dom";

describe("ConnectWithUs Component", () => {
  beforeEach(() => {
    render(<ConnectWithUs />);
  });

  test("renders the section with correct id", () => {
    const section = screen.getByRole("region", { name: /connect/i });
    expect(section).toBeInTheDocument();
  });

  test("renders the heading", () => {
    const heading = screen.getByRole("heading", { name: /connect with us/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all paragraphs", () => {
    const paragraphs = screen.getAllByText(/at kingdom prevailers|no matter where you come from|join us/i);
    expect(paragraphs.length).toBe(3);
  });

  test("renders the image with correct src and alt", () => {
    const image = screen.getByAltText("Connecting community");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/connect-image.webp");
  });

  test("renders the gradient container around the image", () => {
    const gradientDiv = screen.getByAltText("Connecting community").parentElement;
    expect(gradientDiv).toHaveClass("bg-gradient-to-br");
    expect(gradientDiv).toHaveClass("rounded-2xl");
  });
});

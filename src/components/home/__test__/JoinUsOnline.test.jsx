/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import JoinUsOnline from "../JoinUsOnline";
import "@testing-library/jest-dom";

describe("JoinUsOnline Component", () => {
  beforeEach(() => {
    render(<JoinUsOnline />);
  });

  test("renders the main heading", () => {
    const heading = screen.getByRole("heading", { name: /Join Us Online/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all paragraphs", () => {
    const paragraph1 = screen.getByText(/Can’t make it to our Sunday service/i);
    const paragraph2 = screen.getByText(/Wherever you are in the world/i);
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test("renders the Watch Now button with correct href", () => {
    const button = screen.getByRole("link", { name: /Watch Now/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/live");
  });

  test("renders the image with correct alt text", () => {
    const image = screen.getByAltText("Join us online");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/join-us-online.webp");
  });
});

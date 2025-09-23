/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "../Hero";
import "@testing-library/jest-dom";
import { FaBible, FaPrayingHands, FaChurch } from "react-icons/fa";

describe("Hero Component", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test("renders the main heading", () => {
    const heading = screen.getByRole("heading", { name: /Kingdom Prevailers International Christian Centre/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the main paragraph", () => {
    const paragraph = screen.getByText(/A place where faith meets maturity, and God's love prevails/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("renders all slides", () => {
    const slideTitles = ["Faith", "Love", "Worship"];
    slideTitles.forEach((title) => {
      const slide = screen.getByText(title);
      expect(slide).toBeInTheDocument();
    });
  });

  test("active slide displays stats and description", () => {
    // By default, first slide is active
    expect(screen.getByText(/Walk by faith and not by sight/i)).toBeInTheDocument();
    expect(screen.getByText("2 Corinthians 5:7")).toBeInTheDocument();
    expect(screen.getByText("500+")).toBeInTheDocument();
  });

  test("clicking on a slide sets it as active", () => {
    const loveSlide = screen.getByText("Love");
    fireEvent.click(loveSlide);

    // Check that Love slide description appears
    expect(screen.getByText(/Love your neighbor as yourself/i)).toBeInTheDocument();
    expect(screen.getByText("Matthew 22:39")).toBeInTheDocument();
  });

  test("renders icons for each slide", () => {
    expect(screen.getAllByRole("img", { hidden: true }).length).toBeGreaterThanOrEqual(3);
  });
});

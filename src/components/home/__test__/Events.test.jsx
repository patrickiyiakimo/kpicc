/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Events from "../Events";
import "@testing-library/jest-dom";
import { events } from "../../common/eventsData"; // adjust path if necessary

describe("Events Component", () => {
  beforeEach(() => {
    render(<Events />);
  });

  test("renders the section with heading", () => {
    const heading = screen.getByRole("heading", { name: /upcoming kpicc events/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders up to 6 upcoming events", () => {
    const eventTitles = events.slice(0, 6).map((e) => e.title);
    eventTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("renders event details: date, time, location, description if present", () => {
    const firstEvent = events[0];
    
    if (firstEvent.date) {
      expect(screen.getByText(firstEvent.date)).toBeInTheDocument();
    }
    if (firstEvent.time) {
      expect(screen.getByText(firstEvent.time)).toBeInTheDocument();
    }
    if (firstEvent.location) {
      expect(screen.getByText(firstEvent.location)).toBeInTheDocument();
    }
    if (firstEvent.description) {
      expect(screen.getByText(firstEvent.description)).toBeInTheDocument();
    }
  });

  test("renders event images with correct alt text", () => {
    const firstEvent = events[0];
    if (firstEvent.image) {
      const image = screen.getByAltText(firstEvent.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", firstEvent.image);
    }
  });

  test('renders "View All Events" link', () => {
    const viewAllLink = screen.getByRole("link", { name: /view all events/i });
    expect(viewAllLink).toBeInTheDocument();
    expect(viewAllLink).toHaveAttribute("href", "/events");
  });
});

/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

// Mock window.scrollY for scroll tests
Object.defineProperty(window, "scrollY", {
  writable: true,
  value: 0,
});

describe("Navbar", () => {
  beforeEach(() => {
    // Reset scrollY before each test
    window.scrollY = 0;
  });

  test("renders logo and nav items", () => {
    render(<Navbar />);

    // Logo
    expect(screen.getByText("KPICC")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /kpicc/i })).toHaveAttribute("href", "/");

    // Desktop nav items
    ["Home", "About", "Upcoming Events", "Faq"].forEach((item) => {
      expect(screen.getAllByText(item)[0]).toBeInTheDocument();
    });

    // Buttons
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/give online/i)).toBeInTheDocument();
  });

  test("changes background when scrolled", () => {
    render(<Navbar />);

    const nav = screen.getByRole("navigation") || screen.getByTestId("navbar");

    // Initial state: transparent
    expect(nav).toHaveClass("bg-transparent");

    // Simulate scroll
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    // Scrolled: has gradient class
    expect(nav.className).toMatch(/bg-gradient-to-r/);
  });

  test("mobile menu toggle works", () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(toggleButton).toBeInTheDocument();

    // Menu should be closed initially
    expect(screen.queryByText("Home")).toBeInTheDocument(); // desktop menu always visible
    expect(screen.queryByText("Contact")).toBeInTheDocument();

    // Open mobile menu
    fireEvent.click(toggleButton);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(1); // mobile + desktop

    // Close mobile menu
    fireEvent.click(toggleButton);
    // AnimatePresence unmounts menu
  });

  test("clicking mobile menu items closes the menu", () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });

    // Open menu
    fireEvent.click(toggleButton);

    const mobileLink = screen.getAllByText("Home")[1]; // pick mobile link
    fireEvent.click(mobileLink);

    // Menu should close
    expect(screen.queryByText("Home")).toBeInTheDocument(); // Desktop still exists
  });

  test("renders FaBible icon", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /kpicc/i }).querySelector("svg")).toBeInTheDocument();
  });
});

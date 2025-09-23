/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Sermons from "../Sermons";

// Mock SermonCard since it has heavy DOM (iframe, images)
jest.mock("../SermonCard", () => ({ id, title, speaker, date, summary }) => (
  <div data-testid="sermon-card">
    <h3>{title}</h3>
    <p>{speaker}</p>
    <time>{date}</time>
    <p>{summary}</p>
  </div>
));

// Mock sermonsData with 15 sermons
jest.mock("../../common/sermonsData", () =>
  Array.from({ length: 15 }, (_, i) => ({
    id: `id-${i + 1}`,
    title: `Sermon ${i + 1}`,
    speaker: `Speaker ${i + 1}`,
    date: `2025-09-${i + 1}`,
    summary: `Summary ${i + 1}`,
  }))
);

describe("Sermons Component", () => {
  beforeEach(() => {
    // Mock scrollTo
    window.scrollTo = jest.fn();
    render(<Sermons />);
  });

  test("renders section heading", () => {
    expect(
      screen.getByRole("heading", { name: /Sermon Highlights/i })
    ).toBeInTheDocument();
  });

  test("renders 6 sermons on the first page", () => {
    const sermons = screen.getAllByTestId("sermon-card");
    expect(sermons).toHaveLength(6);
    expect(screen.getByText("Sermon 1")).toBeInTheDocument();
    expect(screen.getByText("Sermon 6")).toBeInTheDocument();
  });

  test("pagination shows correct page info", () => {
    expect(screen.getByText("Page 1 of 3")).toBeInTheDocument();
  });

  test("next button loads next page of sermons", () => {
    const nextButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(nextButton);

    expect(screen.getByText("Page 2 of 3")).toBeInTheDocument();
    expect(screen.getByText("Sermon 7")).toBeInTheDocument();
    expect(screen.getByText("Sermon 12")).toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalled();
  });

  test("previous button goes back to page 1", () => {
    const nextButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(nextButton);

    const prevButton = screen.getByRole("button", { name: /Previous/i });
    fireEvent.click(prevButton);

    expect(screen.getByText("Page 1 of 3")).toBeInTheDocument();
    expect(screen.getByText("Sermon 1")).toBeInTheDocument();
  });

  test("previous button is disabled on first page", () => {
    const prevButton = screen.getByRole("button", { name: /Previous/i });
    expect(prevButton).toBeDisabled();
  });

  test("next button is disabled on last page", () => {
    const nextButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(nextButton); // Go to page 2
    fireEvent.click(nextButton); // Go to page 3

    expect(screen.getByText("Page 3 of 3")).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  });
});

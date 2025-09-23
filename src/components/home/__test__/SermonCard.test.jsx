/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import SermonCard from "../SermonCard";

describe("SermonCard Component", () => {
  const mockProps = {
    id: "abcd1234",
    title: "Faith in Action",
    speaker: "Pastor John",
    date: "September 23, 2025",
    summary: "A powerful sermon on walking by faith.",
  };

  beforeEach(() => {
    render(<SermonCard {...mockProps} />);
  });

  test("renders title, speaker, date, and summary", () => {
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(`By ${mockProps.speaker}`)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
    expect(screen.getByText(mockProps.summary)).toBeInTheDocument();
  });

  test("renders thumbnail image initially", () => {
    const img = screen.getByAltText(`Thumbnail for ${mockProps.title}`);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      `https://img.youtube.com/vi/${mockProps.id}/hqdefault.jpg`
    );
  });

  test("plays video when play button is clicked", () => {
    const playButton = screen.getByRole("button", {
      name: `Play video`,
    });

    fireEvent.click(playButton);

    const iframe = screen.getByTitle(mockProps.title);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      `https://www.youtube.com/embed/${mockProps.id}?autoplay=1&rel=0`
    );

    // Close button appears
    const closeBtn = screen.getByText("Close Video");
    expect(closeBtn).toBeInTheDocument();
  });

  test("closes video when Close Video button is clicked", () => {
    const playButton = screen.getByRole("button", { name: /Play video/i });
    fireEvent.click(playButton);

    const closeBtn = screen.getByText("Close Video");
    fireEvent.click(closeBtn);

    expect(screen.queryByTitle(mockProps.title)).not.toBeInTheDocument();
    expect(
      screen.getByAltText(`Thumbnail for ${mockProps.title}`)
    ).toBeInTheDocument();
  });

  test("Watch Full Sermon button has correct link", () => {
    const watchButton = screen.getByRole("button", {
      name: `Watch full sermon: ${mockProps.title}`,
    });
    expect(watchButton).toBeInTheDocument();
    expect(watchButton).toHaveTextContent("Watch Full Sermon");
  });
});

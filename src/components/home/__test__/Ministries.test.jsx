/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Ministries from "../Ministries";
import "@testing-library/jest-dom";

describe("Ministries Component", () => {
  beforeEach(() => {
    render(<Ministries />);
  });

  test("renders the main heading", () => {
    const heading = screen.getByRole("heading", { name: /Our Ministries/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all ministry cards", () => {
    const ministryTitles = [
      "Youth Ministry",
      "Women’s Ministry",
      "Prayer Ministry",
      "Men’s Ministry",
      "Children’s Ministry",
    ];

    ministryTitles.forEach((title) => {
      const cardTitle = screen.getByRole("heading", { name: title });
      expect(cardTitle).toBeInTheDocument();
    });
  });

  test("renders images with correct alt text", () => {
    const imageAlts = [
      "Youth Ministry",
      "Women’s Ministry",
      "Prayer Ministry",
      "Men’s Ministry",
      "Children’s Ministry",
    ];

    imageAlts.forEach((alt) => {
      const img = screen.getByAltText(alt);
      expect(img).toBeInTheDocument();
    });
  });

  test("renders descriptions for each ministry", () => {
    const descriptions = [
      "Empowering young people through relevant teachings, mentorship, and community events to become future leaders rooted in faith.",
      "A nurturing environment where women can grow spiritually, connect deeply, and serve actively through various programs and fellowship.",
      "Dedicated to intercession and lifting the needs of the church and community in fervent, faith-filled prayer.",
      "Building strong, godly men through discipleship, fellowship, and purposeful outreach activities.",
      "Providing a safe, fun, and spiritually enriching environment for children to learn about God's love and grow in faith.",
    ];

    descriptions.forEach((desc) => {
      const paragraph = screen.getByText(desc);
      expect(paragraph).toBeInTheDocument();
    });
  });
});

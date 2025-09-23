/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";
import { FaYoutube } from "react-icons/fa";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("renders About section with heading and description", () => {
    const aboutHeading = screen.getByRole("heading", { name: /kingdom prevailers/i });
    expect(aboutHeading).toBeInTheDocument();

    const aboutText = screen.getByText(/kingdom prevailers international christian centre is committed/i);
    expect(aboutText).toBeInTheDocument();
  });

  test("renders Quick Links section with links", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    const contactLink = screen.getByRole("link", { name: /contact/i });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  test("renders Contact Us section with address and email", () => {
    expect(screen.getByText(/39 Road, 3rd Avenue Gwarimpa, Abuja, Nigeria/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: info@kingdomprevailers.org/i)).toBeInTheDocument();
  });

  test("renders social media links with icons", () => {
    const youtubeLink = screen.getByRole("link", { name: /facebook/i }); // aria-label is Facebook for FaYoutube in code
    expect(youtubeLink).toHaveAttribute("href", "https://youtube.com/kingdomprevailers");

    const facebookLink = screen.getAllByRole("link", { name: /facebook/i })[1];
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com/kingdomprevailers");

    const twitterLink = screen.getByRole("link", { name: /twitter/i });
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/kingdomprevailers");

    const instagramLink = screen.getByRole("link", { name: /instagram/i });
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com/kingdomprevailers");
  });

  test("renders copyright notice with current year", () => {
    const year = new Date().getFullYear();
    const copyright = screen.getByText(
      new RegExp(`© ${year} Kingdom Prevailers International Christian Centre. All rights reserved.`, "i")
    );
    expect(copyright).toBeInTheDocument();
  });
});

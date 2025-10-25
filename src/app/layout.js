import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarContainer from "@/containers/home/NavbarContainer";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KPICC",
  description: "Welcome to KPICC – a vibrant community where faith, fellowship, and impactful events come together to inspire, uplift, and connect people from all walks of life. Join us for worship, youth activities, conferences, and celebrations of God's faithfulness.",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavbarContainer />
        {children}
        <ContactCTA />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Make sure this exists in the right location
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Topbar from "./components/Topbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Templet8-hakathon",
  description: "Generated by kiran Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Topbar />
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

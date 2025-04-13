import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matias Laime",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased bg-dark-hard w-screen min-h-screen flex flex-col text-grey-light`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

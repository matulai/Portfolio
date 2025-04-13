"use client";
import { useState } from "react";

import Link from "next/link";

const navItems = [
  { label: "SOBRE MÍ", href: "/" },
  { label: "PROYECTOS", href: "proyectos" },
  { label: "CONTACTO", href: "contacto" },
  { label: "CONFIG", href: "config" },
];

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("SOBRE MÍ");

  return (
    <header className="h-32 w-full px-40 py-5 flex justify-between items-center border-b border-grey-light">
      {navItems.map(item => {
        const isActive = item.label === activeButton;

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setActiveButton(item.label)}
            className={`px-4 py-3 w-80 flex items-center justify-center duration-100 transition-all ease-in-out
          ${
            isActive
              ? "bg-grey-dark text-black h-full"
              : "bg-dark-light text-grey-light hover:bg-grey-dark hover:text-black"
          }`}
          >
            <span className="text-4xl font-normal">{item.label}</span>
          </Link>
        );
      })}
    </header>
  );
};

export default Navbar;

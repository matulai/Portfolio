"use client"; // Si estás en Next.js

import { usePathname } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import Chevron from "@/components/Chevron";

const navItems = [
  { label: "SOBRE MÍ", href: "/" },
  { label: "PROYECTOS", href: "/proyects" },
  { label: "EXPERIENCIA", href: "/experience" },
  { label: "CONTACTO", href: "/contact" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // TODO: la altura del absolute no cubre toda la screen, hay que arreglarlo
  return (
    <nav className="flex flex-col items-start p-4">
      <div className="flex flex-row items-center justify-between">
        <button
          className="flex flex-col gap-1 p-2.5 bg-dark-light hover:bg-grey-dark hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-7 h-1 bg-grey-light"></span>
          <span className="w-7 h-1 bg-grey-light"></span>
          <span className="w-7 h-1 bg-grey-light"></span>
        </button>
      </div>

      <div
        className={`absolute top-0 left-0 bottom-0 flex flex-col items-start gap-4 p-4 w-full max-w-72 h-full z-50 bg-dark-hard
         transition-transform duration-200 ease-in-out
         ${isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"}`}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <span className="text-2xl">MENU</span>
          <button
            className="flex flex-col gap-1 p-2.5 bg-dark-light hover:bg-grey-dark hover:text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Chevron className="-rotate-90" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
          {navItems.map(item => {
            const isActive = pathname == item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-center py-2 w-full text-2xl duration-100 transition-all ease-in-out
                  ${
                    isActive
                      ? "bg-grey-dark text-black h-full"
                      : "bg-dark-light hover:bg-grey-dark hover:text-black"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

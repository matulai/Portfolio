"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

const navItems = [
  { label: "SOBRE MÍ", href: "/" },
  { label: "PROYECTOS", href: "/proyects" },
  { label: "CONTACTO", href: "/contact" },
  { label: "CONFIG", href: "/config" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-evenly items-center py-5 h-32">
      {navItems.map(item => {
        const isActive = pathname == item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-center px-4 py-3 w-80 text-4xl duration-100 transition-all ease-in-out
          ${
            isActive
              ? "bg-grey-dark text-black h-full"
              : "bg-dark-light hover:bg-grey-dark hover:text-black"
          }`}
          >
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};

export default Navbar;

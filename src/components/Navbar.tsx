"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

const navItems = [
  { label: "SOBRE MÍ", href: "/" },
  { label: "PROYECTOS", href: "/proyects" },
  { label: "EXPERIENCIA", href: "/experiencia" },
  { label: "CONTACTO", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-evenly items-center py-4 h-24 2xl:py-5 2xl:h-32">
      {navItems.map(item => {
        const isActive = pathname == item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-center py-2 w-52 text-2xl duration-100 transition-all ease-in-out
          ${
            isActive
              ? "bg-grey-dark text-black h-full"
              : "bg-dark-light hover:bg-grey-dark hover:text-black"
          } 2xl:py-4 2xl:w-80 2xl:text-4xl`}
          >
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};

export default Navbar;

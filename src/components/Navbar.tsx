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
    <header className="h-32 w-full px-40 py-5 flex justify-between items-center border-b border-grey-light">
      {navItems.map(item => {
        const isActive = pathname == item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-3 w-80 flex items-center justify-center duration-100 transition-all ease-in-out
          ${
            isActive
              ? "bg-grey-dark text-black h-full"
              : "bg-dark-light hover:bg-grey-dark hover:text-black"
          }`}
          >
            <span className="text-4xl">{item.label}</span>
          </Link>
        );
      })}
    </header>
  );
};

export default Navbar;

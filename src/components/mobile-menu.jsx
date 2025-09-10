import { XIcon, Menu } from "lucide-react";

import { useState } from "react";
import { NavLink } from "react-router";

import { navLinks } from "../constants";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Hamburger Button */}

      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-700 focus:outline-none hidden max-[898px]:block"
      >
        <Menu className="size-10 text-base-color " />
      </button>

      {/* Overlay */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu */}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[500px] px-8 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}

        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <XIcon className="text-base-color size-10" />
          </button>
        </div>

        <img src="/logo.png" className="h-28 mb-6" alt="" />

        {/* Menu Links */}

        <ul className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li onClick={() => setIsOpen(false)} className="text-lg" key={link.name}>
                            <NavLink
                          to={link.href}
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-base-color font-semibold text-xl border-b-2 border-base-color pb-1"
                                : "text-base"
                            } hover:text-base-color transition-all text-lg`
                          }
                        >
                          {link.name}
                        </NavLink>
                    </li>
                  ))}
                </ul>
      </div>
    </nav>
  );
};

export default MobileMenu;

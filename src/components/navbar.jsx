import { NavLink } from "react-router";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  LifeBuoy,
} from "lucide-react";
import MobileMenu from "./mobile-menu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "FAQs", href: "/#faq", isHash: true },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  return (
    <nav className="w-full">

      <div className="w-full h-12 bg-base-color flex-center-y justify-between text-white px-4 lg:px-10">
        <div className="flex-center-y gap-5 text-sm">
          <p className="flex-center-y max-md:!hidden gap-1">
            <Mail size={14} />
            barsmiko@gmail.com
          </p>

          <p className="flex-center-y gap-1">
            <LifeBuoy size={18} />
            24/7 Support
          </p>

          <p className="flex-center-y max-md:!hidden gap-1">
            <Phone size={14} />
            +2349042312231
          </p>
        </div>
        <div className="flex-center-y gap-3 md:gap-5">
          <Facebook className="size-5" />
          <Instagram className="size-5" />
          <Linkedin className="size-5" />
          <Twitter className="size-5" />
        </div>
      </div>

      <div className="flex-center-y justify-between max-w-7xl mx-auto h-20 px-4">
        <img src="/logo.png" alt="logo" className="h-10 md:h-12" />
        <ul className="flex max-[898px]:hidden gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.isHash ? (
                <a
                  href={link.href}
                  className="text-base hover:text-base-color transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-base-color font-semibold text-lg"
                        : "text-base"
                    } hover:text-base-color transition-all`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div>
          <button className="btn max-[898px]:hidden">Contact Us</button>
          <MobileMenu navLinks={navLinks} />
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

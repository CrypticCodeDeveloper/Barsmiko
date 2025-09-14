import { NavLink } from "react-router";
import {
  Mail,
  Phone,
  LifeBuoy,
} from "lucide-react";
import MobileMenu from "./mobile-menu";

import { navLinks, socials } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full border-b pb-4 border-base-color">

      <div className="w-full h-12 bg-base-color flex-center-y justify-between text-white px-4 lg:px-10">
        <div className="flex-center-y gap-5 text-sm">
          <p className="flex-center-y max-md:!hidden gap-1">
            <Mail size={14} />
            info@barsmiko-inc.net
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
         {
          socials.map((social, i) => (
             <a key={`social-link-${i}`} href={social.href} ><social.icon className="size-5" /></a>
          ))
         }
        </div>
      </div>

      <div className="flex-center-y justify-between max-w-7xl mx-auto h-20 px-4">
        <img src="/logo.png" alt="logo" className="h-28 md:h-26" />
        <ul className="flex max-[898px]:hidden gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
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
            </li>
          ))}
        </ul>
        <div>
          <button className="btn max-[898px]:hidden">Talk to our team</button>
          <MobileMenu/>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

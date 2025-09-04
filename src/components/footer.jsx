import { navLinks, socials } from "../constants";

const footerLinks = [
  {
    sectionTitle: "Quick Links",
    links: navLinks,
  },
  {
    sectionTitle: "Sectors",
    links: [
      { name: "Who We Serve", href: "/#who-we-serve" },
      { name: "Partners", href: "/#partners" },
      { name: "What We Do", href: "/#what-we-do" },
      { name: "Frequently Asked Questions", href: "/#faqs" },
      { name: "Our Core Values", href: "/about#our-core-values" },
    ],
  },
  {
    sectionTitle: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Talk to Our team", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-base-color text-white min-h-[40vh] flex max-md:flex-col justify-between gap-10 p-6 lg:p-10">
  

  

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {footerLinks.map((section, i) => (
            <div key={`footer-section-${i}`}>
              <h3 className="text-lg mb-4">{section.sectionTitle}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, i) => (
                  <li key={`footer-link-${i}`}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
   

        <div>
          <h3 className="text-lg mb-4">Follow us on</h3>
          <div className="flex-center-y gap-4">
            {
              socials.map((social, i) => (
                <div key={`footer-social-link-${i}`} className="bg-white flex-center-all p-2 rounded-full">
                  <a  className="text-base-color" href={social.href}><social.icon /></a>
                  </div>
              ))
            }
          </div>
        </div>

    </footer>
  );
};

export default Footer;

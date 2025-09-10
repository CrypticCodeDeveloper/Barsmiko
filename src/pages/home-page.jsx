import {
  Rocket,
  ArrowRight,
  Building2,
  Microscope,
  Wrench,
  TrendingUp,
  Workflow,
  CreditCard,
  FlaskConical,
} from "lucide-react";
import { FaqsAccordion } from "../components/faq-accordion";
import Marquee from "react-fast-marquee";
import SectionFooterCta from "../components/section-footer.cta";
import path from "path";
import Heroslides from "../components/hero-slides";

const HomePage = () => {
  return (
    <section>
      {/* <Hero /> */}
      <Heroslides />
      <WhatWeDo />
      <WhoWeHelp />
      <WhyBarsmiko />
      <Partners />
      <FAQs />
      <SectionFooterCta
        title="Ready to simplify your hustle and scale with ease?"
        subTitle="Let Barsmiko be your unfair advantage."
        btns={[
          {
            text: "Start Your Journey",
            onClick: () => alert("Start Your Journey"),
          },
          {
            text: "Talk to Our Team",
            onClick: () => alert("Talk to our team"),
          },
        ]}
      />
    </section>
  );
};

const FAQs = () => {
  return (
    <div className="section bg-base-color" id="faqs">
      <h1 className="relative text-white mb-8">
        FAQs
        <div className="border-2 border-white w-[60%] mx-auto mt-1" />
      </h1>

      <FaqsAccordion />
    </div>
  );
};

const Partners = () => {
  const logos = [
    {
      path: "/logos/mtn.png",
      size: "h-16",
    },
    {
      path: "/logos/cloudworkz.png",
      size: "h-56",
    },
    {
      path: "/logos/palmpay.png",
      size: "h-56",
    },
    {
      path: "/logos/turing.png",
      size: "h-12",
    },
  ];

  return (
    <div className="section px-4" id="partners">
      <h1 className="relative text-2xl md:text-4xl">
        Partners & Collaborations
        <div className="border-2 border-base-color w-[60%] mx-auto mt-1" />
      </h1>

      <Marquee
        className="mt-8 flex-center-y md:!w-[80%] p-4"
        gradient={false}
        speed={50}
        pauseOnHover={false}
      >
        {logos.map((logo, i) => (
          <img
            key={`partner-logo-${i}`}
            src={logo.path}
            alt={`Partner Logo ${i + 1}`}
            className={`${logo.size} mx-6 md:mx-8`}
          />
        ))}
      </Marquee>

      <p className="text-gray-800 text-lg mt-5 text-center max-w-4xl">
        We are proud of the diverse experiences our team brings to Barsmiko. Collectively, our staff have contributed their expertise to organizations such as PalmPay, MTN, CloudWorkz, and Turing — experience that now fuels the innovative solutions we deliver to our clients.

      </p>
    </div>
  );
};

const WhyBarsmiko = () => {
  const productPrinciples = [
    {
      text: "Built for real businesses, not tech demos",
      icon: Building2,
    },
    {
      text: "Backed by deep research & field-tested design",
      icon: Microscope,
    },
    {
      text: "Custom-fit to your needs, no fluff, no overwhelm",
      icon: Wrench,
    },
    {
      text: "Designed for scalability, simplicity, and long-term wins",
      icon: TrendingUp,
    },
  ];

  return (
    <div
      className="section !flex-row max-[1112px]:!flex-col px-10 bg-base-color"
      id="why-barsmiko"
    >
      <div className="text-center mr-4">
        <h2 className="text-white text-4xl lg:text-6xl">Why Barsmiko?</h2>
        <p className="text-gray-300 text-xl max-w-lg mt-2 md:mt-4">
          We don’t just sell tools, we engineer smart systems that grow with
          you. Here’s why businesses trust Barsmiko
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-7">
        {productPrinciples.map((product, i) => (
          <div
            key={`why-barsmiko-card-${i}`}
            className={`bg-white flex-center-all !flex-col text-center text-lg font-semibold p-2 w-[250px] h-[170px] ${
              i == 1 || i == 2 ? " !bg-[#242424] !h-[200px] !text-white" : ""
            } ${i == 0 && "self-end"}`}
          >
            <product.icon className="size-10 mb-4" />
            <p>{product.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhoWeHelp = () => {
  const orgs = [
    {
      title: "SMEs & Side Hustlers",
      desc: "Tools that save time, reduce stress, and help you grow without breaking the bank.",
      image_path: "/who-we-help/side-hustlers.jpg",
    },
    {
      title: "Startups & Creators",
      desc: "From launch to scale, we help you build with speed, intention, and systems that stick.",
      image_path: "/who-we-help/startups.jpg",
    },
    {
      title: "Fintechs & Financials",
      desc: "We support digital wallets, peer-to-peer transfers, payment platforms, and more especially for underserved markets.",
      image_path: "/who-we-help/fintech.jpg",
    },
    {
      title: "NGOs & Development",
      desc: "Tech that amplifies your impact. We help you deliver services efficiently and transparently.",
      image_path: "/who-we-help/agencies.jpg",
    },
    {
      title: "Government & Enterprises",
      desc: "From digital onboarding to automated workflows, we modernize public sector programs for the future.",
      image_path: "/who-we-help/government.jpg",
    },
  ];

  return (
    <div className="section  text-black px-10" id="who-we-serve">
      <h1 className="relative">
        Who We Help
        <div className="border-2 border-base-color w-[60%] mx-auto mt-1" />
      </h1>

      <div className="mt-8 flex-center-all flex-wrap gap-5">
        {orgs.map((card, i) => (
          <div
            key={`who-we-help-card-${i}`}
            className="min-w-[300px] max-w-[350px] border-2  border-base-color"
          >
            <div className="w-full h-[200px] overflow-hidden border-b-2  border-base-color relative">
              <div className="w-full h-full absolute bg-base-color/20" />
              <img
                src={card.image_path}
                className="w-full h-full object-cover"
                alt={card.title}
              />
            </div>
            <div className="min-h-[120px] p-4">
              <h4 className="text-lg text-base-color">{card.title}</h4>
              <p className="mt-2 text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  const offerings = [
    {
      title: "Intelligent Automation",
      text: "Cut the manual work. We build backend systems that streamline your operations, save time, and scale with you.",
      icon: Workflow,
    },
    {
      title: "Seamless Fintech (featuring PapayMoni)",
      text: "Modern financial tools designed for real-world transactions, fast, reliable, and user-first.",
      icon: CreditCard,
    },
    {
      title: "Research & Digital Innovation",
      text: "From idea to MVP to full product, we bring clarity, creativity, and technical depth to every project.",
      icon: FlaskConical,
    },
    {
      title: "Enterprise Services",
      text: "Custom software, internal tools, dashboards, and more built to modernize and transform how large organizations operate.",
      icon: Building2,
    },
  ];

  return (
    <div className="section text-black px-10" id="what-we-do">
      <div className="w-full flex max-md:flex-col justify-center items-center gap-10 py-10">
        <div className="md:min-w-[350px]">
          <h3 className="sub-section-heading">WHAT WE DO</h3>
          <h1 className="sub-section-subheading md:max-w-sm">
            We help{" "}
          businesses
            grow with less friction and more precision
          </h1>
        </div>

        <ArrowRight className="size-18 text-base-color max-md:hidden" />

        <p className="text-lg md:text-sm lg:text-lg text-gray-900 max-w-xl">
          At Barsmiko, we help businesses grow with less friction and more
          precision. Whether you are an SME, startup, or scaling enterprise, we
          create digital systems that actually work for you, not against you.
          From research-driven innovation to smart automation and intuitive
          fintech platforms, we eliminate busywork, boost your bottom line, and
          simplify the way you run your business.
        </p>
      </div>

      <div className="mt-8 gap-4 flex-col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {offerings.map((offering, i) => (
          <div className="card" key={`what-we-do-card-${i}`}>
            <div className="flex-center-y justify-between">
              <offering.icon size={30} />
              <h2 className="text-gray-200">{String(i + 1).padStart(2, 0)}</h2>
            </div>

            <h4 className="text-xl my-4">{offering.title}</h4>

            <p className="text-sm">{offering.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative">
      <img
        src="/hero-image.jpg"
        className="w-full h-full object-cover absolute -z-10"
      />
      <div className="w-full h-full bg-gradient-to-r from-white/80 via-white/50 to-transparent absolute -z-10" />
      <div className="h-full w-full flex-center-all flex-col px-4">
        <h1 className="text-base-color text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex-center-y flex-col text-center gap-3">
          <Rocket className="size-12" />
          Smart Tech for Bold Builders
        </h1>
        <h3 className="text-sm md:text-lg max-w-xl text-center text-gray-800">
           Build, scale, and automate without the chaos. From fintech to ops, Barsmiko gives you the systems to grow smarter.
        </h3>

        <div className="mt-8 lg:mt-4 flex-center-y gap-4">
          <button className="btn">Start Building Smarter</button>
          <button className="btn flex-center-y gap-1 !bg-transparent border border-base-color !text-base-color">
            Explore Our Solutions
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

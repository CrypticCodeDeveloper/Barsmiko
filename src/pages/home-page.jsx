import { Rocket, ArrowRight, RecycleIcon, Building2,
  Microscope,
  Wrench,
  TrendingUp,Workflow,
  CreditCard,
  FlaskConical,
  } from "lucide-react";
import { FaqsAccordion } from "../components/faq-accordion";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <WhatWeDo />
      <WhoWeHelp />
      <WhyBarsmiko />
      <Partners />
      <FAQs />
      <FooterCTA />
    </section>
  );
};

const FooterCTA = () => {
  return (
    <div className="section text-center">
      <h2 className="uppercase text-base-color font-semibold text-xl md:text-3xl lg:text-4xl max-w-2xl mb-2">
        Ready to simplify your hustle and scale with ease?
      </h2>
      <p className="text-lg mt-2">Let Barsmiko be your unfair advantage.</p>
      <div className="flex-center-y gap-4 mt-8">
        <button className="btn font-semibold">
          Start your Journey
        </button>
        <button className="btn !bg-transparent border border-base-color !text-base-color font-semibold">
          Talk to Our Team
        </button>
      </div>
    </div>
  )
}

const FAQs = () => {
  return (
    <div className="section bg-base-color" id="faq">
       <h1 className="relative text-white mb-8">FAQs
        <div className="border-2 border-white w-[60%] mx-auto mt-1" />
      </h1>

        <FaqsAccordion />

    </div>
  )
}

const Partners = () => {

  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
  ]

  return (
    <div className="section px-4">
      <h1 className="relative text-2xl">Partners & Collaborations
        <div className="border-2 border-base-color w-[60%] mx-auto mt-1" />
      </h1>

      <Marquee className="mt-8 flex-center-y md:!w-[80%] p-4" gradient={false} speed={50} pauseOnHover={false} >
        {
          logos.map((logo, i) => (
            <img key={`partner-logo-${i}`} src={logo} alt={`Partner Logo ${i+1}`} className="h-7 md:h-10 mx-6 md:mx-8" />
          )
          )
        }
      </Marquee>

      <p className="text-gray-800 mt-5 text-center">
        We collaborate with industry leaders, forward-thinking founders, and mission-aligned organizations to bring powerful solutions to life.
      </p>
    </div>
  )
}

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
    text: "Custom-fit to your needs — no fluff, no overwhelm",
    icon: Wrench,
  },
  {
    text: "Designed for scalability, simplicity, and long-term wins",
    icon: TrendingUp,
  },
];

  return (
    <div className="section !flex-row max-[1112px]:!flex-col px-10 bg-base-color">
      <div className="text-center mr-4">
        <h2 className="text-white">Why Barsmiko?</h2>
        <p className="text-gray-300 max-w-lg mt-1">
          We don’t just sell tools — we engineer smart systems that grow with you. Here’s why businesses trust Barsmiko
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-7">
        {
          productPrinciples.map((product,i) => (
            <div key={`why-barsmiko-card-${i}`} className={`bg-white flex-center-all !flex-col text-center text-lg font-semibold p-2 w-[250px] h-[170px] ${i == 1 || i == 2 ? " !bg-[#242424] !h-[200px] !text-white" : ""} ${i == 0 && "self-end"}`}>
              <product.icon className="size-10 mb-4" />
              <p>{product.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const WhoWeHelp = () => {

  const orgs = [
    {
      title: "SMEs & Side Hustlers",
      desc: "Tools that save time, reduce stress, and help you grow without breaking the bank.",
      image_path: "/who-we-help/side-hustlers.jpg"
    },
    {
      title: "Startups & Creators",
      desc: "From launch to scale, we help you build with speed, intention, and systems that stick.",
      image_path: "/who-we-help/startups.jpg"
    },
    {
      title: "Fintechs & Financial Service Providers",
      desc: "We support digital wallets, peer-to-peer transfers, payment platforms, and more — especially for underserved markets.",
      image_path: "/who-we-help/fintech.jpg"
    },
    {
      title: "NGOs & Development Agencies",
      desc: "Tech that amplifies your impact. We help you deliver services efficiently and transparently.",
      image_path: "/who-we-help/agencies.jpg"
    },
    {
      title: "Government & Enterprises",
      desc: "From digital onboarding to automated workflows, we modernize public sector programs for the future.",
      image_path: "/who-we-help/government.jpg"
    },
  ]

  return (
    <div className="section  text-black px-10">
      <h1 className="relative">Who We Help 
        <div className="border-2 border-base-color w-[60%] mx-auto mt-1" />
      </h1>

      <div className="mt-8 flex-center-all flex-wrap gap-5">


      {
        orgs.map((card, i) => (
          <div key={`who-we-help-card-${i}`} className="min-w-[300px] max-w-[350px] border-2  border-base-color">
        <div className="w-full h-[200px] overflow-hidden border-b-2  border-base-color relative">
            <div className="w-full h-full absolute bg-base-color/20" />
            <img src={card.image_path} className="w-full h-full object-cover" alt={card.title} />
        </div>
        <div className="min-h-[120px] p-4">
            <h4 className="text-lg text-base-color">{card.title}</h4>
            <p className="mt-2 text-sm">
              {card.desc}
            </p>
        </div>
      </div>
        ))
      }

      </div>
    </div>
  )
}

const WhatWeDo = () => {
  const offerings = [
  {
    title: "Intelligent Automation",
    text: "Cut the manual work. We build backend systems that streamline your operations, save time, and scale with you.",
    icon: Workflow,
  },
  {
    title: "Seamless Fintech (featuring PapayMoni)",
    text: "Modern financial tools designed for real-world transactions — fast, reliable, and user-first.",
    icon: CreditCard,
  },
  {
    title: "Research & Digital Innovation",
    text: "From idea to MVP to full product, we bring clarity, creativity, and technical depth to every project.",
    icon: FlaskConical,
  },
  {
    title: "Enterprise Services",
    text: "Custom software, internal tools, dashboards, and more — built to modernize and transform how large organizations operate.",
    icon: Building2,
  },
];


  return (
    <div className="section text-black px-10">

      <div className="w-full flex-center-y flex-col lg:flex-row justify-center gap-10">

        <div>
          <h3 className="font-semibold text-xl text-base-color tracking-wider">WHAT WE DO</h3>
          <h1 className="mt-2 text-3xl lg:text-4xl max-w-2xl">We help <span className="border-b-2 border-base-color">businesses</span> grow with less friction and more precision</h1>
        </div>


        <p className="text-sm text-gray-900 max-w-xl">
          At Barsmiko, we help businesses grow with less friction and more precision.
 Whether you are an SME, startup, or scaling enterprise, we create digital systems that actually work for you — not against you.
From research-driven innovation to smart automation and intuitive fintech platforms, we eliminate busywork, boost your bottom line, and simplify the way you run your business.
        </p>

      </div>


      <div className="mt-8 gap-4 flex-col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {
          offerings.map((offering, i) => (
            <div className="card" key={`what-we-do-card-${i}`}>
            <div className="flex-center-y justify-between">
              <offering.icon size={30} />
              <h2 className="text-gray-200">{String(i+1).padStart(2,0)}</h2>
            </div>

            <h4 className="text-xl my-4">{offering.title}</h4>

            <p className="text-sm">
               {offering.text}
            </p>
        </div>
          ))
        }

      </div>


    </div>
  )
}

const Hero = () => {
  return (
    <div className="w-full h-[70vh] relative">
      <img
        src="/hero-image.jpg"
        className="w-full h-full object-cover absolute -z-10"
      />
      <div className="w-full h-full bg-gradient-to-r from-white/80 via-white/50 to-transparent absolute -z-10" />
      <div className="h-full w-full flex-center-all flex-col px-4">
        <h1 className="text-base-color text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex-center-y flex-col text-center gap-3">
          <Rocket className="size-12" />
          Smart Tech for Bold Builders.
        </h1>
        <h3 className="text-sm md:text-lg max-w-xl text-center text-gray-800">
          Build, scale, and automate — without the chaos. From fintech to ops,
          Barsmiko gives you the systems to grow smarter.
        </h3>

        <div className="mt-8 lg:mt-4 flex-center-y gap-4">
        <button className="btn">
          Start Building Smarter
        </button>
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

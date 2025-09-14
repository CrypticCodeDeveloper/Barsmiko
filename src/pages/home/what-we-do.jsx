import {
  ArrowRight,
  Building2,
  Workflow,
  CreditCard,
  FlaskConical,
} from "lucide-react";

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
          create digital systems that actually work for you, not against you. <br /><br />
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

export default WhatWeDo
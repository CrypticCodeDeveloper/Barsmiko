import {
  Code,
  CloudCog,
  Server,
  Workflow,
  CreditCard,
  FlaskRound,
} from "lucide-react";

const OurCoreServices = () => {
  const services = [
    {
      title: "Web Development",
      text: " From fast-loading landing pages to full-stack business platforms, we design and develop websites that do more than look good, they work hard. Mobile-first, SEO-friendly, and built for performance, our web solutions bring your brand and operations to life online.",
      icon: Code,
    },
    {
      title: "DevOps & System Optimization",
      text: "Our DevOps services bridge the gap between development and operations, making your systems more agile, stable, and efficient. We automate deployments, monitor performance, and ensure seamless collaboration between your infrastructure and your code.",
      icon: CloudCog,
    },
    {
      title: "IT Services & Support",
      text: " We provide end-to-end IT services that keep your digital backbone running smoothly. Whether it’s network management, system integration, or helpdesk support, we deliver reliable IT that just works, no downtime, no drama.",
      icon: Server,
    },
    {
      title: "Intelligent Automation",
      text: "Tired of repetitive tasks? We build smart systems that streamline everything from customer onboarding to inventory and invoice processing, freeing up your team to focus on what really matters",
      icon: Workflow,
    },
    {
      title: "Fintech Solutions (Featuring PapayMoni)",
      text: "From peer-to-peer payments to expense tracking, we develop fintech products that simplify financial management for business owners and underserved communities. PapayMoni is our flagship solution, intuitive, reliable, and ready for scale.",
      icon: CreditCard,
    },
    {
      title: "Research & Digital Innovation",
      text: "We turn concepts into concrete strategies through deep research, validation, and early prototyping. Whether you are exploring a new digital product or modernizing an old process, we bring insight to your next big move.",
      icon: FlaskRound,
    },
  ];

  return (
    <div className="section">
      <div className="text-center max-w-lg">
        <p className="sub-section-heading">Our Core Services</p>
        <h1 className="sub-section-subheading">
          A Wide Range of IT Services we Offer
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 px-4">
        {services.map((service, i) => (
          <div
            className="max-w-[370px] min-h-[300px] p-10 flex-col pb-8 bg-base-color text-white shadow-xl rounded-2xl"
            key={`service-card-${i}`}
          >
            <div className="bg-white w-[70px] h-[70px] p-4 rounded-full mb-4 flex-center-all">
              <service.icon className="text-base-color font-bold size-8" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-xl">{service.title}</p>
              <p className="text-sm mt-4">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreServices;
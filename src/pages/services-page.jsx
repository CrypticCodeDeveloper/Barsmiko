import {
  Code,
  CloudCog,
  Server,
  Workflow,
  CreditCard,
  FlaskRound,
  Wrench,
  Zap,
  Layers,
  Target,
} from "lucide-react";
import SectionHeader from "../components/section-header";
import SectionFooterCta from "../components/section-footer.cta";

const ServicesPage = () => {
  return (
    <div>
      <SectionHeader
        sectionTitle="OUR SERVICES"
        sectionSubTitle="Smarter Services. Seamless Growth."
        text="At Barsmiko, we deliver the behind-the-scenes tech that moves your business forward — with less friction and more precision. Whether you’re building from scratch or optimizing what already works, our systems are crafted to support scale, sustainability, and speed."
        btns={[
          {
            text: "Talk to Our Team",
            onClick: () => alert("Talk to our team"),
          },
          {
            text: "Explore Solutions",
            onClick: () => alert("Explore Solutions"),
          },
        ]}
      />
      <OurCoreServices />
      <WhyChooseBarsmiko />
      <SectionFooterCta
        title="Not Sure Where to Start? Let’s Talk.
"
        subTitle="Tell us where you are — and we’ll help you figure out where to go next. Whether it’s one service or a full-stack solution, we’ve got the team, tools, and strategy to bring it to life.

"
        btns={[
          {
            text: "Start a Project",
            onClick: () => alert("Start a Project"),
          },
          {
            text: "Book a Free Consultation",
            onClick: () => alert("Book a Free Consultation"),
          },
        ]}
      />
    </div>
  );
};

const WhyChooseBarsmiko = () => {
  const benefits = [
    {
      text: "Custom-fit systems, no cookie cutters",
      icon: Wrench,
    },
    {
      text: "Fast turnaround with full support",
      icon: Zap,
    },
    {
      text: "Built to scale, upgrade, and evolve with your team",
      icon: Layers,
    },
    {
      text: "Research-backed, user-focused, results-driven",
      icon: Target,
    },
  ];

  return (
    <div className="section px-4 border-b-2 bg-base-color text-white border-base-color">
      <h1>Why Choose Barsmiko?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, i) => (
          <div
            className="flex-center-all bg-white text-base-color !flex-col text-center gap-4 mt-8 max-w-[300px] shadow-lg p-4 rounded-xl"
            key={`benefit-${i}`}
          >
            <div className="bg-base-color w-[50px] h-[50px] rounded-full flex-center-all">
              <benefit.icon className="text-white size-6" />
            </div>
            <p className="text-lg">{benefit.text}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-200 mt-8">
        Whether you are launching something new or fine-tuning the engine — we
        are your team behind the scenes.
      </p>
    </div>
  );
};

const OurCoreServices = () => {
  const services = [
    {
      title: "Web Development",
      tagline: "Custom Sites. Clean Code. Scalable Design.",
      text: "From fast-loading landing pages to full-stack business platforms, we design and develop websites that do more than look good — they work hard. Mobile-first, SEO-friendly, and built for performance, our web solutions bring your brand and operations to life online.",
      bestFor:
        "Startups, SMEs, personal brands, corporate websites, service providers",
      useCases:
        "Business websites, eCommerce, custom portals, CMS, landing pages",
      icon: Code,
    },
    {
      title: "DevOps & System Optimization",
      tagline: "Ship Faster. Stay Reliable. Scale Confidently.",
      text: "Our DevOps services bridge the gap between development and operations, making your systems more agile, stable, and efficient. We automate deployments, monitor performance, and ensure seamless collaboration between your infrastructure and your code.",
      bestFor:
        "Tech startups, SaaS companies, large teams managing live platforms",
      useCases:
        "CI/CD pipelines, cloud deployment, system monitoring, infrastructure-as-code",
      icon: CloudCog,
    },
    {
      title: "IT Services & Support",
      tagline: "Tech That Works — So You Can Focus on Growth.",
      text: "We provide end-to-end IT services that keep your digital backbone running smoothly. Whether it’s network management, system integration, or helpdesk support, we deliver reliable IT that just works — no downtime, no drama.",
      bestFor: "SMEs, enterprises, remote teams, public sector organizations",
      useCases:
        "Tech support, network setup, software integration, endpoint management",
      icon: Server,
    },
    {
      title: "Intelligent Automation",
      tagline: "Manual Work is Holding You Back. We Fix That.",
      text: "Tired of repetitive tasks? We build smart systems that streamline everything from customer onboarding to inventory and invoice processing — freeing up your team to focus on what really matters.",
      bestFor: "Growing businesses, operations teams, digital product owners",
      useCases: "Workflow automation, approvals, CRM syncs, backend tools",
      icon: Workflow,
    },
    {
      title: "Fintech Solutions (Featuring PapayMoni)",
      tagline: "Money Tools That Work the Way You Do.",
      text: "From peer-to-peer payments to expense tracking, we develop fintech products that simplify financial management for business owners and underserved communities. PapayMoni is our flagship solution — intuitive, reliable, and ready for scale.",
      bestFor: "SMEs, fintech startups, informal traders, NGOs",
      useCases: "Digital wallets, transaction tracking, payment systems",
      icon: CreditCard,
    },
    {
      title: "Research & Digital Innovation",
      tagline: "Ideas Need Execution. We Bring the Blueprint.",
      text: "We turn concepts into concrete strategies through deep research, validation, and early prototyping. Whether you're exploring a new digital product or modernizing an old process, we bring insight to your next big move.",
      bestFor: "Founders, impact-driven orgs, product teams",
      useCases: "Product validation, user research, MVP strategy",
      icon: FlaskRound,
    },
  ];

  return (
    <div className="section">
      <div className="text-center max-w-lg">
        <p className="text-lg font-semibold uppercase text-base-color mb-4">
          Our Core Services
        </p>
        <h1>A Wide Range of IT Services we Offer</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-14 px-4">
        {services.map((service, i) => (
          <div
            className="max-w-[370px] min-h-[300px] p-10 flex-col pb-8 bg-base-color text-white shadow-xl rounded-2xl"
            key={`service-card-${i}`}
          >
            <div className="bg-white w-[70px] h-[70px] p-4 rounded-full mb-4 flex-center-all">
              <service.icon className="text-base-color font-bold size-8" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{service.title}</p>
              <p className="text-xs mt-4">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

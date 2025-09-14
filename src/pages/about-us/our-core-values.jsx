import {
  Lightbulb,
  Award,
  ShieldCheck,
  Users,
  Zap,
  Handshake,
} from "lucide-react";

const OurCoreValues = () => {
  const companyValues = [
    {
      title: "Innovation",
      text: "We explore the edge of what's possible to build what's needed.",
      icon: Lightbulb,
    },
    {
      title: "Excellence",
      text: "We deliver high-performance solutions that stand the test of time.",
      icon: Award,
    },
    {
      title: "Integrity",
      text: "Transparency, honesty, and accountability are non-negotiable.",
      icon: ShieldCheck,
    },
    {
      title: "Customer-Centricity",
      text: "Our tools are designed with real users in mind.",
      icon: Users,
    },
    {
      title: "Agility",
      text: "We move fast because your business can’t afford slow.",
      icon: Zap,
    },
    {
      title: "Collaboration",
      text: "We grow by building with our team, clients, and partners.",
      icon: Handshake,
    },
  ];

  return (
    <div className="section" id="our-core-values">
      <h1 className="relative">
        Our Core Values
        <div className="border-2 border-base-color w-[60%] mx-auto mt-1" />
      </h1>
      <p className="italic text-base-color uppercase text-xl mt-4 font-bold">
        What Drives Us
      </p>
      <div className="mt-5 gap-4 flex-col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {companyValues.map((value, i) => (
          <div className="card" key={`what-we-do-card-${i}`}>
            <div className="flex-center-y justify-between">
              <value.icon size={30} />
              <h2 className="text-gray-200">{String(i + 1).padStart(2, 0)}</h2>
            </div>

            <h4 className="text-xl my-4">{value.title}</h4>

            <p className="text-sm">{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreValues;
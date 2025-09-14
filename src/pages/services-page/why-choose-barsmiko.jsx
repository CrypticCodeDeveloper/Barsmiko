import {
  Wrench,
  Zap,
  Layers,
  Target,
} from "lucide-react";

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
      <h1 className="text-center">Why Choose Barsmiko?</h1>
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
        Whether you are launching something new or fine-tuning the engine, we
        are your team behind the scenes.
      </p>
    </div>
  );
};

export default WhyChooseBarsmiko;
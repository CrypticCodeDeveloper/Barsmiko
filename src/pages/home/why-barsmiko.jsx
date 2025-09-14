
import {
  Building2,
  Microscope,
  Wrench,
  TrendingUp,
} from "lucide-react";

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


export default WhyBarsmiko;
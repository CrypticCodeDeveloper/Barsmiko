import {
  BadgeCheck,
  Tag,
  PieChart,
  Users,
  Bell,
  LineChart,
  ArrowRight,
} from "lucide-react";

const FeaturedProducts = () => {
  const fintechFeatures = [
    {
      text: "Instant payment verification",
      icon: BadgeCheck,
      bg: "bg-green-100 text-green-600",
    },
    {
      text: "Automated transaction labeling",
      icon: Tag,
      bg: "bg-blue-100 text-blue-600",
    },
    {
      text: "Income vs. expense breakdown",
      icon: PieChart,
      bg: "bg-purple-100 text-purple-600",
    },
    {
      text: "Customer & order tracking",
      icon: Users,
      bg: "bg-orange-100 text-orange-600",
    },
    {
      text: "Notifications for key money events",
      icon: Bell,
      bg: "bg-yellow-100 text-yellow-600",
    },
    {
      text: "Smart cash flow insights",
      icon: LineChart,
      bg: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <div className="section">
      <p className="sub-section-heading">Featured Products</p>

      <div className="flex-center-y flex-col-reverse lg:flex-row lg:justify-center gap-8 w-full px-4 lg:px-10 mt-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl">PapayMoni: Money, Made Manageable</h2>

          <p className="mt-4">
            Your hustle deserves better than bank alerts and mental math.
            PapayMoni is the business wallet that thinks like a business owner. PapayMoni simplifies the way you track income, verify payments, and
            stay on top of cash flow all in one secure, mobile-first platform.
          </p>

          <div className="grid max-w-xl grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
            {fintechFeatures.map((feature, index) => (
              <div key={index} className="flex-center-y gap-4 mt-4">
                <div className={`p-3 rounded-lg ${feature.bg}`}>
                  <feature.icon size={20} />
                </div>
                <p className="max-w-[200px]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-4 border-base-color mb-8 md:min-w-[400px]  max-w-[600px] h-[400px] mt-5 overflow-hidden rounded-lg flex-center-all relative">
          <img
            src="/PaPaymoni.jpg"
            className="image-fill absolute -z-10"
            alt=""
          />
          <div className="w-full h-full bg-base-color/20 absolute -z-10" />
          <button className="btn font-bold !bg-base-color flex-center-y gap-1">
            Join the Waitlist
            <ArrowRight className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
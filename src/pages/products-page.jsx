import {
  BadgeCheck,
  Tag,
  PieChart,
  Users,
  Bell,
  LineChart,
  ArrowRight,
  BellDotIcon
} from "lucide-react";

const ProductsPage = () => {
  return (
    <div className="pb-10">
      <Header />
      <FeaturedProducts />
      <ComingSoonProducts />
      <WhyWeBuildTheWayWeBuild />
    </div>
  );
};

const WhyWeBuildTheWayWeBuild = () => {
    return (
        <div className="section bg-base-color text-white">
            <h1>Why We Build the Way We Do</h1>
            <p className="uppercase text-lg font-semibold mt-2">Products Built for Real Business, Not Just Big Business.</p>
            <p className="mt-6 text-gray-200 max-w-2xl">
                Most tools weren’t made for how small businesses actually work.
 We build software that meets you where you are — intuitive, powerful, and tailored to your hustle. Whether you’re selling from your DMs or scaling a startup, we’re creating tools that fit your reality.
            </p>
        </div>
    )
}

const ComingSoonProducts = () => {

    const ComingSoonProducts = [
        {
            title: "OpsDash (Coming Soon)",
            text: "Simplify operations with task tracking, customer records, and fulfillment tools in one place.",
            image: "/records.jpg"
        },
        {
            title: "ClarityBoard (Coming Soon)",
            text: "Visualize your business like never before. Smart dashboards for real-time insights.",
            image: "/dashboard.jpg"
        },
        {
            title: "AutoFlow (Coming Soon)",
            text: "Automate repetitive tasks and routine workflows — from order confirmations to stock updates.",
            image: "/workflow.jpg"
        },
    ]

  return (
    <div className="section">
      <div className="flex-center-y flex-col">
        <h1 className="max-w-2xl text-center">
          Coming Soon: More Digital Tools from Barsmiko
        </h1>
        <p className="mt-2 font-semibold text-lg uppercase text-base-color">
          What's Next?
        </p>
        <p className="mt-4">
          We are building a full suite of digital products that help you run
          your business — without the overwhelm.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-10">
        {ComingSoonProducts.map((product, i) => (
          <div key={`coming-soon-product-${i}`} className="w-[300px] min-h-[300px] rounded-lg overflow-hidden">
            <div className="w-full h-[150px] flex-center-all overflow-hidden relative">
              <img
                src={product.image}
                alt=""
                className="image-fill absolute -z-10"
              />
                 <div className="w-full h-full bg-base-color/20 absolute -z-10" />
                 <button className="btn !bg-green-800 flex-center-y gap-2" >
                    <BellDotIcon />
                    Get Product Update</button>
            </div>
            <div className="text-white p-4 bg-base-color h-full">
              <h3 className="text-lg font-semibold">
                {product.title}
              </h3>
              <p className="mt-2">
                {product.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      <p className="flex-center-y uppercase font-semibold text-base-color text-xl gap-2">
        Featured Products
      </p>

      <div className="flex-center-y justify-between w-full px-10 mt-10">
        <div className="max-w-2xl">
          <h2>PapayMoni: Money, Made Manageable</h2>
          <p className="mt-2 font-semibold text-lg text-base-color">
            Your hustle deserves better than bank alerts and mental math.
            PapayMoni is the business wallet that thinks like a business owner.
          </p>

          <p className="mt-4">
            PapayMoni simplifies the way you track income, verify payments, and
            stay on top of cash flow — all in one secure, mobile-first platform.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {fintechFeatures.map((feature, index) => (
              <div key={index} className="flex-center-y gap-4 mt-4">
                <div className={`p-3 rounded-lg ${feature.bg}`}>
                  <feature.icon size={20} />
                </div>
                <p className="font-semibold">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[600px] h-[400px] mt-5 overflow-hidden rounded-lg flex-center-all relative">
          <img
            src="/PaPaymoni.jpg"
            className="image-fill absolute -z-10"
            alt=""
          />
          <div className="w-full h-full bg-base-color/20 absolute -z-10" />
          <button className="btn font-bold !bg-green-700 flex-center-y gap-1">
            Join the Waitlist
            <ArrowRight className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="h-[40vh] w-full relative text-white">
      <img
        src="/about-us.jpg"
        alt=""
        className="w-full h-full object-cover absolute -z-10"
      />
      <div className="w-full h-full bg-black/70 absolute -z-10" />

      <div className="w-full h-full p-10 flex-center-all gap-10">
        <div className="">
          <h3 className="mb-3 text-base-color bg-white p-2 w-fit">PRODUCTS</h3>
          <h1 className="text-5xl">Tools That Power Smarter Business</h1>
        </div>

        <p className="text-sm max-w-2xl text-gray-200">
          From financial clarity to operational flow, our products are built to
          make business easier — not harder. Explore PapayMoni and what’s next
          from Barsmiko.
        </p>
      </div>
    </div>
  );
};

export default ProductsPage;

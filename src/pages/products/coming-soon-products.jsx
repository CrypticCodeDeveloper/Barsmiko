import { BellDotIcon } from "lucide-react";

const ComingSoonProducts = () => {
  const ComingSoonProducts = [
    {
      title: "OpsDash (Coming Soon)",
      text: "Simplify operations with task tracking, customer records, and fulfillment tools in one place.",
      image: "/records.jpg",
    },
    {
      title: "ClarityBoard (Coming Soon)",
      text: "Visualize your business like never before. Smart dashboards for real-time insights.",
      image: "/dashboard.jpg",
    },
    {
      title: "AutoFlow (Coming Soon)",
      text: "Automate repetitive tasks and routine workflows from order confirmations to stock updates.",
      image: "/workflow.jpg",
    },
  ];

  return (
    <div className="section px-4">
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

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ComingSoonProducts.map((product, i) => (
          <div
            key={`coming-soon-product-${i}`}
            className="w-[300px] min-h-[300px] rounded-lg overflow-hidden"
          >
            <div className="w-full h-[150px] flex-center-all overflow-hidden relative">
              <img
                src={product.image}
                alt=""
                className="image-fill absolute -z-10"
              />
              <div className="w-full h-full bg-base-color/20 absolute -z-10" />
              <button className="btn !bg-base-color flex-center-y gap-2">
                <BellDotIcon />
                Get Product Update
              </button>
            </div>
            <div className="text-white p-4 bg-base-color h-full">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="mt-2">{product.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoonProducts;

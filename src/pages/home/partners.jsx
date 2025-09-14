import Marquee from "react-fast-marquee";

const Partners = () => {
  const logos = [
    {
      path: "/logos/mtn.png",
      size: "h-16",
    },
    {
      path: "/logos/cloudworkz.png",
      size: "h-56",
    },
    {
      path: "/logos/palmpay.png",
      size: "h-56",
    },
    {
      path: "/logos/turing.png",
      size: "h-12",
    },
  ];

  return (
    <div className="section px-4" id="partners">
      <h1 className="relative text-2xl md:text-4xl">
        Partners & Collaborations
        <div className="border-2 border-base-color w-[60%] mx-auto mt-1" />
      </h1>

      <Marquee
        className="mt-8 flex-center-y md:!w-[80%] p-4"
        gradient={false}
        speed={50}
        pauseOnHover={false}
      >
        {logos.map((logo, i) => (
          <img
            key={`partner-logo-${i}`}
            src={logo.path}
            alt={`Partner Logo ${i + 1}`}
            className={`${logo.size} mx-6 md:mx-8`}
          />
        ))}
      </Marquee>

      <p className="text-gray-800 text-lg mt-5 text-center max-w-4xl">
        We are proud of the diverse experiences our team brings to Barsmiko. Collectively, our staff have contributed their expertise to organizations such as PalmPay, MTN, CloudWorkz, and Turing — experience that now fuels the innovative solutions we deliver to our clients.

      </p>
    </div>
  );
};

export default Partners;
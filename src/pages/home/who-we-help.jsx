

const WhoWeHelp = () => {
  const orgs = [
    {
      title: "SMEs & Side Hustlers",
      desc: "Tools that save time, reduce stress, and help you grow without breaking the bank.",
      image_path: "/who-we-help/side-hustlers.jpg",
    },
    {
      title: "Startups & Creators",
      desc: "From launch to scale, we help you build with speed, intention, and systems that stick.",
      image_path: "/who-we-help/startups.jpg",
    },
    {
      title: "Fintechs & Financials",
      desc: "We support digital wallets, peer-to-peer transfers, payment platforms, and more especially for underserved markets.",
      image_path: "/who-we-help/fintech.jpg",
    },
    {
      title: "NGOs & Development",
      desc: "Tech that amplifies your impact. We help you deliver services efficiently and transparently.",
      image_path: "/who-we-help/agencies.jpg",
    },
    {
      title: "Government & Enterprises",
      desc: "From digital onboarding to automated workflows, we modernize public sector programs for the future.",
      image_path: "/who-we-help/government.jpg",
    },
  ];

  return (
    <div className="section  text-black px-10" id="who-we-serve">
      <h1 className="relative">
        Who We Help
        <div className="border-2 border-base-color w-[60%] mx-auto mt-1" />
      </h1>

      <div className="mt-8 flex-center-all flex-wrap gap-5">
        {orgs.map((card, i) => (
          <div
            key={`who-we-help-card-${i}`}
            className="min-w-[300px] max-w-[350px] border-2  border-base-color"
          >
            <div className="w-full h-[200px] overflow-hidden border-b-2  border-base-color relative">
              <div className="w-full h-full absolute bg-base-color/20" />
              <img
                src={card.image_path}
                className="w-full h-full object-cover"
                alt={card.title}
              />
            </div>
            <div className="min-h-[120px] p-4">
              <h4 className="text-lg text-base-color">{card.title}</h4>
              <p className="mt-2 text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default WhoWeHelp;
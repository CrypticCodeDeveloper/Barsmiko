import {
  Lightbulb,
  Award,
  ShieldCheck,
  Users,
  Zap,
  Key,
  Handshake,
  RecycleIcon,
} from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="pb-10">
      <Header />
      <OurMission />
      <BuildTheFuture />
      <OurCoreValues />
      <MeetTheBrands />
    </div>
  );
};

const MeetTheBrands = () => {
  return (
    <div className="section lg:!flex-row lg:gap-10 h-full w-full bg-base-color text-white px-10">
      <div className="max-w-[500px] h-[250px] lg:h-[350px] rounded-md overflow-hidden mt-5 border-2 border-white mx-auto">
        <img
          src="/purpose-passion.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-8 max-lg:text-center">
        <h3> Built With Purpose. Backed by Vision.</h3>
        <p className="max-w-2xl text-gray-200 mt-3">
          Barsmiko isn’t just a company — it’s an ecosystem of products and
          partnerships rooted in impact. From PapayMoni, our flagship fintech
          tool, to enterprise systems tailored to scale, we bring ideas to life
          through smart, usable tech.
        </p>
      </div>
    </div>
  );
};

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
    <div className="section">
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

const BuildTheFuture = () => {
  return (
    <div className="section bg-base-color px-4 text-center">
      <h1 className="text-white">Build the Future of Work — Now</h1>
      <p className="max-w-3xl text-gray-200 mt-5">
        We see a future where powerful technology isn’t reserved for massive
        corporations. At Barsmiko, we are building that future — where every
        entrepreneur, team, and organization can access intuitive, intelligent
        tools that help them build, grow, and lead.
      </p>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className="section !min-h-[20vh] w-full">
      <div className="flex-center-y max-lg:flex-col justify-evenly px-4">
        <div className="flex-center-y flex-col gap-5">
          <p className="text-xl mb-3 text-base-color uppercase font-bold">
            Our Mission
          </p>
          <h1 className="text-4xl max-w-xl text-center">
            Our Mission is to{" "}
            <span className="bg-base-color p-2 font-semibold text-white">
              Empower
            </span>{" "}
            Through Innovation
          </h1>
          <div className="max-w-[400px] h-[250px] rounded-md overflow-hidden mt-5 border-2 border-base-color">
            <img
              src="/empower.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-center-y flex-col max-lg:flex-col-reverse">
          <img src="/innovation.svg" className="w-[300px] py-4" alt="" />
          <p className="max-w-2xl mt-5 text-gray-800">
            To help businesses — especially SMEs — work smarter, move faster,
            and grow sustainably through research-backed digital systems,
            seamless automation, and real innovation. We replace friction with
            flow, so you can focus on the work that truly matters.
          </p>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="min-h-[40vh] w-full relative text-white">
      <img
        src="/about-us.jpg"
        alt=""
        className="w-full h-full object-cover absolute -z-10"
      />
      <div className="w-full h-full bg-black/70 absolute -z-10" />

      <div className="w-full h-full p-6 py-10 lg:p-10 flex-center-all flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="min-w-[50%] flex-col">
          <h3 className="mb-3 text-base-color bg-white p-2 w-fit max-md:text-xl">ABOUT US</h3>
          <h2 className="max-w-2xl text-3xl">Technology That Moves Businesses Forward</h2>
        </div>

        <p className="text-sm max-w-xl text-gray-200">
          Barsmiko started with a simple belief: technology should work for real
          businesses — not the other way around. We have seen the hustle: messy
          spreadsheets, manual tracking, hours wasted on what should be
          seamless. That’s where we come in. We design systems that eliminate
          chaos, automate the boring stuff, and create clarity for people who
          just want to run their business better. From small teams to scaling
          startups, we help bold builders simplify, scale, and thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;

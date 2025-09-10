import {
  Lightbulb,
  Award,
  ShieldCheck,
  Users,
  Zap,
  Handshake,
} from "lucide-react";
import SectionFooterCta from "../components/section-footer.cta";
import SectionHeader from "../components/section-header";

const AboutUsPage = () => {
  return (
    <div>
      <SectionHeader
        sectionTitle="ABOUT US"
        sectionSubTitle="Technology That Moves Businesses Forward"
        text={<p>Barsmiko started with a simple belief: technology should work for real businesses, not the other way around. <br />
We have seen the hustle: messy spreadsheets, manual tracking, hours wasted on what should be seamless. That’s where we come in.
We design systems that eliminate chaos, automate the boring stuff, and create clarity for people who just want to run their business better.
From small teams to scaling startups, we help bold builders simplify, scale, and thrive.
</p>}

      />
      <OurMission />
      <BuildTheFuture />
      <OurCoreValues />
      <MeetTheBrands />
      <SectionFooterCta
        title="Let’s Build Something That Works"
        subTitle="We don’t just build digital products,
 We build the systems that build businesses.
"
        btns={[
          {
            text: "Start Building With Barsmiko",
            onClick: () => alert("Start Building With Barsmiko"),
          },
          {
            text: "Talk to Our Team",
            onClick: () => alert("Talk to our team"),
          },
        ]}
      />
    </div>
  );
};

const MeetTheBrands = () => {
  return (
    <div className="section  lg:gap-10 h-full w-full bg-base-color text-white px-10">
      <div className="max-w-[500px] h-[250px] lg:h-[350px] rounded-md overflow-hidden mt-5 border-2 border-white mx-auto">
        <img
          src="/purpose-passion.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 text-center max-w-4xl">
        <h1> Built With Purpose. Backed by Vision.</h1>
        <p className=" text-gray-200 text-lg md:text-lg mt-6">
          Barsmiko isn’t just a company, it’s an ecosystem of products and
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

const BuildTheFuture = () => {
  return (
    <div className="section bg-base-color px-4 text-center">
      <h1 className="text-white">Build the Future of Work Now</h1>
      <p className="max-w-3xl text-gray-200 mt-5">
        We see a future where powerful technology isn’t reserved for massive
        corporations. At Barsmiko, we are building that future where every
        entrepreneur, team, and organization can access intuitive, intelligent
        tools that help them build, grow, and lead.
      </p>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className="section !min-h-[20vh] w-full" id="our-mission">
      <div className="flex-center-y max-lg:flex-col gap-12 justify-evenly px-4">
        <div className="flex-center-y flex-col">
          <p className="sub-section-heading uppercase">Our Mission</p>
          <h1 className="sub-section-subheading text-center">
            <span className="bg-base-color p-1 font-semibold text-white">
              Empowering
            </span>{" "}
             Growth Through Innovation
          </h1>
          <div className="max-w-[500px] lg:w-[500px] min-h-[200px] rounded-md overflow-hidden mt-8 border-2 border-base-color">
            <img
              src="/empower.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-center-y flex-col max-lg:flex-col-reverse">
          <p className="max-w-xl text-lg mt-5 text-gray-800">
            At Barsmiko, our mission is simple yet powerful: <br />
To empower organizations, from SMEs to NGOs, healthcare providers, government agencies, and enterprises, to work smarter, scale faster, and grow sustainably through research-driven digital systems, intelligent automation, and true innovation. <br /><br />
We eliminate friction and replace it with seamless workflows, so every organization can focus on what truly matters, creating impact, driving value, and building the future.

          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

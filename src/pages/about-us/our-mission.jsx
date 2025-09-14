
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

export default OurMission;
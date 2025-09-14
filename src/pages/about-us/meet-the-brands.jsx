
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


export default MeetTheBrands;
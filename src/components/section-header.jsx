

const SectionHeader = ({
    bgImage = "/about-us.jpg",
    sectionTitle,
    sectionSubTitle,
    text,
    btns = []
}) => {
   return (
    <div className="section  w-full relative text-white">
      <img
        src={bgImage}
        alt=""
        className="w-full h-full object-cover absolute -z-10"
      />
      <div className="w-full h-full bg-black/70 absolute -z-10" />

      <div className="w-full h-full p-6 py-10 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="min-w-[50%] flex-col">
          <h3 className="mb-3 text-base-color bg-white p-2 w-fit max-md:text-xl">{sectionTitle}</h3>
          <h2 className="max-w-2xl text-3xl">{sectionSubTitle}</h2>
        </div>

        <div>
            <p className="text-sm max-w-xl text-gray-200">
          {text}
        </p>
        <div className="mt-4 flex-center-y gap-4">
            {
                btns.map((btn, i) => <button key={`section-header-cta-${i}`} onClick={btn.onClick} className="btn">{btn.text}</button>)
            }
        </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader
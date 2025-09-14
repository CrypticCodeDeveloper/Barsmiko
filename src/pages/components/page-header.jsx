

const PageHeader = ({
    bgImage = "/about-us.jpg",
    sectionTitle,
    sectionSubTitle,
    text,
    btns = []
}) => {
   return (
    <div className="flex flex-col w-full relative text-white">
      <img
        src={bgImage}
        alt=""
        className="w-full h-full object-cover absolute -z-10"
      />
      <div className="w-full h-full bg-black/70 absolute -z-10" />

      <div className="max-w-5xl p-6 py-8 md:p-8 lg:p-12">
        <div className=" flex-col">
          <h3 className="mb-3 text-base-color bg-white p-2 w-fit text-4xl max-md:text-3xl">{sectionTitle}</h3>
          <h2 className="max-w-2xl text-xl md:text-2xl lg:text-3xl mt-4">{sectionSubTitle}</h2>
        </div>

        <div className="mt-4">
            <p className="text-sm md:text-lg text-gray-200">
          {text}
        </p>
        <div className="mt-6 flex-center-y gap-4">
            {
                btns.map((btn, i) => <button key={`section-header-cta-${i}`} onClick={btn.onClick} className={`btn ${btn?.className} flex-center-y gap-1`}>{btn?.icon} {btn.text}</button>)
            }
        </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader
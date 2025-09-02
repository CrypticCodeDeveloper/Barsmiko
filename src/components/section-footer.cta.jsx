
const SectionFooterCta = ({
    title,
    subTitle,
    btns = []
}) => {
  return (
    <div className="section px-4 text-center">
      <h2 className="uppercase text-base-color font-semibold text-xl md:text-3xl lg:text-4xl max-w-2xl mb-2">
        {title}
      </h2>
      <p className="text-lg mt-2">{subTitle}</p>
      <div className="flex-center-y gap-4 mt-8">
        {
            btns.map((btn, i) => <button onClick={btn.onClick} key={`footer-cta-button-${i}`} className="btn font-semibold">
          {btn.text}
        </button>)
        }
      </div>
    </div>
  )
}

export default SectionFooterCta
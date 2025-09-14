import { FaqsAccordion } from "./components/faqs-accordion";

const FAQs = () => {
  return (
    <div className="section bg-base-color" id="faqs">
      <h1 className="relative text-white mb-8">
        FAQs
        <div className="border-2 border-white w-[60%] mx-auto mt-1" />
      </h1>

      <FaqsAccordion />
    </div>
  );
};


export default FAQs;
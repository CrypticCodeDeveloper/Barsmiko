import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsAccordion() {
  const faqs = [
    {
      question: "What kind of businesses do you work with?",
      answer:
        "From solo entrepreneurs to government-backed programs, our tech adapts to your needs no matter your size.",
      value: "question-1",
    },
    {
      question: "Can you build a product from scratch?",
      answer:
        "Yes, whether you have an idea, prototype, or chaotic process that needs structure, we help bring it to life (and scale).",
      value: "question-2",
    },
    {
      question: "Do I need to be “techy” to work with you?",
      answer:
        "Nope. We make systems that are simple to use and powerful under the hood, built with everyday business owners in mind.",
      value: "question-3",
    },
    {
      question: "What makes Barsmiko different?",
      answer:
        "We don’t just build products. We build the systems that let you build your future easier, faster, and smarter.",
      value: "question-4",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-[80%] max-w-2xl"
      defaultValue={faqs[0].value}
    >
      {faqs.map((faq, i) => (
        <AccordionItem key={`faq-${i}`} value={faq.value} className="text-white">
          <AccordionTrigger className="text-lg md:text-xl" >{faq.question}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-lg">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

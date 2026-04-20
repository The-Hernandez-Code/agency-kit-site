import { SectionHeading } from "@/components/custom/SectionHeading";

const faqs = [
  {
    question: "What types of engagements are the best fit?",
    answer:
      "Teams already using Microsoft 365 that need practical automation and Copilot adoption support in operations, finance, service, or internal enablement workflows.",
  },
  {
    question: "Do you replace our internal IT or CoE team?",
    answer:
      "No. I work alongside your IT, security, and business owners to accelerate delivery and leave behind maintainable patterns your team can own.",
  },
  {
    question: "How quickly can we see value?",
    answer:
      "Most clients see first production outcomes in the first sprint, then compound value over a 30/60/90 day roadmap.",
  },
  {
    question: "Can you help with governance and risk controls?",
    answer:
      "Yes. Every implementation includes environment strategy, connector controls, access alignment, and operational guardrails matched to your risk posture.",
  },
];

function FAQSection() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14 md:py-20" aria-labelledby="faq-heading">
      <SectionHeading
        badge="FAQ"
        heading="Common questions from operations and IT leaders"
        description="Clear answers before you commit to an engagement."
        size="md"
        align="center"
        as="h2"
        id="faq-heading"
        className="mb-8 md:mb-12"
        showDescriptionToScreenReaders
      />

      <div className="space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-xl border border-slate-200 p-5">
            <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;

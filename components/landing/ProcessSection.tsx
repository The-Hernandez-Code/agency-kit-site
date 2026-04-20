import { SectionHeading } from "@/components/custom/SectionHeading";

const processSteps = [
  {
    step: "01",
    title: "Assess + Prioritize",
    description:
      "We map your current workflows, identify friction points, and select a focused set of high-value automation and Copilot use cases.",
    outputs: ["Current-state process map", "Opportunity scorecard", "Prioritized backlog"],
  },
  {
    step: "02",
    title: "Build + Validate",
    description:
      "We deliver the first production-ready workflows and copilots with governance, security, and feedback loops in place from day one.",
    outputs: ["Production Power App/flow set", "Copilot prompt + policy pack", "Pilot usage telemetry"],
  },
  {
    step: "03",
    title: "Enable + Scale",
    description:
      "Your team gets practical training, documentation, and an execution rhythm so the solution keeps improving after handoff.",
    outputs: ["Admin + user runbooks", "Enablement workshop", "30/60/90 day scale plan"],
  },
];

function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20" aria-labelledby="process-heading">
      <SectionHeading
        badge="Process"
        heading="A lean delivery model designed for outcomes, not slide decks"
        description="Three phases, clear ownership, and visible value every sprint."
        size="md"
        align="center"
        as="h2"
        id="process-heading"
        className="mb-8 md:mb-12"
        showDescriptionToScreenReaders
      />

      <div className="grid gap-5 md:grid-cols-3">
        {processSteps.map((step) => (
          <article key={step.step} className="rounded-xl border border-slate-200 p-5">
            <p className="text-sm font-semibold tracking-wide text-slate-500">{step.step}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {step.outputs.map((output) => (
                <li key={output} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1 text-slate-400">
                    •
                  </span>
                  <span>{output}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;

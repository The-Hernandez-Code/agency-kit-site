import { SectionHeading } from "@/components/custom/SectionHeading";
import { contactLinks } from "@/lib/contact";

const engagementTracks = [
  {
    title: "Power Platform Build Sprint",
    summary:
      "For teams that need production-ready apps and automations quickly, with clear governance and ownership.",
    bullets: [
      "Power Apps + Power Automate implementation",
      "Dataverse/SharePoint model design",
      "Admin runbooks and handoff",
    ],
  },
  {
    title: "M365 Copilot Adoption Sprint",
    summary:
      "For organizations that have licenses but need role-specific use cases, measurable adoption, and safe rollout patterns.",
    bullets: [
      "Prompt playbooks by function",
      "Enablement sessions for business teams",
      "Adoption metrics and optimization loop",
    ],
  },
  {
    title: "Automation Opportunity Program",
    summary:
      "For leaders who want a practical automation roadmap before committing to larger implementation work.",
    bullets: [
      "Workflow interviews and process mapping",
      "Impact/effort prioritization model",
      "30/60/90 day execution plan",
    ],
  },
];

const principles = [
  "Business-first outcomes over platform novelty",
  "Governance and maintainability from day one",
  "Short feedback loops with operational stakeholders",
  "Clear ownership after handoff",
];

export default function AboutPage() {
  return (
    <main id="main-content" role="main" className="mx-auto max-w-6xl px-5 pb-16 pt-[116px] md:pb-20 md:pt-[132px]">
      <section aria-labelledby="about-heading">
        <SectionHeading
          badge="Delivery model"
          heading="A consulting partner for practical Power Platform + Copilot execution"
          description="I help operations and IT leaders turn manual work into governed automation systems that teams actually use."
          size="lg"
          align="left"
          as="h1"
          id="about-heading"
          className="space-y-5"
          headingClassName="md:w-full"
          showDescriptionToScreenReaders
        />
      </section>

      <section className="mt-10" aria-labelledby="engagement-tracks-heading">
        <h2 id="engagement-tracks-heading" className="text-2xl font-semibold text-slate-900">
          Engagement tracks
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {engagementTracks.map((track) => (
            <article key={track.title} className="rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">{track.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{track.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {track.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 text-slate-400">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="text-2xl font-semibold text-slate-900">
          Working principles
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {principles.map((principle) => (
            <li key={principle} className="rounded-lg border border-slate-200 p-4">
              {principle}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-xl border border-slate-200 p-6" aria-labelledby="next-step-heading">
        <h2 id="next-step-heading" className="text-xl font-semibold text-slate-900">
          Next step
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Bring one process that is slowing down your team. We’ll pressure-test feasibility,
          governance, and expected impact together.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={contactLinks.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Book discovery call
          </a>
          <a
            href={contactLinks.mailtoHref}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Email your use case
          </a>
        </div>
      </section>
    </main>
  );
}

import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
const services = [
  {
    title: "Power Platform Delivery Sprint",
    outcome: "Replace manual workflows with secure apps and flows your team can operate.",
    bullets: [
      "Power Apps for intake, approvals, and operations",
      "Power Automate cloud flows with governance patterns",
      "Dataverse/SharePoint architecture and handoff docs",
    ],
  },
  {
    title: "M365 Copilot Adoption Program",
    outcome: "Move from pilot excitement to measurable usage and ROI across business teams.",
    bullets: [
      "Role-based prompt packs and scenario playbooks",
      "Security and data access validation with IT",
      "Adoption dashboard and enablement workshops",
    ],
  },
  {
    title: "Automation Opportunity Discovery",
    outcome: "Prioritize the highest-value automation backlog before implementation.",
    bullets: [
      "Process mapping for finance, ops, and customer workflows",
      "Effort vs impact scoring for each opportunity",
      "90-day automation roadmap with quick wins",
    ],
  },
];

function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20" aria-labelledby="services-heading">
      <SectionHeading
        badge="Services"
        heading="Focused engagements for Power Platform + Copilot outcomes"
        description="No oversized transformation program. Just practical implementation and enablement that gets adopted."
        size="md"
        align="center"
        as="h2"
        id="services-heading"
        className="mb-8 md:mb-12"
        showDescriptionToScreenReaders
      />

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-xl border border-slate-200 p-5">
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{service.outcome}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1 text-slate-400">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <a href="/about">See delivery approach</a>
        </Button>
      </div>
    </section>
  );
}

export default ServicesSection;

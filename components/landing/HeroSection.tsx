import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudies";
import { contactLinks } from "@/lib/contact";

function HeroSection() {
  return (
    <section className="px-5 pt-[116px] pb-14 md:pt-[132px] md:pb-20 lg:pt-[144px] lg:pb-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          badge="Power Platform + M365 Copilot Consulting"
          heading="Ship practical Copilot and automation systems your teams actually adopt."
          description="I help SMB and mid-market teams design, build, and operationalize high-impact Power Platform + Microsoft 365 Copilot solutions in weeks, not quarters."
          size="lg"
          align="center"
          as="h1"
          className="space-y-6"
          headingClassName="md:w-full"
          showDescriptionToScreenReaders
        />

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-center">
          <Button asChild>
            <a href={contactLinks.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a 30-min discovery call
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={contactLinks.mailtoHref}>Email your use case</a>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 text-sm text-slate-600 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">Automation-first delivery</p>
            <p className="mt-1">Power Automate flows that remove repetitive work from core teams.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">Copilot enablement</p>
            <p className="mt-1">
              M365 Copilot rollout with guardrails, prompts, and measurable adoption.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">Business-ready apps</p>
            <p className="mt-1">Power Apps + SharePoint/Dataverse patterns built for real operations.</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Delivery snapshots
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Example work visuals across recent automation and AI implementation projects.
            </p>
          </div>

          <div className="mt-5 overflow-x-auto pb-2">
            <ul className="mx-auto flex w-max min-w-full items-center justify-center gap-8 px-2">
              {caseStudies.map((study) => (
                <li key={`${study.name}-logo`} className="shrink-0">
                  <img
                    src={study.logo_src}
                    alt={`${study.name} logo`}
                    className="h-8 w-auto object-contain opacity-65 grayscale transition-opacity hover:opacity-100"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article
                key={study.name}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={study.main_image_src}
                    alt={`${study.name} project preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding={index < 3 ? "sync" : "async"}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                  <p className="absolute right-3 bottom-3 left-3 text-sm font-medium text-white">
                    {study.name}
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-700">{study.project_title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

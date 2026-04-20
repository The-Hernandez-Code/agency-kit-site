import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
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
      </div>
    </section>
  );
}

export default HeroSection;

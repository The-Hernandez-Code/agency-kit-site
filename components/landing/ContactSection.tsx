import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { contactLinks } from "@/lib/contact";

function ContactSection() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14 md:py-20" aria-labelledby="contact-heading">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <SectionHeading
          badge="Start Here"
          heading="Bring your top automation or Copilot use case to a 30-minute discovery call"
          description="You’ll leave with concrete next steps, delivery options, and whether we’re a fit."
          size="md"
          align="left"
          as="h2"
          id="contact-heading"
          className="space-y-4"
          headingClassName="md:w-full"
          showDescriptionToScreenReaders
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a
            href={contactLinks.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50"
          >
            <p className="font-semibold text-slate-900">Book via Cal.com</p>
            <p className="mt-1 text-sm text-slate-600">
              Pick a time that works for you and share your context ahead of the call.
            </p>
          </a>
          <a
            href={contactLinks.mailtoHref}
            className="rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50"
          >
            <p className="font-semibold text-slate-900">Email directly</p>
            <p className="mt-1 text-sm text-slate-600">
              Send your goals and constraints to {contactLinks.emailAddress}.
            </p>
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={contactLinks.bookingUrl} target="_blank" rel="noopener noreferrer">
              Schedule discovery
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={contactLinks.mailtoHref}>Send engagement brief</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

import { Button } from "@/components/ui/button";
import { contactLinks } from "@/lib/contact";

function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200" role="contentinfo">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-slate-900">Your Consulting Studio</p>
          <p className="text-sm text-slate-600">
            Power Platform + M365 Copilot + automation engagements for teams that need practical
            outcomes.
          </p>
          <p className="text-sm text-slate-600">
            Contact:{" "}
            <a className="underline" href={contactLinks.mailtoHref}>
              {contactLinks.emailAddress}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">Navigate</h3>
          <nav className="mt-3 space-y-2 text-sm text-slate-600">
            <a className="block hover:text-slate-900" href="/">
              Home
            </a>
            <a className="block hover:text-slate-900" href="/about">
              Services
            </a>
            <a className="block hover:text-slate-900" href="/blog">
              Blog
            </a>
          </nav>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
            Next step
          </h3>
          <p className="text-sm text-slate-600">
            Share your use case and I’ll recommend a right-sized engagement path.
          </p>
          <Button asChild>
            <a href={contactLinks.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book discovery call
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

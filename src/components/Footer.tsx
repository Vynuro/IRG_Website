import { Link } from "react-router";
import { Icon } from "../lib/icons";
import { WRAP } from "../lib/ui";
import { contact, ESOMAR_LOGO, LOGO_DARK } from "../data/site";

const quickLinks = [
  ["About Us", "/about"] as const,
  ["Industries", "/industries"] as const,
  ["Panel Explorer", "/panel-explorer"] as const,
  ["Consultation", "/consultation"] as const,
  ["Contact Us", "/contact"] as const,
  ["Join & Get Paid", "/join-and-get-paid"] as const,
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-footer text-white">
      <div className={WRAP}>
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <div className="lg:col-span-4">
            <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-ctl">
              <img src={LOGO_DARK} alt="" className="h-11 w-11 object-contain" />
              <span className="text-[20px] font-extrabold tracking-[-0.02em] text-white">
                Inventive Research Group
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/75">
              Delivering trusted insights and connecting businesses to expert networks worldwide.
            </p>
            <img
              src={ESOMAR_LOGO}
              alt="ESOMAR Corporate Member"
              className="mt-5 h-10 w-auto object-contain object-left"
            />
            <a
              href="https://www.linkedin.com/company/inventive-research-group"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="focus-ring mt-4 inline-flex h-12 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/5 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon.linkedin size={24} />
            </a>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[15px] font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-[13px] text-white/80">
              {quickLinks.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="whitespace-nowrap hover:text-white hover:underline">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[15px] font-bold text-white">Legal</h3>
            <ul className="mt-4 space-y-3 text-[13px] text-white/80">
              <li><Link to="/terms-conditions" className="hover:text-white hover:underline">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white hover:underline">Privacy Policy</Link></li>
              <li><Link to="/compliances" className="hover:text-white hover:underline">Compliances</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[15px] font-bold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-[13px] text-white/85">
              <li><a href={`tel:${contact.usPhone.replace(/[^+\d]/g, "")}`} className="hover:text-white">US: {contact.usPhone}</a></li>
              <li><a href={`tel:${contact.ukPhone.replace(/[^+\d]/g, "")}`} className="hover:text-white">UK: {contact.ukPhone}</a></li>
              <li><a href={`mailto:${contact.email}`} className="break-all font-medium hover:text-white hover:underline">{contact.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-6 text-[13px] text-white/75 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Inventive Research Group. All rights reserved.</p>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="focus-ring absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-card transition-transform hover:-translate-y-1"
      >
        <span className="-rotate-90"><Icon.arrow size={20} /></span>
      </button>
    </footer>
  );
}

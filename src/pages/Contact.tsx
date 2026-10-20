import { useEffect, useRef, useState, type FormEvent, type CSSProperties } from "react";
import { Link } from "react-router";
import { WRAP, cx, Eyebrow } from "../lib/ui";
import { Icon } from "../lib/icons";
import { contact } from "../data/site";
import contactImage from "../assets/contact/consultation.jpg";
import "./contact.css";

// Photo by Vitaly Gariev on Unsplash: https://unsplash.com/photos/Cnsh9WwhVCw
// Field order and choices follow the client's Nexus contact-form reference.
const industries = ["Market Research", "Private Equity", "Life Sciences", "Strategy Consulting", "Consulting Firm", "Venture Capital", "Automotive", "Marketing Agencies", "Industrials/Energy", "Others"];
const inquiryTypes = ["Expert Network Access", "End-to-end market research study", "Not sure yet/scoping"];
const regionCodes = "AF AX AL DZ AS AD AO AI AQ AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BQ BA BW BV BR IO BN BG BF BI CV KH CM CA KY CF TD CL CN CX CC CO KM CG CD CK CR CI HR CU CW CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FK FO FJ FI FR GF PF TF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT HM VA HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MK MP NO OM PK PW PS PA PG PY PE PH PN PL PT PR QA RE RO RU RW BL SH KN LC MF PM VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA GS SS ES LK SD SR SJ SE CH SY TW TJ TZ TH TL TG TK TO TT TN TR TM TC TV UG UA AE GB US UM UY UZ VU VE VN VG VI WF EH YE ZM ZW".split(" ");
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const countries = regionCodes.map(code => ({ code, name: regionNames.of(code) || code })).sort((a, b) => a.name.localeCompare(b.name));
const dialingCodes = [["US/CA", "+1"], ["UK", "+44"], ["UAE", "+971"], ["PK", "+92"], ["IN", "+91"], ["AU", "+61"], ["DE", "+49"], ["FR", "+33"], ["SG", "+65"], ["SA", "+966"], ["Other", "Other"]];
const offices = [
  {
    city: "London",
    country: "United Kingdom",
    address: "4th Floor, Silverstream House, 45 Fitzroy Street, London, England, W1T 6EB",
    phone: contact.ukPhone,
  },
  {
    city: "RAK",
    country: "United Arab Emirates",
    address: "Compass Building, Al Shohada Road, RAK, UAE",
    phone: "+971 50 7299340, +971 50 4841169",
  },
  {
    city: "Lahore",
    country: "Pakistan",
    address: "5th Floor 11-B Rafi Commercial, Bahria Town, Lahore 54000",
    phone: "",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "complete">("idle");
  const [newsletter, setNewsletter] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contact Us | Inventive Research Group";
    return () => { document.title = previousTitle; if (timer.current) clearTimeout(timer.current); };
  }, []);
  useEffect(() => { if (status === "complete") resultRef.current?.focus({ preventScroll: true }); }, [status]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "idle") return;
    // DESIGN PREVIEW: no request, storage or ads conversion is fired.
    // Developer: replace this timer with your lead API; display completion
    // after confirmed delivery, and preserve entered values on a failed request.
    setStatus("sending");
    timer.current = setTimeout(() => setStatus("complete"), 1100);
  }

  return (
    <>
      <section className="contact-banner overflow-hidden border-b border-tint-100 bg-tint-50">
        <div className={cx(WRAP, "grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-2 lg:gap-16")}>
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary"><span className="h-px w-7 bg-accent" aria-hidden="true" />Inventive Research Group</p>
            <h1 className="text-[44px] font-bold leading-[1.1] tracking-[-0.045em] text-primary sm:text-[58px]">Contact Us<span className="text-accent">.</span></h1>
            <p className="mt-5 max-w-[470px] text-[15px] leading-[1.8] text-body">Better decisions start with the right expertise. Get in touch with Inventive Research Group to discuss your research needs and connect with the people who can help.</p>
          </div>
          <div className="relative overflow-hidden rounded-[20px] bg-primary">
            <img src={contactImage} alt="Business professionals in conversation during a consultation" fetchPriority="high" className="h-[230px] w-full object-cover object-center sm:h-[300px]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </section>
      <section className={cx(WRAP, "contact-reference-layout")}>
        <aside className="contact-details" aria-labelledby="contact-details-title">
          <h2 id="contact-details-title" className="text-[24px] font-extrabold text-primary">Get in touch</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3 text-[15px] text-body">
              <span className="text-secondary"><Icon.phone size={20} /></span>
              <span>US {contact.usPhone}</span>
            </li>
            <li className="flex items-center gap-3 text-[15px] text-body">
              <span className="text-secondary"><Icon.phone size={20} /></span>
              <span>UK {contact.ukPhone}</span>
            </li>
            <li className="flex items-center gap-3 text-[15px] text-body">
              <span className="text-secondary"><Icon.mail size={20} /></span>
              <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a>
            </li>
          </ul>

          <h3 className="mt-10 text-[18px] font-bold text-primary">Our offices</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {offices.map((office) => (
              <div key={office.city} className="rounded-card border border-tint-100 bg-white p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Icon.pin size={18} />
                  <span className="text-[16px] font-semibold">{office.city}</span>
                </div>
                <p className="mt-1 text-[14px] text-body">{office.country}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-body">{office.address}</p>
                {office.phone && (
                  <p className="mt-2 text-[14px] font-medium text-primary">{office.phone}</p>
                )}
              </div>
            ))}
          </div>
        </aside>

        <div className="contact-reference-form" id="contact-form">
          {status === "complete" ? (
            <div ref={resultRef} tabIndex={-1} role="status" className="contact-complete relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-4 text-center">
              <div className="irg-success-glow" aria-hidden="true" />
              <div className="irg-success-particles" aria-hidden="true">{Array.from({ length: 10 }, (_, index) => <span key={index} style={{ "--particle-index": index } as CSSProperties} />)}</div>
              <div className="irg-success-check" aria-hidden="true"><svg viewBox="0 0 72 72"><circle className="irg-success-circle" cx="36" cy="36" r="30" /><path className="irg-success-tick" d="m21.5 37 9.5 9.5L51 25.8" /></svg></div>
              <h2 className="relative mt-8 text-[32px] font-bold text-primary">Thank you!</h2>
              <p className="relative mt-4 max-w-xs text-[15px] leading-relaxed text-body">Your research inquiry is ready.</p>
              <p className="relative mt-4 text-xs text-body">Form preview - no inquiry has been sent.</p>
              <button type="button" className="contact-submit relative mt-8" onClick={() => { setStatus("idle"); requestAnimationFrame(() => formRef.current?.querySelector("input")?.focus()); }}>Back to form</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={submit} aria-label="Contact form" aria-busy={status === "sending"}>
              <fieldset disabled={status === "sending"} className="contact-fields">
                <legend className="sr-only">Contact details and research inquiry</legend>
                <Field label="Full Name" name="full_name" placeholder="Full Name" autoComplete="name" required />
                <Field label="Email" name="email" type="email" placeholder="Email" autoComplete="email" required icon />
                <div>
                  <label className="contact-label" htmlFor="contact-phone">Phone</label>
                  <div className="contact-phone-input">
                    <select name="phone_country_code" aria-label="Phone country code" defaultValue="+1" className="focus-ring">{dialingCodes.map(([label, value]) => <option key={value} value={value}>{label} {value === "Other" ? "" : value}</option>)}</select>
                    <input id="contact-phone" name="phone" type="tel" autoComplete="tel-national" placeholder="Phone" maxLength={40} className="focus-ring" />
                  </div>
                </div>
                <Field label="Company Name" name="company" placeholder="Company Name" autoComplete="organization" required />
                <div><label className="contact-label" htmlFor="contact-country">Country</label><select id="contact-country" name="country" autoComplete="country" className="contact-input focus-ring" defaultValue=""><option value="" disabled>Country</option>{countries.map(country => <option key={country.code} value={country.code}>{country.name}</option>)}</select></div>
                <div><label className="contact-label" htmlFor="contact-industry">Industry <span aria-hidden="true">*</span></label><select id="contact-industry" name="industry" className="contact-input focus-ring" required defaultValue=""><option value="" disabled>Please select your industry</option>{industries.map(industry => <option key={industry}>{industry}</option>)}</select></div>
                <div className="contact-wide-field"><label className="contact-label" htmlFor="contact-inquiry">What are you looking for? <span aria-hidden="true">*</span></label><select id="contact-inquiry" name="inquiry" className="contact-input focus-ring" required defaultValue=""><option value="" disabled>I want a consultation</option>{inquiryTypes.map(inquiry => <option key={inquiry}>{inquiry}</option>)}</select></div>
                <div className="contact-message-field"><label className="contact-label" htmlFor="contact-message">Please type a bit more to specify <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows={5} maxLength={5000} required className="contact-input focus-ring" placeholder="Enter your message here" /></div>
              </fieldset>
              <div className="mt-6 flex flex-col gap-5 border-t border-tint-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={status === "sending"} className="contact-submit focus-ring">{status === "sending" && <span className="contact-spinner" aria-hidden="true" />}{status === "sending" ? "Preparing…" : "Submit"}<span aria-hidden="true">↗</span></button>
                <p className="text-center text-[11px] text-secondary"><Link className="focus-ring rounded underline underline-offset-4" to="/privacy-policy">Privacy Policy</Link><span className="mx-2 text-body">|</span><Link className="focus-ring rounded underline underline-offset-4" to="/terms-conditions">Terms of Service</Link></p>
              </div>
            </form>
          )}
        </div>
      </section>
      <section className={cx(WRAP, "contact-newsletter pb-16 sm:pb-20")} aria-labelledby="newsletter-heading">
        <div className="relative overflow-hidden rounded-panel border border-secondary/15 bg-white px-6 py-12 text-center shadow-card sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/12 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <Eyebrow>Stay ahead of the curve</Eyebrow>
            <h2 id="newsletter-heading" className="mt-5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.035em] text-primary sm:text-[44px]">Subscribe to Our Newsletter</h2>
            <p className="mx-auto mt-5 max-w-[660px] text-[15px] leading-[1.8] text-body sm:text-[16px]">Receive insights on market research, expert connections and emerging industry trends from Inventive Research Group.</p>
          </div>
          <div className="relative mx-auto mt-8 max-w-[560px]">
            {newsletter ? <div role="status" className="contact-complete rounded-xl border border-secondary/15 bg-tint-50 p-5 text-sm text-primary"><p className="font-semibold">Thank you for your interest.</p><p className="mt-2 text-xs text-body">Form preview - no subscription has been created.</p><button type="button" className="focus-ring mt-3 rounded underline" onClick={() => setNewsletter(false)}>Back to newsletter form</button></div> : <form onSubmit={event => { event.preventDefault(); setNewsletter(true); }}><label className="sr-only" htmlFor="newsletter-email">Email</label><div className="contact-newsletter-form"><input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Email" required maxLength={254} /><button type="submit" className="focus-ring">Submit<span aria-hidden="true">→</span></button></div></form>}
          </div>
        </div>
      </section>
    </>
  );
}



function Field({ label, name, type = "text", placeholder, autoComplete, required, icon }: { label: string; name: string; type?: string; placeholder: string; autoComplete: string; required?: boolean; icon?: boolean }) {
  return <div><label className="contact-label" htmlFor={`contact-${name}`}>{label}{required && <span aria-hidden="true"> *</span>}</label><div className="relative">{icon && <span className="pointer-events-none absolute left-3 top-3.5 text-[#8190a3]"><Icon.mail size={15} /></span>}<input id={`contact-${name}`} name={name} type={type} autoComplete={autoComplete} maxLength={200} placeholder={placeholder} required={required} className={cx("contact-input focus-ring", icon && "pl-9!")} /></div></div>;
}

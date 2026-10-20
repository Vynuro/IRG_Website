import { useEffect, useState, type CSSProperties } from "react";
import { useLocation } from "react-router";
import { Section, SectionHead, Card, Eyebrow, WRAP, Button, cx } from "../lib/ui";
import { Icon } from "../lib/icons";
import { contact } from "../data/site";

const values = [
  {
    icon: "sparkle",
    t: "Speed",
    d: "We cut through delays and deliver insights quickly, so you can act with speed and confidence.",
  },
  {
    icon: "target",
    t: "Value",
    d: "Our focus is on outcomes that drive impact not just reports that sit on a shelf.",
  },
  {
    icon: "handshake",
    t: "Collaboration",
    d: "We work as an extension of your team, aligning with your goals and driving success together.",
  },
  {
    icon: "eye",
    t: "Transparency",
    d: "We believe in clarity at every step with real timelines, open communication, and honest updates.",
  },
] as const;

const inquiryTypes = ["A current client", "A prospective client", "A new project"];

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

export default function About() {
  const [sent, setSent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#contact") return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <>
      <section
        className="overflow-hidden border-b border-tint-100"
        style={{ background: "var(--grad-pale)" }}
      >
        <div
          className={`${WRAP} grid grid-cols-1 items-center gap-8 py-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16`}
        >
          <div className="relative z-10 lg:col-span-8">
            <Eyebrow>About IRG</Eyebrow>

            <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
              Data-driven insights.
              <br />
              Human-powered strategy.
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
              We believe great decisions come from a mix of behavioral
              expertise and strategic research. That’s why we combine B2B
              experience with real market data and always put people first.
            </p>

            <div
              className="mt-7 flex flex-wrap gap-2.5"
              aria-label="IRG capabilities"
            >
              {["Global research", "Expert intelligence", "Human insight"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-secondary/15 bg-white/70 px-3.5 py-2 text-[12px] font-bold text-primary shadow-sm backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="relative mx-auto min-h-[300px] w-full max-w-[380px] overflow-hidden rounded-panel border border-secondary/15 bg-white/80 shadow-card-hover backdrop-blur-sm lg:ml-auto lg:mr-0"
              aria-label="IRG combines market intelligence, global reach, human expertise, and strategic direction"
            >
              <span
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-tint-100/70 blur-3xl"
                aria-hidden="true"
              />

              <span
                className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
                aria-hidden="true"
              />

              <span
                className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/10"
                aria-hidden="true"
              />

              <span
                className="absolute left-1/2 top-1/2 h-[158px] w-[270px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[50%] border border-dashed border-secondary/15"
                aria-hidden="true"
              />

              <span
                className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.globe size={17} />
                </span>
                Global reach
              </span>

              <span
                className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.users size={17} />
                </span>
                Human expertise
              </span>

              <span
                className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.target size={17} />
                </span>
                Clear direction
              </span>

              <span
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.handshake size={17} />
                </span>
                Partnership
              </span>

              <div
                className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white text-white shadow-card-hover"
                style={{ background: "var(--grad-primary)" }}
              >
                <Icon.analytics size={58} />
              </div>

              <span className="absolute left-1/2 top-[calc(50%+64px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-tint-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
                Connected intelligence
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section tone="gray">
        <SectionHead
          eyebrow="Our Core Values"
          title="Our Core Values"
          intro="These principles shape how we work, collaborate, and grow with every partner."
          center
        />

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <Card key={value.t}>
              <div className="flex h-12 w-12 items-center justify-center rounded-input bg-tint-50 text-secondary">
                {Icon[value.icon]({ size: 24 })}
              </div>

              <h3 className="mt-5 text-[20px] font-semibold text-primary">
                {value.t}
              </h3>

              <p className="mt-2 text-[15px] leading-relaxed text-body">
                {value.d}
              </p>
            </Card>
          ))}
        </div>
      </Section>


      <section
        id="contact"
        className="scroll-mt-[96px] overflow-hidden border-y border-tint-100"
        style={{ background: "var(--grad-pale)" }}
      >
        <div className={`${WRAP} py-12 sm:py-14 lg:py-16`}>
          <div className="max-w-3xl">
            <Eyebrow>Contact Us</Eyebrow>
            <h2 className="mt-4 text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[42px] lg:text-[48px]">
              Let’s Work Together
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
              We’d love to understand your goals and see how IRG can help.
            </p>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-[24px] font-extrabold text-primary">Get in touch</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-[15px] text-body">
                <span className="text-secondary">
                  <Icon.phone size={20} />
                </span>
                <span>US {contact.usPhone}</span>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-body">
                <span className="text-secondary">
                  <Icon.phone size={20} />
                </span>
                <span>UK {contact.ukPhone}</span>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-body">
                <span className="text-secondary">
                  <Icon.mail size={20} />
                </span>
                <a href={`mailto:${contact.email}`} className="hover:text-primary">
                  {contact.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-10 text-[18px] font-bold text-primary">Our offices</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-card border border-tint-100 bg-white p-5"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Icon.pin size={18} />
                    <span className="text-[16px] font-semibold">{office.city}</span>
                  </div>
                  <p className="mt-1 text-[14px] text-body">{office.country}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-body">
                    {office.address}
                  </p>
                  {office.phone && (
                    <p className="mt-2 text-[14px] font-medium text-primary">
                      {office.phone}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div
                className="irg-expert-success relative overflow-hidden rounded-panel border border-secondary/15 bg-white p-8 text-center shadow-card sm:p-12"
                role="status"
                aria-live="polite"
              >
                <div className="irg-success-glow" aria-hidden="true" />
                <div className="irg-success-particles" aria-hidden="true">
                  {[...Array(10)].map((_, index) => (
                    <span
                      key={index}
                      style={{ "--particle-index": index } as CSSProperties}
                    />
                  ))}
                </div>

                <div className="irg-success-check mx-auto" aria-hidden="true">
                  <svg viewBox="0 0 72 72" role="presentation">
                    <circle className="irg-success-circle" cx="36" cy="36" r="30" />
                    <path className="irg-success-tick" d="m21.5 37 9.5 9.5L51 25.8" />
                  </svg>
                </div>

                <h3 className="relative mt-6 text-[29px] font-extrabold text-primary sm:text-[34px]">
                  Thanks message sent
                </h3>
                <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-body">
                  We&rsquo;ve received your inquiry and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                className="rounded-panel border border-tint-100 bg-white p-7 shadow-card sm:p-8"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <Eyebrow>Send us a message</Eyebrow>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    name="name"
                    placeholder="e.g., Jane Doe"
                    required
                  />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    placeholder="e.g., jane@company.com"
                    required
                  />
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Your organisation"
                  />
                  <div>
                    <label
                      className="block text-[14px] font-bold text-primary"
                      htmlFor="type"
                    >
                      Inquiry Type: I am / I have
                    </label>
                    <select
                      id="type"
                      name="type"
                      className={cx(inputCls, "mt-2")}
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    className="block text-[14px] font-bold text-primary"
                    htmlFor="msg"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    rows={5}
                    placeholder="Tell us about your objectives, timeline, and audience."
                    className={cx(inputCls, "mt-2 resize-y")}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="mt-6">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

const inputCls =
  "focus-ring w-full rounded-input border border-tint-100 bg-white px-4 py-3 text-[15px] font-normal text-primary placeholder:text-body/50";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="block text-[14px] font-bold text-primary"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={cx(inputCls, "mt-2")}
      />
    </div>
  );
}

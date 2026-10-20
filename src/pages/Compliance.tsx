import { useState, useEffect } from "react";
import { Section, Eyebrow, WRAP, cx } from "../lib/ui";
import { Icon } from "../lib/icons";
import { ConsultationCall } from "../components/Bands";

const sections = [
  {
    id: "why",
    title: "Why Compliance Matters in Market Research",
    body: [
      "Market research often involves unique insights from experienced professionals across industries. These insights must always be handled with care to ensure that no confidential, sensitive, or restricted information is misused. Our role is to create an environment where clients can access valuable knowledge while safeguarding all parties involved.",
    ],
  },
  {
    id: "framework",
    title: "Our Compliance Framework",
    body: [
      "Through years of global experience and collaboration with organizations across North America, EMEA, and APAC, Inventive Research Group has developed a compliance framework that emphasizes caution, transparency, and continuous monitoring.",
      "Our compliance model is built around three guiding principles:",
    ],
    list: [
      "Risk-Avoidance First – We err on the side of caution. When any doubt arises, we prevent the sharing of information rather than risk exposure. This protects both clients and experts from legal or ethical complications.",
      "Preventive and Ongoing Oversight – Compliance is not a one-time checkbox. We proactively monitor interactions, refresh our policies regularly, and provide training to experts to ensure ongoing awareness of what constitutes acceptable knowledge-sharing in the research industry.",
      "Clarity and Transparency – We make compliance simple to understand and easy to track. Clients and experts always know what standards apply and how interactions are being safeguarded. Should additional documentation or clarification ever be required, our team is readily available at hello@inventiveresearchgroup.com.",
    ],
  },
  {
    id: "experts",
    title: "Safeguards for Experts",
    body: [],
    list: [
      "Rigorous Screening – Identity verification, expertise validation, and conflict of interest checks.",
      "Ethical Terms of Participation – Annual agreements confirming lawful and ethical participation.",
      "Structured Training – Interactive tutorials with exercises and compliance best practices.",
      "Employer Protections – Restrictions on consulting about current employers and safeguarding past employer information.",
    ],
  },
  {
    id: "clients",
    title: "Safeguards for Clients",
    body: [],
    list: [
      "Activity Transparency – Oversight at user and company levels.",
      "Customizable Controls – Client-specific compliance triggers and attestations.",
      "Employer Preference Registry – Database of employer restrictions to avoid conflicts of interest.",
    ],
  },
  {
    id: "living",
    title: "A Living Framework",
    body: [
      "The market research landscape evolves quickly, and so do compliance risks. That’s why our framework is reviewed, updated, and strengthened regularly. We maintain a dynamic system that adapts to new regulations, technologies, and industry standards: ensuring that our clients and experts are always protected.",
      "At Inventive Research Group, compliance isn’t a hurdle; it’s what makes knowledge-sharing safe, valuable, and sustainable.",
    ],
  },
];

export default function Compliance() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

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
            <Eyebrow>Compliance</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
              Inventive Research Group, Compliance Commitment
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
              At Inventive Research Group, compliance is more than just a requirement; it’s the foundation of how we operate. In the world of market research and expert engagement, knowledge is powerful. When shared responsibly, it helps organizations grow, innovate, and make better decisions. But when mishandled, it can pose risks. That’s why we’ve built one of the most stringent and forward-looking compliance frameworks in the industry, designed to protect both our clients and the experts we work with.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div
              className="relative mx-auto min-h-[300px] w-full max-w-[380px] overflow-hidden rounded-panel border border-secondary/15 bg-white/80 shadow-card-hover backdrop-blur-sm lg:ml-auto lg:mr-0"
              aria-label="IRG compliance framework covering risk avoidance, ongoing oversight, expert safeguards, and client safeguards"
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
                className="absolute left-1/2 top-1/2 h-[158px] w-[270px] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-[50%] border border-dashed border-secondary/15"
                aria-hidden="true"
              />

              <span
                className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.shield size={17} />
                </span>
                Risk avoidance
              </span>

              <span
                className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.eye size={17} />
                </span>
                Ongoing oversight
              </span>

              <span
                className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.users size={17} />
                </span>
                Expert safeguards
              </span>

              <span
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.handshake size={17} />
                </span>
                Client safeguards
              </span>

              <div
                className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white text-white shadow-card-hover"
                style={{ background: "var(--grad-primary)" }}
              >
                <Icon.shield size={58} />
              </div>

              <span className="absolute left-1/2 top-[calc(50%+64px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-tint-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
                Responsible research
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sticky index */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-24 space-y-1" aria-label="Sections">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={cx(
                    "focus-ring block rounded-ctl border-l-2 px-3 py-2 text-[14px] transition-colors",
                    active === s.id
                      ? "border-secondary bg-tint-50 font-semibold text-primary"
                      : "border-transparent text-body hover:text-primary"
                  )}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Document body */}
          <div className="lg:col-span-9">
            <div className="max-w-2xl space-y-14">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-[26px] font-extrabold leading-tight text-primary sm:text-[30px]">{s.title}</h2>
                  {s.body.map((p, i) => (
                    <p key={i} className="mt-4 text-[16px] leading-[1.8] text-body">{p}</p>
                  ))}
                  {s.list && (
                    <ul className="mt-5 space-y-2.5">
                      {s.list.map((li) => (
                        <li key={li} className="flex gap-3 text-[15px] text-body">
                          <span className="mt-0.5 shrink-0 text-secondary"><Icon.check size={18} /></span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ConsultationCall />
    </>
  );
}

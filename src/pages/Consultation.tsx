import { Section, SectionHead, Card, Eyebrow, Button, WRAP } from "../lib/ui";
import { Icon } from "../lib/icons";
import FAQ from "../components/FAQ";
import { process } from "../data/site";

const why = [
  { icon: "users", t: "Expert Access", d: "Tap into our B2B expert network decision makers, practitioners, and niche specialists." },
  { icon: "compass", t: "Right Method, Right Time", d: "From IDIs & focus groups to CATI & online surveys we tailor the best approach." },
  { icon: "clock", t: "Fast Turnarounds", d: "Lean ops and vetted panels let us move from scope to data in days, not months." },
  { icon: "target", t: "Decision-Grade Outputs", d: "Clear insights, defensible methodology, and actionable recommendations." },
] as const;

const faqs = [
  { q: "How soon can we start?", a: "Discovery calls can happen within 24-48 hours. Fieldwork timelines vary by method and audience complexity." },
  { q: "Can you recruit niche B2B roles?", a: "Yes, we leverage an expert network and targeted sourcing to reach specific roles and geographies." },
  { q: "Do you handle moderation and analysis?", a: "End-to-end. Our team can design guides, moderate IDIs/groups, and synthesize insights into clear outputs." },
  { q: "What geographies do you cover?", a: "Global coverage with multilingual moderators and panels, depending on the audience." },
];

export default function Consultation() {
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
            <Eyebrow>Consultation</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
              Check feasibility & costing
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
              Connect with the IRG team to quickly validate your research feasibility, whether it’s a qualitative study or a large scale quantitative survey.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div
              className="relative mx-auto min-h-[300px] w-full max-w-[380px] overflow-hidden rounded-panel border border-secondary/15 bg-white/80 shadow-card-hover backdrop-blur-sm lg:ml-auto lg:mr-0"
              aria-label="IRG consultation covering expert access, tailored methods, fast turnarounds, and decision-grade outputs"
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
                  <Icon.users size={17} />
                </span>
                Expert access
              </span>

              <span
                className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.compass size={17} />
                </span>
                Right method
              </span>

              <span
                className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.clock size={17} />
                </span>
                Fast turnarounds
              </span>

              <span
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.target size={17} />
                </span>
                Decision-grade
              </span>

              <div
                className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white text-white shadow-card-hover"
                style={{ background: "var(--grad-primary)" }}
              >
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M11 34v-3C11 19.4 20.4 10 32 10s21 9.4 21 21v3"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 32h3.5a6.5 6.5 0 0 1 6.5 6.5v9A6.5 6.5 0 0 1 14.5 54H13a4 4 0 0 1-4-4V36a4 4 0 0 1 2-4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M53 32h-3.5a6.5 6.5 0 0 0-6.5 6.5v9a6.5 6.5 0 0 0 6.5 6.5H51a4 4 0 0 0 4-4V36a4 4 0 0 0-2-4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M53 49v1.5C53 56.3 48.3 61 42.5 61H37"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <rect x="29" y="57.5" width="10" height="6" rx="3" fill="currentColor" />
                </svg>
              </div>

              <span className="absolute left-1/2 top-[calc(50%+64px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-tint-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
                Research consultation
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Explanatory content */}
          <div className="lg:col-span-7">
            <SectionHead eyebrow="Why consult IRG?" title="Get to a confident decision, faster" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {why.map((w) => (
                <Card key={w.t}>
                  <div className="text-secondary">{Icon[w.icon]({ size: 26 })}</div>
                  <h3 className="mt-4 text-[18px] font-semibold text-primary">{w.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-body">{w.d}</p>
                </Card>
              ))}
            </div>

            <h3 className="mt-14 text-[24px] font-extrabold text-primary">Our approach</h3>
            <div className="mt-6 space-y-4">
              {process.map((s) => (
                <div key={s.n} className="flex gap-5 rounded-card border border-tint-100 bg-white p-5">
                  <span className="text-[18px] font-extrabold text-tint-100">{s.n}</span>
                  <div>
                    <p className="text-[16px] font-semibold text-primary">{s.title}</p>
                    <p className="mt-1 text-[15px] text-body">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky scheduling panel */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-panel border border-tint-100 bg-white p-7 shadow-card-hover">
                <Eyebrow>Book your slot</Eyebrow>
                <h3 className="mt-4 text-[24px] font-extrabold text-primary">Schedule a consultation</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">Choose a convenient time to speak with the IRG team about your research requirements.</p>
                <Button href="https://calendar.app.google/YHw49MgJ1peSvjfo6" size="lg" className="mt-6 w-full">Schedule a Call</Button>
                <div className="mt-6 flex items-center gap-4 rounded-card bg-tint-50 p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-input border border-tint-100 bg-white text-body">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3 3h6v6H3V3Zm2 2v2h2V5H5Zm10-2h6v6h-6V3Zm2 2v2h2V5h-2ZM3 15h6v6H3v-6Zm2 2v2h2v-2H5Zm12-2h2v2h-2v-2Zm2 2h2v2h-2v-2Zm-2 2h2v2h-2v-2Zm-2-4h2v2h-2v-2Zm0 4h2v2h-2v-2Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-primary">Scan to book a call</p>
                    <p className="text-[13px] text-body">Point your phone camera to open Google Calendar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="gray">
        <SectionHead eyebrow="FAQ" title="Frequently asked questions" center />
        <div className="mt-12"><FAQ items={faqs} /></div>
      </Section>
    </>
  );
}

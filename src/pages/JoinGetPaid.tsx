import { Section, SectionHead, Card, PageHero, Button, cx, WRAP } from "../lib/ui";
import { Icon } from "../lib/icons";
import FAQ from "../components/FAQ";

const trust = [
  { icon: "globe", t: "Work with global research firms / Fortune 500 clients", d: "Participate in legitimate market research opportunities matched to your professional expertise." },
  { icon: "shield", t: "Strict data confidentiality", d: "Your information is protected throughout the research process." },
  { icon: "chat", t: "No sales or spam (research only)", d: "Your participation is used strictly for research purposes." },
] as const;

const studies = [
  { icon: "chat", t: "In-Depth Interviews" },
  { icon: "poll", t: "Online Surveys" },
  { icon: "users", t: "Focus Groups" },
  { icon: "layers", t: "Online Bulletin Boards" },
  { icon: "globe", t: "MROCs / Online Communities" },
  { icon: "phone", t: "Telephone Interviews" },
] as const;

const faqs = [
  { q: "Is this legit?", a: "Yes, we work with global research firms and Fortune 500 companies to provide legitimate market research opportunities." },
  { q: "When will I get paid?", a: "Typically within 2-4 weeks after successful completion of the study and client sign-off." },
  { q: "Will I be sold something?", a: "No. Our studies are strictly for research purposes. We will never sell your data or use it for marketing pitches." },
  { q: "How do you find me?", a: "We match your professional background and expertise listed in our network with specific study requirements." },
];

export default function JoinGetPaid() {
  return (
    <>
      <PageHero
        eyebrow="Join & Get Paid"
        title={<>Get Paid for Your Expertise<br />Safely and Transparently</>}
        intro="Participate in paid interviews, surveys, and advisory sessions. Our platform ensures a smooth process and timely payments for every contribution you make."
      />

      <Section tone="white">
        <SectionHead eyebrow="Why Experts Trust Us" title="A network built on respect and integrity" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {trust.map((c) => (
            <Card key={c.t}>
              <div className="flex h-12 w-12 items-center justify-center rounded-input bg-tint-50 text-secondary">
                {Icon[c.icon]({ size: 24 })}
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-primary" dangerouslySetInnerHTML={{ __html: c.t }} />
              <p className="mt-2 text-[14px] leading-relaxed text-body" dangerouslySetInnerHTML={{ __html: c.d }} />
            </Card>
          ))}
        </div>
      </Section>

      {/* Guaranteed & Timely Payments */}
      <section className="text-white" style={{ background: "var(--grad-dark)" }}>
        <div className={cx(WRAP, "grid grid-cols-1 gap-8 py-16 lg:grid-cols-2 lg:items-center")}>
          <div>
            <h2 className="text-[30px] font-extrabold sm:text-[38px]">Guaranteed &amp; Timely Payments</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75 sm:text-[16px]">
              We value your time. All participants are guaranteed payment for their contributions through secure and convenient channels.
            </p>
            <p className="mt-4 text-[15px] italic text-white/75">“We have paid hundreds of professionals globally across US, UK, EU and APAC”</p>
          </div>
          <div className="rounded-panel border border-white/10 bg-white/[0.04] p-7">
            {["Terms agreed before every study", "Payment within 2-4 weeks of study completion and client sign-off", "Clear communication throughout"].map((t) => (
              <div key={t} className="flex items-center gap-3 py-2 text-[15px] text-white">
                <span className="text-accent"><Icon.check size={20} /></span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <Section tone="tint">
        <SectionHead eyebrow="How It Works" title="Three simple steps" center />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { t: "Get invited", d: "Receive personalized invitations based on your expertise." },
            { t: "Qualify through screening", d: "A brief check to ensure the study is a perfect match." },
            { t: "Participate and get paid", d: "Complete the study and receive payment within 2-4 weeks of client sign-off." },
          ].map((s, i) => (
            <Card key={s.t}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-[18px] font-extrabold text-white" style={{ background: "var(--grad-primary)" }}>
                {i + 1}
              </div>
              <h3 className="mt-5 text-[19px] font-semibold text-primary">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Types of Studies */}
      <Section tone="white">
        <SectionHead eyebrow="Types of Studies" title="Ways you can participate" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {studies.map((s) => (
            <div key={s.t} className="flex flex-col items-center gap-3 rounded-card border border-tint-100 bg-white p-6 text-center">
              <span className="text-secondary">{Icon[s.icon]({ size: 28 })}</span>
              <span className="text-[15px] font-semibold text-primary">{s.t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Privacy & No Sales */}
      <Section tone="gray">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary shadow-card">
            <Icon.shield size={26} />
          </div>
          <h2 className="mt-6 text-[28px] font-extrabold text-primary">Privacy &amp; No Sales</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-body">
            Our studies are strictly for research purposes. We will never sell your data or use it for marketing pitches.
          </p>
          <Button to="/compliances" variant="outline" className="mt-6">Read our compliance commitment</Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" center />
        <div className="mt-12"><FAQ items={faqs} /></div>
      </Section>

      {/* CTA to canonical page */}
      <section className="text-white" style={{ background: "var(--grad-primary)" }}>
        <div className={cx(WRAP, "py-16 text-center")}>
          <h2 className="mx-auto max-w-2xl text-[30px] font-extrabold sm:text-[38px]">Interested in participating in future studies?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-[16px]">
            Join our expert network today and start getting rewarded for your professional insights.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/become-irg-expert" variant="dark" size="lg">Become an IRG Expert</Button>
          </div>
        </div>
      </section>
    </>
  );
}

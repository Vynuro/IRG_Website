import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router";
import { Section, SectionHead, Card, Eyebrow, Button, WRAP, cx } from "../lib/ui";
import { Icon } from "../lib/icons";
import ExpertForm from "../components/ExpertForm";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { TRUSTPILOT_URL } from "../data/site";
import { OfficialIRGLogo } from "../components/HeroLogo3D";

const expertNav = [
  { label: "How It Works", to: "#how" },
  { label: "What You Earn", to: "#payments" },
  { label: "FAQ", to: "#faq" },
];

const heroStats = [
  { value: "700k+", label: "Individually verified experts" },
  { value: "$75-$500", label: "Per engagement" },
  { value: "2-4 wks", label: "Payment timeline" },
  { value: "4.6 ★", label: "Trustpilot" },
];

const notAPanel = [
  { icon: "shield" as const, title: "You are not a profile in a database.", description: "You are a verified expert reviewed by a human team member before being confirmed for any study." },
  { icon: "target" as const, title: "Invitations are always relevant.", description: "You will only be contacted for studies that genuinely match your seniority, industry, and background." },
  { icon: "clock" as const, title: "Your time is respected.", description: "Full study details, including incentive, topic, duration, and format, are shared before you commit. You can decline any invitation without consequence." },
];

const process = [
  { title: "Apply in 2 minutes", description: "Submit a short professional profile: no CV needed. Job title, industry, seniority, LinkedIn URL, and country. Our team reviews every application individually within one business day." },
  { title: "Get matched to studies", description: "When a study specifically requires someone with your profile, we’ll contact you with full details: topic, format, duration, incentive, and scheduling, before you commit. You are never obligated to accept." },
  { title: "Participate and get paid", description: "Join your session at the agreed time. Payment processed within 2 to 4 weeks via PayPal or bank transfer. We notify you when payment is on its way." },
];

const industries = ["Technology & Software", "Financial Services", "Healthcare & Medical", "Retail & Consumer Goods", "Professional & Business Services", "Real Estate & Construction", "Manufacturing & Industrial", "Transportation & Logistics", "Utilities & Energy", "Hospitality & Travel"];
const functions = ["Executive & General Management", "Technology & Engineering", "Operations", "Sales & Business Development", "Marketing", "Finance & Accounting", "Product", "Human Resources", "Legal & Compliance", "Customer Success & Support"];

const paymentCards = [
  { icon: "cash" as const, eyebrow: "Incentive range", value: "$75-$500", description: "Per engagement. Always confirmed before you commit." },
  { icon: "clock" as const, eyebrow: "Payment timeline", value: "2-4 weeks", description: "From study completion, after client sign-off. You are notified when processing begins." },
  { icon: "globe" as const, eyebrow: "Payment methods", value: "PayPal / Bank", description: "Available in 90+ countries. Choose your method at time of payment." },
  { icon: "shield" as const, eyebrow: "Commitment", value: "Zero obligation", description: "Every invitation is optional. Declining has no effect on your membership." },
];

const faqs = [
  { q: "How is IRG different from other panel companies?", a: "IRG is a custom recruitment firm, not a panel database. We identify and approach each participant individually for each study; you are not being pulled from a list. This means invitations are always relevant to your specific background, and studies attract higher-calibre participants." },
  { q: "How often will I be contacted about studies?", a: "Only when a study matches your profile. In active industries, members typically receive one to three invitations per month. You control how often you participate and can decline any invitation without consequence." },
  { q: "Is my personal data safe?", a: <>Yes. IRG is ESOMAR verified and fully GDPR compliant. We never sell your data. Request deletion at any time: <a href="mailto:hello@inventiveresearchgroup.com" className="font-semibold text-secondary underline underline-offset-2 hover:text-primary">hello@inventiveresearchgroup.com</a>. See our <Link to="/privacy-policy" className="font-semibold text-secondary underline underline-offset-2 hover:text-primary">Privacy Policy</Link> for full details.</> },
  { q: "What happens in a typical study?", a: "Most studies are 45-90 minute video interviews via Zoom or Teams. Full briefing, topic, duration, incentive, is always shared before you commit to participation." },
  { q: "Can I leave the panel at any time?", a: <>Yes, at any point. Email <a href="mailto:hello@inventiveresearchgroup.com" className="font-semibold text-secondary underline underline-offset-2 hover:text-primary">hello@inventiveresearchgroup.com</a> and your data will be deleted within five business days. Any pending incentive payments for completed studies will still be processed in full.</> },
];

const participantReviews = [
  {
    quote: "Participated in a survey focused on how finance teams are handling software consolidation. Took about 20 minutes and the questions actually reflected what we deal with day to day. It wasn't just generic filler. Got paid on time. Pretty seamless from start to finish.",
    name: "Daniel Brooks",
    country: "US",
    date: "January 14, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "Had an IDI with one of their clients a few weeks back. My contact from Inventive was upfront about what to expect and how long it would take, which I appreciated. The session itself ran about 50 minutes and the conversation was genuinely engaging, not just box ticking. Good experience overall.",
    name: "Priya Nair",
    country: "GB",
    date: "February 6, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "Not my first time doing one of these but it was refreshingly well organized. The survey was specific to my field, HR tech, and didn't feel like a copied template. Short, to the point, and I received my honorarium without any hassle. Would participate again.",
    name: "Marcus Lee",
    country: "SG",
    date: "March 18, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "I was a bit hesitant at first since I'd had mixed experiences with research panels before. But this was different. The coordinator explained everything clearly upfront, the IDI was well run, and they paid exactly when they said they would. No surprises, which is honestly all you can ask for.",
    name: "Sofia Bennett",
    country: "CA",
    date: "April 9, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "The in depth interview covered how our organization approaches third party risk. The moderator clearly had done the preparation and asked sharp follow up questions rather than just sticking to a list. About an hour total. Payment processed within a couple of weeks. Overall a solid experience.",
    name: "Ethan Cole",
    country: "AU",
    date: "May 27, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "Did a short survey on ERP adoption, maybe 18 minutes. Relevant to my work so it didn't feel like a chore. The whole process from the initial outreach to receiving payment was handled cleanly. My coordinator was quick to respond whenever I had a question.",
    name: "Maya Thompson",
    country: "US",
    date: "June 11, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "The IDI was about decision making in our procurement department. It was a pretty niche topic but that is exactly why it felt worth my time. The researcher asked thoughtful questions and genuinely listened rather than just moving down a checklist. Comfortable, professional, and well managed.",
    name: "Oliver Grant",
    country: "GB",
    date: "July 3, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "I completed a survey on digital marketing analytics tools. Straightforward questions, well written, nothing confusing or repetitive. Took under 20 minutes. The outreach from Inventive was professional and not pushy at all. They explained what was involved and left the decision to me.",
    name: "Nadia Rahman",
    country: "AE",
    date: "August 2, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "Did an IDI covering how our team handles data privacy compliance after GDPR. Solid conversation. The moderator knew enough about the space to keep the discussion meaningful. Ran about 55 minutes. Inventive kept me in the loop throughout and the payment side was handled without any back and forth.",
    name: "Lucas Martin",
    country: "DE",
    date: "August 12, 2026",
    url: TRUSTPILOT_URL,
  },
  {
    quote: "Honestly the easiest research participation I've done. Survey was relevant, short, and well put together. The team at Inventive was professional in every interaction. Quick responses, clear instructions, and no chasing required on my end. Will keep an eye out for future studies through them.",
    name: "Chloe Evans",
    country: "GB",
    date: "August 18, 2026",
    url: TRUSTPILOT_URL,
  },
];

export default function BecomeExpert() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.title = "Become an IRG Expert: Inventive Research Group";
    return () => { document.title = "Inventive Research Group"; };
  }, []);

  /*
   * This route is declared as a sibling of Root rather than a child, because it
   * renders its own header and footer. That means it never gets Root's
   * <ScrollToTop />, so arriving from a scrolled page left it part-way down.
   *
   * useLayoutEffect (not useEffect) so the jump happens before the browser
   * paints this page — otherwise the old scroll position (e.g. the footer)
   * flashes on screen for a frame first.
   */
  useLayoutEffect(() => {
    const { hash } = window.location;

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    /*
     * Anchor targets on this page are rendered by React, so they do not exist
     * at the moment the browser would normally jump to the hash — which is why
     * arriving at /become-irg-expert#apply landed at the top of the page.
     * Wait for the section to mount, then scroll to it, offsetting the sticky
     * header so the form is not tucked underneath it.
     */
    let frame = 0;
    let attempts = 0;

    const goToAnchor = () => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const header = document.querySelector("header");
        const offset = header ? header.getBoundingClientRect().height : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 12;
        window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "instant" });
        return;
      }
      if (attempts++ < 30) frame = requestAnimationFrame(goToAnchor);
    };

    frame = requestAnimationFrame(goToAnchor);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const sectionIds = ["how", "profiles", "payments", "faq"];
    const updateActiveSection = () => {
      const marker = window.scrollY + 180;
      let current = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 border-t border-b border-t-primary/15 border-b-tint-100 bg-white/95 backdrop-blur-md">
        <div className={cx(WRAP, "flex h-[88px] items-center gap-4 xl:h-[96px]")}>
          <Link
            to="/"
            className="focus-ring flex shrink-0 items-center rounded-ctl"
            aria-label="Inventive Research Group home"
          >
            <OfficialIRGLogo
              className="h-[42px] w-auto text-primary sm:h-[46px] xl:h-[50px] 2xl:h-[52px]"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 xl:flex 2xl:gap-3">
            {expertNav.map((item) => {
              const sectionId = item.to.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={() => setActiveSection(sectionId)}
                  className={cx(
                    "focus-ring relative rounded-ctl px-1.5 py-3 text-[13px] font-semibold text-primary transition-colors hover:text-secondary 2xl:text-[14px]",
                    isActive && "text-secondary"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="pointer-events-none absolute left-1.5 right-1.5 bottom-[5px] h-[2px] rounded-full bg-secondary" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-3 xl:gap-4">
            <Link
              to="/"
              className="focus-ring hidden min-h-[40px] items-center justify-center rounded-full px-2 text-[14px] font-medium text-primary/80 transition-colors hover:text-secondary sm:inline-flex 2xl:px-3 2xl:text-[15px]"
            >
              For Clients
            </Link>
            <a
              href="#apply"
              className="focus-ring inline-flex min-h-[40px] items-center justify-center rounded-full bg-primary px-3.5 text-[14px] font-semibold text-white shadow-[0_4px_12px_rgba(0,39,118,0.08)] transition-colors hover:bg-secondary 2xl:px-4 2xl:text-[15px]"
            >
              Apply now →
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-tint-100" style={{ background: "var(--grad-pale)" }}>
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className={cx(WRAP, "relative py-14 lg:py-20")}>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-7 lg:flex lg:flex-col">
                <div className="inline-flex self-start items-center gap-2 rounded-ctl border border-secondary/20 bg-white/80 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-primary shadow-card"><span className="h-2 w-2 rounded-full bg-[#00b67a]" /> Individually selected: not randomly recruited</div>
                <h1 className="mt-5 max-w-3xl text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-primary sm:text-[42px] lg:text-[46px]">Get paid <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--grad-primary)" }}><span className="whitespace-nowrap">$75-$500</span> per engagement</span> to share your expertise</h1>
                <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">IRG doesn&rsquo;t pull names from a database. We identify and approach professionals whose background genuinely matches what a study needs. Participate on your schedule. Get paid reliably. Stay in control of every invitation.</p>
                <div className="mt-7 flex flex-wrap gap-3 lg:mt-auto lg:pt-7"><Button href="#apply" size="lg">Apply to join →</Button><Button href="#how" variant="outline" size="lg">See how it works</Button></div>
              </div>
              <aside className="relative overflow-hidden rounded-panel p-7 text-white shadow-card-hover lg:col-span-5" style={{ background: "var(--grad-dark)" }}>
                <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
                <Eyebrow dark>Individually selected</Eyebrow>
                <h2 className="mt-5 text-[28px] font-extrabold leading-tight">Relevant studies. Clear terms. Your choice.</h2>
                <div className="mt-7 space-y-3">{["Matched opportunities based on your profile", "Full study details before you commit", "International PayPal or bank payments"].map((item) => <div key={item} className="flex items-center gap-3 rounded-card border border-white/10 bg-white/[0.06] px-4 py-3.5"><span className="text-accent"><Icon.check size={19} /></span><span className="text-[14px] font-medium text-white/85">{item}</span></div>)}</div>
                <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-card bg-white p-4 text-primary"><strong className="block text-[22px] font-extrabold">$75-$500</strong><span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-body">Per engagement</span></div><div className="rounded-card bg-white p-4 text-primary"><strong className="block text-[22px] font-extrabold">2-4 weeks</strong><span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-body">Payment</span></div></div>
              </aside>
            </div>
            <div className="mt-10 overflow-hidden rounded-panel border border-secondary/15 bg-white/85 p-2 shadow-card backdrop-blur-sm"><div className="grid grid-cols-2 sm:grid-cols-4">{heroStats.map((stat, index) => <div key={stat.label} className={cx("px-3 py-5 text-center", index % 2 !== 0 && "border-l border-tint-100", index > 1 && "border-t border-tint-100 sm:border-t-0", index > 0 && "sm:border-l sm:border-tint-100")}><strong className="block whitespace-nowrap text-[22px] font-extrabold leading-none text-primary sm:text-[25px]">{stat.value}</strong><span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-body">{stat.label}</span></div>)}</div></div>
          </div>
        </section>

        <Section tone="white">
          <SectionHead
            eyebrow="Not a Panel Company"
            title="A specialist recruitment firm."
            intro="Most panel companies sign up thousands of people, blast invitations, and pay whoever qualifies first. IRG works differently. We recruit each participant individually for each study: which means when you receive an invitation, it is because your specific background is genuinely relevant."
            center
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {notAPanel.map((item) => (
              <Card key={item.title} className="min-h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-input bg-tint-50 text-secondary">{Icon[item.icon]({ size: 22 })}</div>
                <h3 className="mt-5 text-[17px] font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">{item.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section tone="tint" id="how">
          <SectionHead eyebrow="How It Works" title="Three steps to your first study" center />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">{process.map((step, index) => <article key={step.title} className="rounded-panel border border-tint-100 bg-white p-7 shadow-card"><span className="flex h-12 w-12 items-center justify-center rounded-full text-[17px] font-extrabold text-white" style={{ background: "var(--grad-primary)" }}>{index + 1}</span><h3 className="mt-6 text-[21px] font-bold text-primary">{step.title}</h3><p className="mt-3 text-[15px] leading-relaxed text-body">{step.description}</p></article>)}</div>
        </Section>

        <Section tone="white" id="profiles">
          <SectionHead
            eyebrow="Who We Recruit"
            title={<>Senior B2B professionals<br /><span className="whitespace-nowrap">across every sector.</span></>}
            intro="We recruit decision-makers and subject-matter experts: not consumers. If you hold a senior professional role in a B2B context, your expertise has research value."
            center
          />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article className="rounded-panel border border-tint-100 bg-white p-7 shadow-card sm:p-8"><div className="flex h-11 w-11 items-center justify-center rounded-input bg-tint-50 text-secondary"><Icon.layers size={23} /></div><h3 className="mt-5 text-[20px] font-bold text-primary">Industries</h3><div className="mt-5 flex flex-wrap gap-2.5">{industries.map((item) => <span key={item} className="rounded-full border border-secondary/15 bg-tint-50 px-4 py-2 text-[13px] font-semibold text-primary">{item}</span>)}</div></article>
            <article className="rounded-panel border border-tint-100 bg-white p-7 shadow-card sm:p-8"><div className="flex h-11 w-11 items-center justify-center rounded-input bg-tint-50 text-secondary"><Icon.users size={23} /></div><h3 className="mt-5 text-[20px] font-bold text-primary">Job functions</h3><div className="mt-5 flex flex-wrap gap-2.5">{functions.map((item) => <span key={item} className="rounded-full border border-secondary/15 bg-tint-50 px-4 py-2 text-[13px] font-semibold text-primary">{item}</span>)}</div></article>
          </div>
          <div id="payments" className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{paymentCards.map((card) => <article key={card.eyebrow} className="rounded-panel border border-tint-100 bg-white p-6 shadow-card"><div className="flex h-11 w-11 items-center justify-center rounded-input bg-tint-50 text-secondary">{Icon[card.icon]({ size: 22 })}</div><p className="mt-5 text-[12px] font-bold uppercase tracking-[0.1em] text-secondary">{card.eyebrow}</p><h3 className="mt-2 text-[23px] font-extrabold text-primary">{card.value}</h3><p className="mt-3 text-[14px] leading-relaxed text-body">{card.description}</p></article>)}</div>
        </Section>

        <Section tone="tint">
          <SectionHead eyebrow="Participant Feedback" title="Trusted by professionals worldwide" intro={<>Independent participant feedback on Trustpilot. <a href={TRUSTPILOT_URL} target="_blank" rel="noreferrer" className="font-semibold text-secondary hover:underline">View our reviews.</a></>} center />
          <div className="relative mt-10 overflow-hidden py-2" aria-label="Participant Trustpilot reviews">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-tint-50 to-transparent motion-reduce:hidden sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-tint-50 to-transparent motion-reduce:hidden sm:w-24" />
            <div className="marquee-track flex w-max gap-4 px-4 motion-reduce:grid motion-reduce:w-auto motion-reduce:grid-cols-1 motion-reduce:px-0 md:motion-reduce:grid-cols-2">
              {[...participantReviews, ...participantReviews].map((review, index) => (
                <a
                  key={`${review.url}-${index}`}
                  href={review.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cx(
                    "focus-ring group flex w-[300px] shrink-0 flex-col rounded-panel border border-tint-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-secondary/30 hover:shadow-card-hover sm:w-[340px]",
                    index >= participantReviews.length && "motion-reduce:hidden"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="tracking-[0.05em] text-[#00b67a]">★★★★★</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-body">Trustpilot</span>
                  </div>
                  <blockquote className="mt-5 flex-1 text-[14px] font-medium leading-[1.65] text-primary sm:text-[15px]">“{review.quote}”</blockquote>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-tint-100 pt-4">
                    <span>
                      <strong className="block text-[13px] font-bold text-primary">{review.name}</strong>
                      <small className="mt-0.5 block text-[11px] text-body">{review.country} · Participant review</small>
                    </span>
                    <time className="shrink-0 text-[11px] font-medium text-body">{review.date}</time>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="white" id="faq"><SectionHead eyebrow="FAQ" title="Common questions" center /><div className="mt-12"><FAQ items={faqs} /></div></Section>

        <Section tone="gray" id="apply">
          <SectionHead
            eyebrow="Join Our Expert Panel"
            title={<>Takes 2 minutes.<br /><span className="whitespace-nowrap">Reviewed within 1 business day.</span></>}
            center
          />
          <div className="mx-auto mt-12 max-w-4xl"><ExpertForm /></div>
          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">{["✓ ESOMAR verified", "★ 4.6 Trustpilot", "🔒 GDPR compliant", "👤 Individually recruited", "💳 PayPal & bank transfer"].map((item) => <span key={item} className="rounded-full border border-secondary/15 bg-white px-4 py-2 text-[12px] font-semibold text-primary">{item}</span>)}</div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

import { Link } from "react-router";
import { Section, SectionHead, Card, Button } from "../lib/ui";
import { Icon } from "../lib/icons";

const serviceGroups = [
  {
    icon: "qualitative" as const,
    title: "Qualitative Research Recruitment",
    description: "We recruit senior professionals for qualitative studies: one-on-one interviews, focus groups, and online communities that need the right voices, not just available ones.",
    cta: "Find your qualitative participants",
    to: "/services/qualitative-market-research",
    methods: [
      { icon: "interview" as const, title: "IDI Participant Recruitment", description: "We source and screen senior decision-makers for one-on-one interviews, matched precisely to your discussion guide criteria and screened for genuine relevance.", to: "/services/in-depth-interviews" },
      { icon: "focusGroup" as const, title: "Focus Group Recruitment", description: "We recruit matched professionals for group sessions, carefully balancing seniority, sector, and perspective so every voice in the room adds distinct value.", to: "/services/market-research-focus-groups" },
      { icon: "bulletin" as const, title: "Online Bulletin Board Recruitment", description: "We recruit engaged B2B professionals for asynchronous online discussion boards, pre-screened for relevance, commitment, and quality of contribution.", to: "/services/bulletin-boards" },
      { icon: "community" as const, title: "MROC & Online Community Recruitment", description: "We build and recruit dedicated professional communities for longitudinal research and co-creation programmes that require sustained expert engagement over time.", to: "/services/marketing-research-online-communities-depth-interviews" },
    ],
  },
  {
    icon: "analytics" as const,
    title: "Quantitative Research Recruitment",
    description: "We recruit verified B2B professionals at scale for quantitative studies: pre-screened, targeted samples that give your data the statistical integrity it needs.",
    cta: "Find your quantitative sample",
    to: "/services/quantitative-market-research",
    methods: [
      { icon: "survey" as const, title: "Online Survey Recruitment", description: "We source targeted B2B respondents for web-based surveys, screened to spec before a single response is collected. No professional survey takers, no panel fatigue.", to: "/services/online-web-survey" },
      { icon: "cati" as const, title: "CATI Recruitment", description: "We recruit pre-screened B2B professionals for structured telephone interviews, verified against your exact targeting criteria for reliable, representative data collection.", to: "/services/computer-assisted-telephone-interview" },
      { icon: "layers" as const, title: "Hybrid Study Recruitment", description: "We recruit participants for mixed-methodology programmes combining telephone, online, and in-person components, managing consistency across every touchpoint.", to: "/services/hybrid-study-recruitment" },
      { icon: "clock" as const, title: "Diary & Longitudinal Study Recruitment", description: "We recruit committed B2B professionals for multi-session diary studies, tracking behaviour and decision-making over time with verified, consistent participants throughout.", to: "/services/diary-longitudinal-study-recruitment" },
    ],
  },
];

export default function OurServices() {
  return (
    <Section tone="gray">
      <SectionHead eyebrow="Our Services" title="Two disciplines. Eight ways to reach the right experts." intro="At Inventive Research Group, we provide cutting-edge B2B market research services, combining qualitative depth with quantitative scale to help organizations decode markets, industries, and opportunities with confidence." />

      <div className="mt-14 space-y-16 lg:space-y-20">
        {serviceGroups.map((group, groupIndex) => (
          <div key={group.title} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div
                  className="relative overflow-hidden rounded-panel p-7 text-white shadow-card-hover sm:p-8"
                  style={{ background: groupIndex === 0 ? "var(--grad-primary)" : "var(--grad-dark)" }}
                >
                  <span aria-hidden="true" className="pointer-events-none absolute -right-3 -top-6 text-[120px] font-extrabold leading-none text-white/[0.07]">
                    0{groupIndex + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-input bg-white/10 ring-1 ring-white/15">{Icon[group.icon]({ size: 25 })}</div>
                  <h3 className="mt-6 text-[24px] font-extrabold leading-tight sm:text-[26px]">{group.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/80">{group.description}</p>
                  <Link to={group.to} className="focus-ring group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-primary transition-transform hover:-translate-y-0.5">
                    {group.cta}
                    <span className="transition-transform group-hover:translate-x-1"><Icon.arrow size={15} /></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
              {group.methods.map((method, i) => (
                <Link key={method.title} to={method.to} className="focus-ring group rounded-card">
                  <Card className="flex h-full flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:border-secondary/30 group-hover:shadow-card-hover">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-input bg-tint-50 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                        {Icon[method.icon]({ size: 24 })}
                      </span>
                      <span className="text-[12px] font-bold tracking-[0.14em] text-secondary/60">
                        {groupIndex + 1}.{i + 1}
                      </span>
                    </div>
                    <h4 className="mt-5 text-[18px] font-bold leading-snug text-primary">{method.title}</h4>
                    <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-body">{method.description}</p>
                    <span className="mt-5 text-[13px] font-semibold text-secondary opacity-0 transition-opacity group-hover:opacity-100">Learn more</span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

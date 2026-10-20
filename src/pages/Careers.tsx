import { Section, SectionHead, Card, Eyebrow, WRAP } from "../lib/ui";
import { Icon } from "../lib/icons";

const benefits = [
  {
    icon: "users" as const,
    title: "Inclusive Culture",
    description:
      "Work with people who bring different viewpoints and backgrounds; multicultural collaboration is our default.",
  },
  {
    icon: "sparkle" as const,
    title: "Growth & Learning",
    description:
      "Own meaningful projects, tackle new challenges, and grow your expertise with mentorship and feedback.",
  },
  {
    icon: "clock" as const,
    title: "Flexibility",
    description:
      "We design flexible arrangements so you can do your best work and maintain a healthy balance.",
  },
];

const waysOfWorking = [
  ["Impact", "Contribute to projects that shape strategy for leading B2B organizations."],
  ["Collaboration", "Partner with analysts, moderators, and subject-matter experts."],
  ["Ownership", "Define hypotheses, run studies, and drive recommendations end-to-end."],
  ["Excellence", "Hold a high bar for quality research that leaders can act on."],
];

export default function Careers() {
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
            <Eyebrow>Careers at IRG</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
              Build Your Career at IRG
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
              Are you looking for a career full of opportunities? Join us and expand your expertise to discover your undiscovered capabilities. You’ll get plenty of chances to grow by learning to navigate and solve real-world challenges.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div
              className="relative mx-auto min-h-[300px] w-full max-w-[380px] overflow-hidden rounded-panel border border-secondary/15 bg-white/80 shadow-card-hover backdrop-blur-sm lg:ml-auto lg:mr-0"
              aria-label="Careers at IRG focused on inclusive culture, growth, flexibility, and meaningful impact"
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
                Inclusive culture
              </span>

              <span
                className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.sparkle size={17} />
                </span>
                Growth & learning
              </span>

              <span
                className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.clock size={17} />
                </span>
                Flexibility
              </span>

              <span
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.target size={17} />
                </span>
                Impact
              </span>

              <div
                className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white text-white shadow-card-hover"
                style={{ background: "var(--grad-primary)" }}
              >
                <Icon.users size={58} />
              </div>

              <span className="absolute left-1/2 top-[calc(50%+64px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-tint-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
                Grow with IRG
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <SectionHead
          eyebrow="Why join Inventive Research Group?"
          title="Why Join Inventive Research Group?"
          intro="At Inventive Research Group, diversity and inclusion shape our multi-talented workforce. We empower people to reach their full potential through flexible work settings and a culture that values fresh ideas and meaningful insights in a constantly evolving world."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-input bg-tint-50 text-secondary">
                {Icon[benefit.icon]({ size: 24 })}
              </div>
              <h3 className="mt-5 text-[19px] font-semibold text-primary">{benefit.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHead eyebrow="How You’ll Work With Us" title="How You’ll Work With Us" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {waysOfWorking.map(([title, description]) => (
            <Card key={title}>
              <h3 className="text-[19px] font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{description}</p>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-[16px] text-body">
          To apply, please email your resume to hello@inventiveresearchgroup.com.
        </p>
      </Section>
    </>
  );
}

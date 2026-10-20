import { useMemo, useState } from "react";
import { Section, Eyebrow, Button, Card, WRAP, cx } from "../lib/ui";
import { Icon } from "../lib/icons";
import { projects, studyTypeFilters, industryFilters } from "../data/projects";

const typeIcon: Record<string, keyof typeof Icon> = {
  IDI: "interview",
  Survey: "poll",
  "Focus group": "focusGroup",
  "Bulletin board": "bulletin",
};

export default function LiveProjects() {
  const [types, setTypes] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);

  const toggleType = (t: string) =>
    setTypes((current) => (current.includes(t) ? current.filter((x) => x !== t) : [...current, t]));
  const toggleIndustry = (i: string) =>
    setIndustries((current) => (current.includes(i) ? current.filter((x) => x !== i) : [...current, i]));
  const reset = () => {
    setTypes([]);
    setIndustries([]);
  };

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (types.length === 0 || types.includes(p.type)) &&
          (industries.length === 0 || industries.includes(p.industry))
      ),
    [types, industries]
  );

  const hasFilters = types.length > 0 || industries.length > 0;

  return (
    <>
      {/* Intro */}
      <section className="overflow-hidden border-b border-tint-100" style={{ background: "var(--grad-pale)" }}>
        <div className={cx(WRAP, "py-12 sm:py-14 lg:py-16")}>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="relative z-10 lg:col-span-8">
              <Eyebrow>Recruiting now</Eyebrow>
              <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
                Get paid to share what{" "}you{" "}know.
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
                Every project below is actively recruiting senior B2B professionals. Find one that fits your
                expertise, apply in 2 minutes, and get paid $75-$500 upon completion.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div
                className="relative mx-auto min-h-[300px] w-full max-w-[380px] overflow-hidden rounded-panel border border-secondary/15 bg-white/80 shadow-card-hover backdrop-blur-sm lg:ml-auto lg:mr-0"
                aria-label="IRG live research projects across multiple study formats, markets, and incentive ranges"
              >
                <span className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-tint-100/70 blur-3xl" aria-hidden="true" />
                <span className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
                <span className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/10" aria-hidden="true" />
                <span className="absolute left-1/2 top-1/2 h-[158px] w-[270px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[50%] border border-dashed border-secondary/15" aria-hidden="true" />

                <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm" aria-hidden="true">
                  <span className="text-secondary"><Icon.clock size={17} /></span>
                  Open now
                </span>
                <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm" aria-hidden="true">
                  <span className="text-secondary"><Icon.interview size={17} /></span>
                  IDI + surveys
                </span>
                <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm" aria-hidden="true">
                  <span className="text-secondary"><Icon.globe size={17} /></span>
                  90+ markets
                </span>
                <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm" aria-hidden="true">
                  <span className="text-secondary"><Icon.cash size={17} /></span>
                  $75-$500
                </span>

                <div
                  className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white text-white shadow-card-hover"
                  style={{ background: "var(--grad-primary)" }}
                >
                  <Icon.checklist size={52} />
                </div>
                <span className="absolute left-1/2 top-[calc(50%+64px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-tint-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
                  {projects.length} live projects
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-panel border border-secondary/15 bg-white/85 p-2 shadow-card backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {[
                { value: String(projects.length), label: "Open now" },
                { value: "$75-$500", label: "Per engagement" },
                { value: "24h", label: "Response time" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={cx(
                    "px-3 py-5 text-center",
                    index > 0 && "border-t border-tint-100 sm:border-t-0 sm:border-l"
                  )}
                >
                  <strong className="block whitespace-nowrap text-[22px] font-extrabold leading-none text-primary sm:text-[25px]">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-body">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters + results */}
      <Section tone="gray" className="!py-8 sm:!py-10 lg:!py-12">
        <div className="rounded-card border border-tint-100 bg-white px-5 py-5 shadow-[0_5px_18px_rgba(0,39,118,0.035)] sm:px-7 sm:py-6">
          <fieldset>
            <legend className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">Study type</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {studyTypeFilters.map((t) => {
                const active = types.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleType(t)}
                    aria-pressed={active}
                    className={cx(
                      "focus-ring rounded-full border px-3.5 py-2 text-[13px] font-semibold transition-colors",
                      active
                        ? "border-primary bg-primary text-white"
                        : "border-tint-100 bg-white text-primary/70 hover:border-secondary/25 hover:bg-tint-50"
                    )}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">Industry</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {industryFilters.map((i) => {
                const active = industries.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleIndustry(i)}
                    aria-pressed={active}
                    className={cx(
                      "focus-ring rounded-full border px-3.5 py-2 text-[13px] font-semibold transition-colors",
                      active
                        ? "border-primary bg-primary text-white"
                        : "border-tint-100 bg-white text-primary/70 hover:border-secondary/25 hover:bg-tint-50"
                    )}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-tint-100 pt-4">
            <p className="text-[14px] text-body">
              <strong className="text-primary">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "study matches" : "studies match"} your filters
            </p>
            {hasFilters && (
              <button
                type="button"
                onClick={reset}
                className="focus-ring shrink-0 rounded-ctl px-2 py-1 text-[13px] font-semibold text-secondary hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Card key={p.id} as="article">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cx(
                      "rounded-full px-2.5 py-1 text-[11px] font-bold",
                      p.status === "closing"
                        ? "bg-[#fff4e5] text-[#b45309]"
                        : "bg-[#e7f7f0] text-[#087a56]"
                    )}
                  >
                    {p.status === "closing" ? "Closing soon" : "Open"}
                  </span>
                  <span className="text-secondary">{Icon[typeIcon[p.type] ?? "survey"]({ size: 20 })}</span>
                </div>
                <h3 className="mt-4 text-[18px] font-bold leading-snug text-primary">{p.title}</h3>
                <p className="mt-1 text-[13px] font-medium text-secondary">
                  {p.industry} · {p.type}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-body">{p.profile}</p>
                <div className="mt-5 grid grid-cols-2 gap-y-1.5 border-t border-tint-100 pt-4 text-[13px]">
                  <span className="font-semibold text-primary">${p.incentive}</span>
                  <span className="text-right text-body">{p.duration}</span>
                  <span className="text-body">{p.format}</span>
                  <span className="text-right text-body">{p.geo}</span>
                  <span className="text-body">{p.spots} spots</span>
                </div>
                <div className="mt-5">
                  <Button to="/become-irg-expert#apply" size="md" className="w-full justify-between">
                    Apply now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-card border border-dashed border-tint-100 bg-white px-6 py-10 text-center">
            <p className="text-[15px] font-semibold text-primary">No studies match that combination right now.</p>
            <p className="mt-2 text-[14px] text-body">
              Try clearing a filter, or join our panel to be notified when a matching study opens.
            </p>
          </div>
        )}
      </Section>

      {/* Closing CTA */}
      <section className="bg-white">
        <div className={cx(WRAP, "py-10 sm:py-12")}>
          <div
            className="relative overflow-hidden rounded-panel px-6 py-10 text-white shadow-card-hover sm:px-10 lg:px-14"
            style={{ background: "var(--grad-dark)" }}
          >
            <span className="absolute -right-20 -top-28 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
            <span className="absolute -bottom-24 right-[28%] h-52 w-52 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <h2 className="text-[28px] font-extrabold sm:text-[36px]">Don&rsquo;t see a match yet?</h2>
                <p className="mt-2 max-w-xl text-[16px] text-white/75">
                  Join our expert panel. When a study specifically requires someone with your background,
                  you&rsquo;ll receive a personalised invitation: not a mass email.
                </p>
              </div>
              <Button to="/become-irg-expert" variant="dark" size="lg" className="shrink-0">
                Join our panel →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useMemo, useState } from "react";
import { Section, Card, Eyebrow, WRAP } from "../lib/ui";
import { Icon, type IconName } from "../lib/icons";
import { ConsultationCall } from "../components/Bands";
import { industries } from "../data/site";
import IndustryCounts from "../components/IndustryCounts";

const industryIcons: Record<string, IconName> = {
  "Technology & Software": "analytics",
  "Financial Services": "poll",
  "Healthcare & Medical": "users",
  "Retail & Consumer Goods": "community",
  "Professional & Business Services": "handshake",
  "Real Estate & Construction": "pin",
  "Manufacturing & Industrial": "layers",
  "Transportation & Logistics": "globe",
  "Utilities & Energy": "sparkle",
  "Hospitality & Travel": "compass",
};

export default function Industries() {
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      industries.filter((industry) =>
        (industry.name + industry.desc)
          .toLowerCase()
          .includes(q.toLowerCase())
      ),
    [q]
  );

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
            <Eyebrow>Industries</Eyebrow>

            <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
              Industries We Serve
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
              As an expert network, we deliver complete market research
              solutions across sectors turning domain expertise and rigorous
              methods into strategic recommendations that help businesses
              evolve.
            </p>

            <div
              className="mt-7 flex flex-wrap gap-2.5"
              aria-label="Industry coverage"
            >
              {[
                "15+ specialist sectors",
                "90+ markets",
                "B2B decision-makers",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-secondary/15 bg-white/70 px-3.5 py-2 text-[12px] font-bold text-primary shadow-sm backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="relative mx-auto min-h-[300px] w-full max-w-[380px] overflow-hidden rounded-panel border border-secondary/15 bg-white/80 shadow-card-hover backdrop-blur-sm lg:ml-auto lg:mr-0"
              aria-label="IRG research coverage across specialist industries and global markets"
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
                  <Icon.analytics size={17} />
                </span>
                Technology
              </span>

              <span
                className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.users size={17} />
                </span>
                Healthcare
              </span>

              <span
                className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.poll size={17} />
                </span>
                Finance
              </span>

              <span
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.layers size={17} />
                </span>
                Industrials
              </span>

              <div
                className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white text-white shadow-card-hover"
                style={{ background: "var(--grad-primary)" }}
              >
                <Icon.globe size={58} />
              </div>

              <span className="absolute left-1/2 top-[calc(50%+64px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-tint-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
                15+ specialist sectors
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto mb-10 max-w-md">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body">
              <Icon.search size={18} />
            </span>

            <input
              value={q}
              onChange={(event) => setQ(event.target.value)}
              placeholder="Search industries"
              aria-label="Search industries"
              className="focus-ring w-full rounded-input border border-tint-100 bg-white py-3 pl-11 pr-4 text-[15px] text-primary placeholder:text-body/50"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-[16px] text-body">
            No industries match &ldquo;{q}&rdquo;.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((industry) => (
              <Card key={industry.name}>
                <div className="flex h-11 w-11 items-center justify-center rounded-input bg-tint-50 text-secondary">
                  {Icon[industryIcons[industry.name] ?? "layers"]({
                    size: 22,
                  })}
                </div>

                <h3 className="mt-5 text-[19px] font-semibold text-primary">
                  {industry.name}
                </h3>

                <p className="mt-2 text-[14px] leading-relaxed text-body">
                  {industry.desc}
                </p>
              </Card>
            ))}
          </div>
        )}
      </Section>

      <IndustryCounts />

      <ConsultationCall />
    </>
  );
}

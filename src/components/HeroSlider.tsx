import { useEffect, useState } from "react";
import { Link } from "react-router";
import { WRAP, cx } from "../lib/ui";

import healthcare from "../assets/hero/healthcare.jpg";
import finance from "../assets/hero/finance.jpg";
import technology from "../assets/hero/technology.jpg";
import energy from "../assets/hero/energy.jpg";
import manufacturing from "../assets/hero/manufacturing.jpg";
import professional from "../assets/hero/professional.jpg";

const slides = [
  {
    industry: "Healthcare & Life Sciences",
    image: healthcare,
    line: "Clinicians, payers and pharma leaders who shape patient outcomes.",
  },
  {
    industry: "Financial Services",
    image: finance,
    line: "Bankers, CFOs and investors who move capital every day.",
  },
  {
    industry: "Technology & Telecom",
    image: technology,
    line: "CTOs, architects and buyers behind enterprise technology.",
  },
  {
    industry: "Energy & Utilities",
    image: energy,
    line: "Operators and strategists powering the energy transition.",
  },
  {
    industry: "Industrials & Manufacturing",
    image: manufacturing,
    line: "Plant leaders and engineers running the world's production lines.",
  },
  {
    industry: "Professional & Business Services",
    image: professional,
    line: "Consultants, partners and advisors who sell expertise, not products.",
  },
];

const headings = [
  ["From Niche Brief to", "Qualified Participant."],
  ["Beyond Panels. Into the", "Right Conversations."],
  ["Your Research Brief Deserves", "More Than a Generic Panel."],
];

const DURATION = 4000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (
      paused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % slides.length),
      DURATION
    );

    return () => window.clearTimeout(id);
  }, [active, paused]);

  const go = (step: number) =>
    setActive((i) => (i + step + slides.length) % slides.length);

  const slide = slides[active];

  return (
    <div
      className="px-3 pt-3 sm:px-5 sm:pt-5"
      style={{ background: "var(--grad-pale)" }}
    >
      <section
        className="relative isolate flex min-h-[640px] items-center overflow-hidden rounded-[28px] bg-primary text-white shadow-[0_24px_60px_rgba(0,39,118,0.18)] sm:rounded-[36px] lg:min-h-[700px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
      >
        {slides.map((s, i) => (
          <div
            key={s.industry}
            aria-hidden={i !== active}
            className={cx(
              "absolute inset-0 -z-20 transition-opacity duration-[1400ms] ease-out",
              i === active ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={s.image}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              className={cx(
                "h-full w-full object-cover transition-transform ease-linear",
                i === active
                  ? "scale-110 duration-[5000ms]"
                  : "scale-100 duration-0"
              )}
            />
          </div>
        ))}

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,22,70,0.55)_0%,rgba(0,22,70,0.82)_70%)]" />

        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#001646]/90 to-transparent" />

        <div
          className={cx(
            WRAP,
            "relative flex flex-col items-center py-24 text-center"
          )}
        >
          <div
            key={`tag-${active}`}
            className="hero-fade inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.2)]" />
            {slide.industry}
          </div>

          <h1
            key={`h-${active % headings.length}`}
            className="mt-7 min-h-[2.1em] max-w-5xl text-balance text-[38px] font-[650] leading-[1.08] tracking-[-0.035em] text-white sm:text-[52px] lg:text-[64px]"
            style={{
              fontVariationSettings: '"opsz" 32',
              color: "#ffffff",
              textShadow: "0 3px 18px rgba(0, 15, 55, 0.28)",
            }}
          >
            {headings[active % headings.length].map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            key={`line-${active}`}
            className="hero-fade mt-6 max-w-2xl text-[17px] leading-[1.6] text-white/85 sm:text-[18px]"
          >
            {slide.line} Verified senior B2B professionals across 15+
            industries, delivered in 5 to 10 business days.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              to="/panel-explorer"
              className="focus-ring group inline-flex min-h-[54px] items-center gap-4 rounded-full bg-white pl-6 pr-2 text-[15px] font-semibold text-primary shadow-[0_14px_34px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5"
            >
              Explore our panel

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <Link
              to="/consultation"
              className="focus-ring inline-flex min-h-[54px] items-center rounded-full border border-white/35 bg-white/5 px-7 text-[15px] font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/15"
            >
              Talk to our team
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous industry"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-[16px] transition hover:bg-white/15"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.industry}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${s.industry}`}
                  aria-current={i === active}
                  className="focus-ring relative h-1.5 w-10 overflow-hidden rounded-full bg-white/25 sm:w-14"
                >
                  <span
                    key={i === active ? `p-${active}` : undefined}
                    className={cx(
                      "absolute inset-y-0 left-0 rounded-full bg-white",
                      i === active
                        ? "hero-progress"
                        : i < active
                        ? "w-full"
                        : "w-0"
                    )}
                    style={
                      i === active
                        ? {
                            animationDuration: `${DURATION}ms`,
                            animationPlayState: paused
                              ? "paused"
                              : "running",
                          }
                        : undefined
                    }
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next industry"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-[16px] transition hover:bg-white/15"
            >
              →
            </button>
          </div>

          <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/60">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </section>
    </div>
  );
}
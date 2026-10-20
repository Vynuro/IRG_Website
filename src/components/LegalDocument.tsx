import { useEffect, useState, type ReactNode } from "react";
import { Section, Eyebrow, WRAP, cx } from "../lib/ui";
import { Icon } from "../lib/icons";
import { ConsultationCall } from "./Bands";

/* Turn any email address inside a plain string into a mailto link. */
const EMAIL_RE = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
const IS_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
function linkify(text: string): ReactNode {
  const parts = text.split(EMAIL_RE);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    IS_EMAIL.test(part) ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="font-semibold text-secondary underline underline-offset-2 hover:text-primary"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "address"; lines: string[] }
  | { kind: "leadList"; items: { lead: string; text: string }[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export default function LegalDocument({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

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
  }, [sections]);

  return (
    <>
      <section
        className="overflow-hidden border-b border-tint-100"
        style={{ background: "var(--grad-pale)" }}
      >
        <div className={cx(WRAP, "py-12 sm:py-16 lg:py-20")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
            {title}
          </h1>
          <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.14em] text-secondary">
            Last Updated: {lastUpdated}
          </p>
          {intro && (
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">{intro}</p>
          )}
        </div>
      </section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sticky index */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav
              className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-1 overflow-y-auto pr-2"
              aria-label="Sections"
            >
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={cx(
                    "focus-ring block rounded-ctl border-l-2 px-3 py-2 text-[13px] leading-snug transition-colors",
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
                  <h2 className="text-[24px] font-extrabold leading-tight text-primary sm:text-[28px]">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {s.blocks.map((b, i) => {
                      switch (b.kind) {
                        case "p":
                          return (
                            <p key={i} className="text-[16px] leading-[1.8] text-body">
                              {linkify(b.text)}
                            </p>
                          );
                        case "h3":
                          return (
                            <h3 key={i} className="pt-2 text-[17px] font-bold text-primary">
                              {b.text}
                            </h3>
                          );
                        case "address":
                          return (
                            <address
                              key={i}
                              className="not-italic text-[16px] leading-[1.8] text-body"
                            >
                              {b.lines.map((line, li) => (
                                <span key={li} className="block">
                                  {linkify(line)}
                                </span>
                              ))}
                            </address>
                          );
                        case "ul":
                          return (
                            <ul key={i} className="space-y-2.5">
                              {b.items.map((li) => (
                                <li key={li} className="flex gap-3 text-[15px] leading-[1.7] text-body">
                                  <span className="mt-0.5 shrink-0 text-secondary">
                                    <Icon.check size={18} />
                                  </span>
                                  {linkify(li)}
                                </li>
                              ))}
                            </ul>
                          );
                        case "leadList":
                          return (
                            <ul key={i} className="space-y-4">
                              {b.items.map((it) => (
                                <li key={it.lead} className="text-[15px] leading-[1.8] text-body">
                                  <span className="font-bold text-primary">{it.lead}</span> {linkify(it.text)}
                                </li>
                              ))}
                            </ul>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
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

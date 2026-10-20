import { useLocation, Link } from "react-router";
import { getService, services } from "../data/services";
import { Section, SectionHead, Card, Breadcrumb, Eyebrow, Button, WRAP } from "../lib/ui";
import { Icon } from "../lib/icons";
import { ConsultationCall } from "../components/Bands";
import NotFound from "./NotFound";
import OrbitVisual from "../components/OrbitVisual";
import type { IconName } from "../lib/icons";

type Chip = { icon: IconName; label: string };

const heroChips: Record<string, Chip[]> = {
  Qualitative: [
    { icon: "users", label: "Senior experts" },
    { icon: "target", label: "Screened to spec" },
    { icon: "globe", label: "90+ markets" },
    { icon: "shield", label: "Human verified" },
  ],
  Quantitative: [
    { icon: "users", label: "700k+ panel" },
    { icon: "target", label: "Quota control" },
    { icon: "globe", label: "90+ markets" },
    { icon: "shield", label: "Fraud checks" },
  ],
  "qualitative-market-research": [
    { icon: "interview", label: "IDIs" },
    { icon: "focusGroup", label: "Focus groups" },
    { icon: "bulletin", label: "Bulletin boards" },
    { icon: "community", label: "MROCs" },
  ],
  "quantitative-market-research": [
    { icon: "survey", label: "Online surveys" },
    { icon: "cati", label: "CATI" },
    { icon: "layers", label: "Hybrid studies" },
    { icon: "clock", label: "Diary studies" },
  ],
  "in-depth-interviews": [
    { icon: "users", label: "C-suite access" },
    { icon: "phone", label: "Phone or video" },
    { icon: "target", label: "Guide-matched" },
    { icon: "clock", label: "Fast scheduling" },
  ],
  "market-research-focus-groups": [
    { icon: "users", label: "Balanced mix" },
    { icon: "pin", label: "In-person" },
    { icon: "globe", label: "Online groups" },
    { icon: "target", label: "Seniority quotas" },
  ],
  "bulletin-boards": [
    { icon: "chat", label: "Async threads" },
    { icon: "clock", label: "Multi-day" },
    { icon: "users", label: "Engaged experts" },
    { icon: "checklist", label: "Pre-screened" },
  ],
  "marketing-research-online-communities-depth-interviews": [
    { icon: "community", label: "Communities" },
    { icon: "clock", label: "Longitudinal" },
    { icon: "sparkle", label: "Co-creation" },
    { icon: "users", label: "Retention" },
  ],
  "online-web-survey": [
    { icon: "survey", label: "Web surveys" },
    { icon: "target", label: "Screened to spec" },
    { icon: "shield", label: "No pro takers" },
    { icon: "analytics", label: "Clean data" },
  ],
  "computer-assisted-telephone-interview": [
    { icon: "phone", label: "Telephone" },
    { icon: "phoneScript", label: "Structured script" },
    { icon: "target", label: "Verified targets" },
    { icon: "analytics", label: "Reliable data" },
  ],
  "hybrid-study-recruitment": [
    { icon: "phone", label: "Telephone" },
    { icon: "survey", label: "Online" },
    { icon: "pin", label: "In-person" },
    { icon: "checklist", label: "Consistency" },
  ],
  "diary-longitudinal-study-recruitment": [
    { icon: "clock", label: "Multi-session" },
    { icon: "checklist", label: "Committed" },
    { icon: "eye", label: "Behaviour tracking" },
    { icon: "users", label: "Same panel" },
  ],
};

export default function ServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace("/services/", "");
  const svc = getService(slug);
  if (!svc) return <NotFound />;

  const parentSlug = svc.parent === "Qualitative" ? "qualitative-market-research" : "quantitative-market-research";
  const related = services
    .filter((s) => s.parent === svc.parent && s.slug !== svc.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--grad-pale)" }} className="border-b border-tint-100">
        <div className={`${WRAP} py-10 sm:py-14`}>
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: `${svc.parent} Research`, to: `/services/${parentSlug}` },
              { label: svc.eyebrow },
            ]}
          />
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <Eyebrow>{svc.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
                {svc.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">{svc.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/consultation" size="lg">Send Requirements</Button>
                <Button to="/panel-explorer" variant="outline" size="lg">Explore Our Panel</Button>
              </div>
            </div>
            <div className="lg:col-span-4">
              <OrbitVisual icon={svc.icon} label={`${svc.parent} method`} chips={heroChips[svc.slug] ?? heroChips[svc.parent]} />
            </div>
          </div>
        </div>
      </section>

      {/* Lead / explanation */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Overview" title={svc.lead.title} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-[1.7] text-body sm:text-[16px]">{svc.lead.body}</p>
          </div>
        </div>
      </Section>

      {/* Original method / benefit content */}
      {svc.sections.map((section, sectionIndex) => (
        <Section key={section.title} tone={sectionIndex % 2 === 0 ? "gray" : "white"}>
          <SectionHead eyebrow="What we do" title={section.title} intro={section.intro} />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.blocks.map((blk, i) => (
              <Card key={blk.title}>
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-ctl bg-tint-100 text-[13px] font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pt-1 text-[19px] font-semibold leading-snug text-primary">{blk.title}</h3>
                </div>
                {blk.desc && <p className="mt-4 text-[15px] leading-relaxed text-body">{blk.desc}</p>}
              </Card>
            ))}
          </div>
        </Section>
      ))}

      {/* Related services */}
      {related.length > 0 && (
        <Section tone="white">
          <div className="flex items-end justify-between gap-4">
            <SectionHead eyebrow="Explore more" title={`Related ${svc.parent.toLowerCase()} services`} />
            <Link to={`/services/${parentSlug}`} className="hidden shrink-0 items-center gap-1.5 text-[15px] font-semibold text-primary hover:text-secondary sm:flex">
              View all <Icon.arrow size={18} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="focus-ring rounded-card">
                <Card>
                  <div className="text-secondary">{Icon[r.icon]({ size: 28 })}</div>
                  <h3 className="mt-4 text-[18px] font-semibold text-primary">{r.eyebrow}</h3>
                  <p className="mt-2 line-clamp-2 text-[14px] text-body">{r.intro}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-secondary">
                    Learn more <Icon.arrow size={16} />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <ConsultationCall />
    </>
  );
}

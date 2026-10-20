import { Link } from "react-router";
import { Section, SectionHead, Card, Button } from "../lib/ui";
import { Icon } from "../lib/icons";

const industryCounts = [
  { name: "Technology & Software", panelLabel: "Technology & Software", count: "168,632" },
  { name: "Financial Services", panelLabel: "Financial Services", count: "70,182" },
  { name: "Healthcare & Medical", panelLabel: "Healthcare & Medical", count: "68,725" },
  { name: "Retail & Consumer Goods", panelLabel: "Retail & Consumer Goods", count: "58,142" },
  { name: "Professional & Business Services", panelLabel: "Professional & Business Services", count: "57,694" },
  { name: "Real Estate & Construction", panelLabel: "Real Estate & Construction", count: "56,301" },
  { name: "Manufacturing & Industrial", panelLabel: "Manufacturing & Industrial", count: "39,338" },
  { name: "Transportation & Logistics", panelLabel: "Transportation & Logistics", count: "35,082" },
  { name: "Utilities & Energy", panelLabel: "Utilities & Energy", count: "34,906" },
  { name: "Hospitality & Travel", panelLabel: "Hospitality & Travel", count: "24,003" },
];

export default function IndustryCounts() {
  return (
        <Section tone="tint">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Industries" title="Custom recruitment across every B2B sector." intro="We have built deep sourcing networks across 15+ industries. Click any to explore available expert counts in the panel explorer." />
            <Button to="/panel-explorer" variant="outline">Explore the panel</Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industryCounts.map((industry) => (
              <Link
                key={industry.name}
                to={`/panel-explorer?dimension=industry&industry=${encodeURIComponent(industry.panelLabel)}`}
                className="focus-ring group rounded-card"
              >
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-4"><h3 className="text-[18px] font-semibold text-primary">{industry.name}</h3><span className="text-secondary transition-transform group-hover:translate-x-1"><Icon.arrow size={18} /></span></div>
                  <p className="mt-3 text-[22px] font-extrabold text-primary">{industry.count}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
  );
}

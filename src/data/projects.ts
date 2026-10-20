export type Project = {
  id: number;
  status: "open" | "closing";
  type: string;
  industry: string;
  title: string;
  profile: string;
  /** Incentive in USD. Rate range is overridden site-wide to $75–$500 per engagement. */
  incentive: number;
  duration: string;
  format: string;
  geo: string;
  closes: string;
  spots: number;
};

// Verbatim from the approved IRG_Website_FINAL_v2.html artifact's Live Projects
// page (var LP=[...]). Real, currently-recruiting listings — not sample data.
export const projects: Project[] = [
  { id: 1, status: "closing", type: "IDI", industry: "Healthcare", title: "Senior healthcare IT decision maker study", profile: "Hospital CIO, CISO or VP IT with 5+ years in a health system. Decision-making authority over IT infrastructure or clinical systems.", incentive: 300, duration: "90 min", format: "Video call", geo: "US & UK", closes: "Aug 28, 2026", spots: 3 },
  { id: 2, status: "open", type: "Survey", industry: "Finance", title: "Financial services technology adoption survey", profile: "CFO, Head of Finance or Finance Director at firms with 200+ employees. Currently evaluating or recently adopted new financial technology.", incentive: 75, duration: "20 min", format: "Online", geo: "Global", closes: "Sep 10, 2026", spots: 40 },
  { id: 3, status: "open", type: "Focus group", industry: "Technology", title: "B2B SaaS procurement decision-making study", profile: "IT Director or VP Procurement responsible for enterprise software purchasing at organisations with $100M+ revenue.", incentive: 250, duration: "120 min", format: "Video call", geo: "North America", closes: "Sep 3, 2026", spots: 6 },
  { id: 4, status: "open", type: "IDI", industry: "Manufacturing", title: "Manufacturing operations leadership interviews", profile: "COO, VP Operations or Plant Director with 10+ years in manufacturing. P&L responsibility for a production facility.", incentive: 275, duration: "75 min", format: "Video call", geo: "US, UK & EU", closes: "Sep 15, 2026", spots: 12 },
  { id: 5, status: "open", type: "IDI", industry: "Marketing", title: "Marketing technology stack evaluation study", profile: "CMO or VP Marketing at B2B companies with $50M+ revenue. Ownership of the martech stack and budget authority.", incentive: 200, duration: "60 min", format: "Phone or video", geo: "Global", closes: "Sep 8, 2026", spots: 15 },
  { id: 6, status: "open", type: "Survey", industry: "HR", title: "HR technology and workforce planning survey", profile: "CHRO, VP HR or HR Director at companies with 500+ employees. Currently using or evaluating workforce planning technology.", incentive: 100, duration: "30 min", format: "Online", geo: "Global", closes: "Sep 20, 2026", spots: 50 },
  { id: 7, status: "closing", type: "IDI", industry: "Energy", title: "Energy sector executive leadership interviews", profile: "C-level or SVP at energy utility, oil & gas or renewable energy company. Strategic responsibility for asset management.", incentive: 300, duration: "90 min", format: "Video call", geo: "US, UK & MENA", closes: "Aug 26, 2026", spots: 2 },
  { id: 8, status: "open", type: "Bulletin board", industry: "Technology", title: "Enterprise software user experience research", profile: "IT Manager or Director responsible for deploying enterprise software tools across 100+ users.", incentive: 150, duration: "5 days async", format: "Online async", geo: "US & Canada", closes: "Sep 12, 2026", spots: 20 },
  { id: 9, status: "open", type: "Focus group", industry: "Finance", title: "Fintech product concept testing session", profile: "Head of Digital Banking, VP Innovation or Product Director at a retail bank or digital-first financial institution.", incentive: 225, duration: "90 min", format: "Video call", geo: "UK & W. Europe", closes: "Sep 5, 2026", spots: 8 },
  { id: 10, status: "open", type: "IDI", industry: "Legal", title: "Legal technology buyer journey research", profile: "General Counsel, CLO or Head of Legal Operations at a mid-to-large enterprise (500+ employees).", incentive: 250, duration: "60 min", format: "Video call", geo: "US & UK", closes: "Sep 18, 2026", spots: 10 },
];

export const studyTypeFilters = Array.from(new Set(projects.map((p) => p.type)));
export const industryFilters = Array.from(new Set(projects.map((p) => p.industry)));

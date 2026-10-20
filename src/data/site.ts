import type { IconName } from "../lib/icons";

export const LOGO_LIGHT = "https://inventiveresearchgroup.com/assets/irg_logo.png";
export const LOGO_DARK = "https://inventiveresearchgroup.com/assets/icon_white.png";
export const ESOMAR_LOGO = "https://inventiveresearchgroup.com/assets/esomar.png";
export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/inventiveresearchgroup.com";

export const nav: { label: string; to: string; mega?: boolean; children?: { label: string; to: string }[] }[] = [
  { label: "Services", to: "/services", mega: true },
  { label: "Industries", to: "/industries" },
  { label: "Panel Explorer", to: "/panel-explorer" },
  { label: "About Us", to: "/about", children: [{ label: "About IRG", to: "/about" }, { label: "Meet Our Team", to: "/team" }] },
  { label: "Blogs", to: "/blogs" },
];

export const megaMenu = [
  {
    title: "Qualitative Research Recruitment",
    to: "/services/qualitative-market-research",
    links: [
      { label: "IDI Participant Recruitment", to: "/services/in-depth-interviews" },
      { label: "Focus Group Recruitment", to: "/services/market-research-focus-groups" },
      { label: "Online Bulletin Board Recruitment", to: "/services/bulletin-boards" },
      {
        label: "MROC & Online Community Recruitment",
        to: "/services/marketing-research-online-communities-depth-interviews",
      },
    ],
  },
  {
    title: "Quantitative Research Recruitment",
    to: "/services/quantitative-market-research",
    links: [
      { label: "Online Survey Recruitment", to: "/services/online-web-survey" },
      { label: "CATI Recruitment", to: "/services/computer-assisted-telephone-interview" },
      { label: "Hybrid Study Recruitment", to: "/services/hybrid-study-recruitment" },
      { label: "Diary & Longitudinal Study Recruitment", to: "/services/diary-longitudinal-study-recruitment" },
    ],
  },
];

// Headings mirror the Panel Explorer's "Industry" breakdown (src/data/panel.ts)
// so this page's sectors match the panel's primary industry names exactly.
// "Other" is excluded here since it isn't a marketable named vertical.
export const industries: { name: string; desc: string }[] = [
  { name: "Technology & Software", desc: "We help software and technology firms analyze emerging trends, customer needs, and competitive landscapes to pace innovation and improve efficiency." },
  { name: "Financial Services", desc: "Market and economic intelligence on trends, patterns, and KPIs for positioning, risk mitigation, and growth." },
  { name: "Healthcare & Medical", desc: "Methodologies to enhance patient care, discover new treatments, and adapt to regulatory change." },
  { name: "Retail & Consumer Goods", desc: "Consumer behavior, competitive pricing, and category trends to stay ahead in fast-moving retail and consumer markets." },
  { name: "Professional & Business Services", desc: "Benchmarking, client experience, and operating-model research for firms that sell expertise and services, not products." },
  { name: "Real Estate & Construction", desc: "Demand, pricing, opportunities, and risk profiles that enhance investment and development decisions." },
  { name: "Manufacturing & Industrial", desc: "Operational optimization, quality improvement, change adoption, and innovation to sustain global competitiveness." },
  { name: "Transportation & Logistics", desc: "Supply chain insights, technology advances, and market shifts for higher-quality delivery services." },
  { name: "Utilities & Energy", desc: "Trends, policy shifts, and technologies to drive sustainable practices and growth across energy and utility markets." },
  { name: "Hospitality & Travel", desc: "Guest experience, demand patterns, and operational benchmarks to help hospitality and travel brands compete." },
];

export const homeCards: { title: string; desc: string; icon: IconName }[] = [
  { title: "Global Market Expertise", desc: "IRG connects you with market experts across 90+ countries, enabling access to region-specific trends, opportunities, and competitive insight.", icon: "globe" },
  { title: "Diverse Expert Profiles", desc: "From subject matter experts and C-suite leaders to niche analysts and regulators, our network spans every role that drives business insight.", icon: "users" },
  { title: "Localized Research Delivery", desc: "We combine qualitative and quantitative methods with deep cultural and industry knowledge to capture buyer behaviors and market expectations that truly matter for B2B growth.", icon: "pin" },
  { title: "Strategic Expansion Support", desc: "Whether expanding to North America, LATAM, Europe, MENA, or APAC, IRG helps you make informed moves with the guidance of in-region experts.", icon: "compass" },
  { title: "Diverse Market Knowledge", desc: "Our global reach allows us to target decision-makers and professionals in IT, Healthcare, Financial Services, SaaS, Hospitality, Utilities, and many more sectors.", icon: "layers" },
  { title: "Frictionless Collaboration", desc: "We simplify access to global insight. No subscriptions. No bloated processes. Just fast, tailored connections that support bold decisions.", icon: "handshake" },
];

export const contact = {
  usPhone: "+1 (774) 457-4436",
  ukPhone: "+44 746 617 2010",
  email: "hello@inventiveresearchgroup.com",
  linkedin: "https://www.linkedin.com/company/inventive-research-group",
};

export const process = [
  { n: "01", title: "Clarify Outcomes", desc: "Define decision, audience, scope, and timelines." },
  { n: "02", title: "Design Methodology", desc: "Choose qual/quant mix, sample sizes, screener & guide." },
  { n: "03", title: "Fieldwork", desc: "Recruit, schedule, moderate, and collect clean data." },
  { n: "04", title: "Synthesis", desc: "Analyze, visualize, and deliver action-oriented insights." },
];

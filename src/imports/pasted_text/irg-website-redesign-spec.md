# IRG Website Redesign — Figma Make Master Specification

Version: 1.0  
Prepared: 24 August 2026  
Website: https://inventiveresearchgroup.com/  
Design reference: https://claude.ai/public/artifacts/3fedc756-abb3-4573-a211-f3eeb5a7e466

## 1. Project objective

Redesign the complete Inventive Research Group website into a polished, credible, conversion-focused B2B research and expert-network experience.

The Claude artifact is a structural reference for hierarchy, page rhythm, trust presentation, form experience, and Panel Explorer interaction. It is not a new brand identity and must not be copied literally.

The redesign must:

- Preserve IRG's existing content and service architecture.
- Preserve IRG's original logo, Inter typeface, and exact color palette.
- Give the Homepage, Become an Expert, and Panel Explorer the most substantial redesign.
- Give every other page a light visual refresh without removing or rewriting its current content.
- Clearly separate the client/research-buyer journey from the expert/participant journey.
- Use verified data only. Never publish invented panel totals, ratings, testimonials, payment ranges, turnaround claims, or membership claims.

## 2. Non-negotiable brand lock

### Typography

Use **Inter only** across the entire website.

- No serif typefaces.
- No display fonts.
- No script fonts.
- Do not reproduce the serif styling from the Claude artifact.
- Create emphasis through Inter weight, scale, spacing, italics, and approved blue gradients.

Recommended desktop type styles:

| Token | Inter style | Size / line height |
|---|---|---:|
| Display/Hero | ExtraBold 800 | 72 / 78 px |
| H1/Internal | ExtraBold 800 | 56 / 64 px |
| H2 | ExtraBold 800 | 48 / 56 px |
| H3 | Bold 700 | 28 / 36 px |
| H4/Card | SemiBold 600 | 20 / 28 px |
| Body/Large | Regular 400 | 18 / 30 px |
| Body | Regular 400 | 16 / 26 px |
| Label | SemiBold 600 | 14 / 20 px |
| Caption | Medium 500 | 12 / 18 px |

Recommended mobile type styles:

| Token | Inter style | Size / line height |
|---|---|---:|
| Display/Hero | ExtraBold 800 | 44 / 50 px |
| H1/Internal | ExtraBold 800 | 40 / 48 px |
| H2 | Bold 700 | 34 / 42 px |
| H3 | Bold 700 | 24 / 32 px |
| Body/Large | Regular 400 | 17 / 28 px |
| Body | Regular 400 | 16 / 26 px |

### Approved colors

Only use these existing IRG colors and opacity variants derived from them:

| Token | Value | Primary use |
|---|---|---|
| Brand/Primary | `#002776` | Logo, primary headings, links, main buttons |
| Brand/Secondary | `#274CA8` | Gradient endpoint, selected states, secondary accents |
| Brand/CTA Deep | `#063086` | High-priority CTA surfaces |
| Brand/Accent | `#396EF3` | Focus rings, data highlights, sparing emphasis |
| Brand/Footer | `#0B1A3C` | Footer and dark conversion bands |
| Brand/Dark | `#0B0B33` | Dark hero/dashboard surfaces |
| Neutral/White | `#FFFFFF` | Main surface and reverse text |
| Neutral/Gray 50 | `#F9FAFB` | Alternate page sections |
| Brand/Tint 50 | `#F8FAFF` | Pale blue section surfaces |
| Brand/Tint 100 | `#E6ECFF` | Borders, selected filters, pale backgrounds |
| Neutral/Body | `#4B5563` | Body copy |

Approved gradients:

- Primary: `linear-gradient(135deg, #002776 0%, #274CA8 100%)`
- Dark: `linear-gradient(135deg, #0B0B33 0%, #002776 100%)`
- Pale: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 55%, #E6ECFF 100%)`
- Glow: use `#396EF3` at 8–18% opacity only.

Do not introduce purple, beige, gold, orange, red, green, or colors sampled from the Claude artifact. Official third-party marks such as Trustpilot or ESOMAR may retain their supplied trademark colors, but those colors must never become IRG interface colors.

### Logo

- Light-background master: `https://inventiveresearchgroup.com/assets/irg_logo.png`
- Dark-background reverse icon: `https://inventiveresearchgroup.com/assets/icon_white.png`
- Do not redraw, recolor, stretch, outline, shadow, or add gradients to the logo.
- Minimum desktop width for the horizontal logo: 118 px.
- Minimum mobile width: 104 px.
- Clear space: at least the height of the symbol's inner module on all sides.
- Use the full horizontal mark in the header. Use the supplied reverse asset in the dark footer.

## 3. Layout foundations

### Frames and grid

Create responsive frames at:

- Desktop: 1440 px wide.
- Tablet: 1024 px wide.
- Mobile: 390 px wide.

Desktop grid:

- 12 columns.
- Maximum content width: 1200 px.
- Outer margin: 120 px at 1440.
- Gutter: 24 px.

Tablet grid:

- 8 columns.
- Outer margin: 48 px.
- Gutter: 20 px.

Mobile grid:

- 4 columns.
- Outer margin: 20 px.
- Gutter: 16 px.

Use an 8 px spacing system. Preferred values: 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, and 120 px.

### Vertical rhythm

- Desktop major section padding: 112–120 px top and bottom.
- Tablet major section padding: 80–88 px.
- Mobile major section padding: 56–64 px.
- Heading-to-introduction gap: 20–24 px.
- Introduction-to-content gap: 48–56 px.
- Card internal padding: 28–32 px desktop, 22–24 px mobile.
- Standard card gap: 24 px desktop, 16 px mobile.
- Keep body lines between 55 and 75 characters where possible.

### Shape and depth

- Small control radius: 10 px.
- Input and button radius: 12 px.
- Standard card radius: 18 px.
- Feature-panel radius: 24 px.
- Pill radius: 999 px.
- Borders: 1 px using `#E6ECFF`.
- Shadows must use transparent `#002776`, never black-heavy shadows.
- Default card shadow: `0 12px 36px rgba(0,39,118,0.08)`.
- Hover shadow: `0 18px 48px rgba(0,39,118,0.14)`.

## 4. Figma file architecture

Create the following Figma pages:

1. `00 Cover & Instructions`
2. `01 Foundations`
3. `02 Components`
4. `03 Global Navigation`
5. `04 Home`
6. `05 Become an Expert`
7. `06 Panel Explorer`
8. `07 Services`
9. `08 Company Pages`
10. `09 Forms & States`
11. `10 Responsive QA`
12. `11 Prototype Flows`

For every page, create Desktop, Tablet, and Mobile frames. Use Auto Layout throughout. Name layers semantically, for example `Section/Home/Hero`, `Card/Service/Qualitative`, `Form/Expert/Step`, and `Filter/Selected`.

## 5. Core reusable components

Build component variants before page assembly:

- Header: desktop, tablet, mobile, light, dark, menu open.
- Services mega menu: closed/open, desktop/mobile accordion.
- Button: primary, secondary, outline, text, dark-surface, loading, disabled.
- Text link: default, hover, visited, external.
- Section eyebrow.
- Trust badge.
- Metric tile.
- Service card.
- Industry card.
- Process step.
- Testimonial/review card.
- Accordion/FAQ item.
- Form input, textarea, select, searchable select, checkbox, consent block.
- Multi-step progress indicator.
- Filter group, filter option, selected chip, reset action.
- Horizontal data bar.
- Empty, loading, no-results, and data-error states.
- Consultation conversion band.
- Footer.

Interaction rules:

- Buttons move 1–2 px upward on hover and deepen the approved blue shadow.
- Cards use border and shadow changes, not color changes outside the palette.
- Focus rings use 3 px `#396EF3` at approximately 30% opacity plus a solid 1 px accent.
- Motion duration: 160–240 ms for controls; 300–450 ms for page-section reveals.
- Respect reduced-motion settings. Marquees must pause on hover/focus and provide a reduced-motion static layout.

## 6. Global information architecture

### Header

Primary navigation:

- Home
- Services
- About
- Industries
- Panel Explorer

Right-side journey actions:

- Text link: Become an Expert
- Primary CTA: Send Requirements

Do not give client and expert actions identical emphasis. `Send Requirements` is the buyer primary action; `Become an Expert` is the participant pathway.

### Services mega menu

Use a two-column mega menu with clear parent categories and nested links.

**Qualitative Market Research**  
`/services/qualitative-market-research`

- In-Depth Interviews — `/services/in-depth-interviews`
- Bulletin Boards — `/services/bulletin-boards`
- Market Research Focus Groups — `/services/market-research-focus-groups`
- Marketing Research Online Communities (MROCs) — `/services/marketing-research-online-communities-depth-interviews`

**Quantitative Market Research**  
`/services/quantitative-market-research`

- Computer Assisted Telephone Interview (CATI) — `/services/computer-assisted-telephone-interview`
- Online Web Survey — `/services/online-web-survey`
- Telephone Interview Questions — `/services/telephone-interview-questions`

Add a narrow menu-side CTA card: `Not sure which method fits? Speak with our research lead.` Button: `Book a Consultation`.

### Footer

Preserve the current footer content:

- IRG identity and description: `Delivering trusted insights and connecting businesses to expert networks worldwide.`
- Quick links to main pages.
- Services links.
- Legal area with Compliance.
- Contact numbers: US `+1 (774) 457-4436`; UK `+44 746 617 2010`.
- Email: use the final client-approved address consistently.
- LinkedIn link.

Do not link Terms or Privacy to `#`. Either provide approved legal pages or show no link until content exists.

## 7. Homepage — highest priority

Route: `/`

### Page goal

Explain IRG's full value quickly: a global B2B expert network plus qualitative and quantitative research delivery. The page should feel more authoritative and useful than the Claude concept while retaining IRG's real services and content.

### Section 1 — Hero

Use a split 7/5-column composition on desktop and a stacked composition on mobile.

Left content:

- Eyebrow: `Global B2B Market Research & Expert Network`
- H1: `Expert Intelligence for Bold Business Decisions`
- Preserve current introduction: `Inventive Research Group delivers specialized B2B expertise and market insights across IT, healthcare, manufacturing, and beyond. Our research drives innovation and sharpens decision-making.`
- Primary CTA: `Send Requirements`
- Secondary CTA: `Explore Our Panel`
- Supporting microcopy below CTA: `No subscription. Tailored feasibility and research support.`

Right visual:

- A refined IRG-blue expert-network visualization inspired by the Claude composition.
- Use concentric rings, connecting lines, role nodes, and a small interface card.
- Suggested labels: `C-level`, `IT & Tech`, `Healthcare`, `Finance`, `Manufacturing`, `90+ markets`.
- Do not show an unverified total expert count.
- No stock photography is required.

### Section 2 — Proof strip

Use compact badges/metrics with only verified language:

- `90+ markets`
- `Qualitative + quantitative`
- `Vetted B2B professionals`
- `No subscription`
- Dynamic Trustpilot rating only if connected to an approved current data source.
- ESOMAR mark only with confirmed membership wording.

Do not hard-code `12,000+ experts`, `5–10 day delivery`, or `verified since 2022` until the client supplies proof.

### Section 3 — Where Expertise Meets Innovation

Preserve the current heading and introduction:

`Our Global Expert Network Spans 90+ Markets`

`At Inventive Research Group, our expert network empowers your business with global market understanding. We work with vetted professionals worldwide, from C-level executives to entry-level specialists, including researchers and analysts, to deliver localized insight that fuels confident business decisions.`

Present the six existing content cards in a balanced 3 × 2 grid:

- Global Market Expertise
- Diverse Expert Profiles
- Localized Research Delivery
- Strategic Expansion Support
- Diverse Market Knowledge
- Frictionless Collaboration

Use the current card descriptions verbatim. Add abstract line icons in approved colors only.

### Section 4 — Our Services

This existing homepage section must remain prominent.

Section introduction:

`At Inventive Research Group, we provide cutting-edge B2B market research services, combining qualitative depth with quantitative scale to help organizations decode markets, industries, and opportunities with confidence.`

Use two large parent cards followed by their method cards:

**Qualitative Market Research**

- In-Depth Interviews
- Bulletin Boards
- Market Research Focus Groups
- MROCs (Online Communities)

**Quantitative Market Research**

- CATI (Telephone Interviews)
- Online Web Survey
- Telephone Interview Questions

Each method card links to its existing service page. Preserve the current homepage descriptions verbatim. Use an asymmetric editorial grid or horizontal scroll on mobile, but maintain equal visual importance for qualitative and quantitative services.

### Section 5 — Industries

Show a compact industry matrix using the existing 12 sectors. Lead with six visible cards and provide `View all industries` for the complete set. Do not replace the industries with generic categories from the Claude prototype.

### Section 6 — How IRG works

Use the existing consultation process language:

1. Clarify Outcomes
2. Design Methodology
3. Fieldwork
4. Synthesis

Present as four connected steps on desktop and a vertical timeline on mobile. Link the final step to `Book a Consultation`.

### Section 7 — Trust and compliance

Use a dark navy feature section with:

- Heading: `Knowledge sharing, handled responsibly.`
- Short introduction based on the current Compliance page.
- Three principle cards: Risk-Avoidance First; Preventive and Ongoing Oversight; Clarity and Transparency.
- Link: `Read our compliance commitment`.

No additional certification claims may be invented.

### Section 8 — Client proof

Use verified client testimonials only. Until approved material is supplied, create clearly labeled placeholder components such as `[Approved client quote]`, `[Name]`, `[Role and company]` in the Figma file, not fictional public copy.

### Section 9 — Existing Book a Consultation

Retain the current section and wording:

- Eyebrow: `Ready to move faster with credible market insight?`
- H2: `Book a Consultation`
- Body: `Speak with our research lead to scope your objectives, whether it’s expert interviews, focus groups, or data-backed market sizing. We’ll recommend the right mix of qualitative and quantitative approaches to get you confident, fast.`
- CTA: `Schedule a Consultation`
- Microcopy: `20-minute intro. No obligation. We’ll share an approach and timeline.`

Make this the strongest conversion band on the page using the approved dark gradient.

### Section 10 — Expert pathway

Add a quieter, clearly separate band after the client consultation section:

- Heading: `Share your expertise. Get matched with relevant research.`
- CTA: `Become an IRG Expert`
- Link: `Learn how participation works`

This must not compete with the main client CTA.

## 8. Become an Expert — highest priority

Route: `/become-irg-expert`

### Page goal

Replace the sparse form-first page with a persuasive, trustworthy landing page plus a low-friction multi-step application. Use the Claude page structure as inspiration, but preserve IRG branding and existing verified participant content.

### Expert-specific header

Use a simplified header:

- IRG logo
- How It Works
- Types of Studies
- Payments
- FAQ
- `For Clients` text link back to the main website
- `Apply Now` primary CTA

Do not emphasize the general Contact page in this conversion flow.

### Section 1 — Expert hero

- Eyebrow: `IRG Expert Network`
- H1: `Get Paid for Your Expertise — Safely and Transparently`
- Body: `Participate in paid interviews, surveys, and advisory sessions. Our platform ensures a smooth process and timely payments for every contribution you make.`
- Primary CTA: `Apply to Join`
- Secondary CTA: `See How It Works`
- Trust notes: `Strict data confidentiality`; `No sales or spam`; `Matched to relevant studies`.

Do not publish `$75–$300`, a fixed invitation frequency, or a fixed payment timeline unless the client confirms those claims in writing.

### Section 2 — Participant review marquee

Create a horizontal marquee of participant Trustpilot feedback cards.

Each card contains:

- Star/rating display using the official Trustpilot embed or supplied approved asset.
- A short, verified review excerpt.
- First name and last initial only unless fuller attribution is approved.
- Review date.
- `Verified review` only when supported by Trustpilot data.

Rules:

- Pull live/current review content at implementation time or paste client-approved excerpts.
- Do not invent reviewers or paraphrase a real review as a direct quote.
- Pause the marquee on hover or keyboard focus.
- Use a static two-column list when reduced motion is enabled.
- Third-party brand colors stay inside the official Trustpilot widget; all surrounding UI remains IRG blue/white.

### Section 3 — Why Experts Trust Us

Preserve the existing points:

- Work with global research firms / Fortune 500 clients.
- Strict data confidentiality.
- No sales or spam — research only.
- Guaranteed and timely payments.

Keep the current guarantee language only after operations confirms it applies to every successfully completed, compliant study.

### Section 4 — How It Works

Use three large process cards with current copy:

1. `Get invited` — Receive personalized invitations based on your expertise.
2. `Qualify through screening` — A brief check to ensure the study is a perfect match.
3. `Participate and get paid` — Complete the study and receive payment according to the confirmed project terms.

Use a connected progress line on desktop and a vertical flow on mobile.

### Section 5 — Types of Studies

Display cards for the existing research formats:

- In-Depth Interviews
- Online Surveys
- Focus Groups
- Online Bulletin Boards
- MROCs / Online Communities
- Telephone Interviews

Each card should explain typical format and time commitment only when approved source copy is available.

### Section 6 — Privacy and compliance

Preserve `Privacy & No Sales` and current language that studies are strictly for research purposes. Link to the Compliance page. Do not imply that a privacy-policy page exists until approved legal content is published.

### Section 7 — Application form

Keep the current eight required questions, but present them in the cleaner Claude-style step experience:

1. Full name — text — placeholder `e.g., Jane Doe`
2. Email — email — placeholder `e.g., jane@company.com`
3. Phone number with country code — telephone — placeholder `+1 (123) 4567 789`
4. Country of residence — searchable country field — placeholder `e.g., United States`
5. Employment status — select: Employed full-time; Employed part-time; Self-employed/Consultant; Between roles; Student; Other
6. Industries worked in — multi-value text/search — placeholder `e.g., Market Research, FinTech`
7. Current/last job title — text — placeholder `e.g., Senior Analyst`
8. LinkedIn profile URL — URL — placeholder `https://www.linkedin.com/in/username`

Form layout:

- Desktop: 5/7 split. Left sticky reassurance panel; right form card.
- Mobile: form first after a compact reassurance summary.
- Persistent `Step X of 8`, progress bar, Back, and Next.
- Save progress locally where technically feasible.
- Validate after blur and on Next, not while the user is typing.
- Keep entered values when navigating Back.
- Final screen includes consent, compliance acknowledgement, CAPTCHA, and a clear Submit button.
- Do not pre-check marketing or consent checkboxes.
- Success screen explains what happens next without promising an invitation.

### Section 8 — Frequently Asked Questions

Preserve the current FAQ topics and answers:

- Is this legit?
- When will I get paid?
- Will I be sold something?
- How do you find me?

Add new FAQ items only after the client supplies approved answers.

### Section 9 — Final expert CTA

- Heading: `Interested in participating in future studies?`
- Body: `Join our expert network today and start getting rewarded for your professional insights.`
- CTA: `Apply to Become an Expert`

## 9. Join & Get Paid — supporting expert page

Route: `/join-and-get-paid`

Keep this as an overview page rather than deleting it. Preserve all current sections and copy, lightly redesign them using the same expert-page components:

- Hero
- Why Experts Trust Us
- Guaranteed & Timely Payments
- How It Works
- Types of Studies
- Privacy & No Sales
- Current FAQ
- CTA to `/become-irg-expert`

Avoid duplicating the complete application form here. The primary CTA should lead to the canonical Become an Expert page.

## 10. Panel Explorer — highest priority

Route: `/panel-explorer`

### Page goal

Turn the current chip lists into a credible interactive research-feasibility dashboard. Preserve the existing filters and displayed counts until the client supplies an authoritative dataset. The Claude artifact informs the dashboard concept, but IRG branding and better information density must be used.

### Intro

- Eyebrow: `Explore the IRG network`
- H1: `Expert Panel Explorer`
- Body: `Filter our expert panel by industry, job function, seniority, geography, and company size to review available pool sizes before submitting a brief.`
- Supporting note: `Counts reflect IRG panel targets across 90+ markets.`

### Dashboard layout

Desktop:

- 1200 px container.
- Sticky left filter rail: 300–320 px.
- Main results area: remaining width.
- Top summary bar contains selected filters, reset, live available-pool result, and `Request feasibility check` CTA.
- Results tabs: Industry, Job Function, Seniority, Geography, Company Size.
- Main visualization: horizontal bars with count and percentage.
- Secondary panel: `What this count means`, data freshness, overlap note, and feasibility guidance.

Mobile:

- Summary card first.
- `Filters` opens a full-height bottom sheet.
- Tabs scroll horizontally.
- Bars remain readable without horizontal page scrolling.
- Sticky bottom CTA: `Request feasibility check`.

### Current data to preserve pending validation

Industry:

- Healthcare — 9,800
- Finance — 21,500
- Technology — 43,000
- Manufacturing — 29,000
- Consumer goods — 23,239
- Professional services — 19,000
- Energy — 7,500
- Education — 6,900
- Legal — 1,900
- Real estate — 4,500

Job function:

- C-suite — 3,670
- IT & tech — 29,000
- Finance — 21,000
- Operations — 32,700
- Marketing — 19,800
- Sales — 21,980
- HR & people — 11,500
- Research — 9,800
- Legal — 1,340
- Procurement — 7,900

Seniority:

- C-level — 3,670
- VP / SVP — 22,000
- Director — 31,000
- Senior manager — 35,000
- Manager — 35,000

Geography:

- North America — 51,000
- Western Europe — 28,000
- UK — 14,000
- APAC — 11,000
- MENA — 7,800
- LATAM — 7,400

Company size:

- Enterprise (5k+) — 11,000
- Mid-market — 32,995
- SMB (50–500) — 45,980
- Small (<50) — 39,890

### Data behavior and guardrails

- Treat categories as potentially overlapping. Never add them together to create a total.
- The selected-filter result must come from a real calculation/API, not from summed labels.
- Use `[LIVE VERIFIED TOTAL]` in Figma until the data owner confirms the source.
- Show last-updated metadata when a reliable backend exists.
- Explain whether counts are exact records, estimated availability, or reachable targets.
- Loading state: skeleton summary and bars.
- Empty state: explain that the combination is highly specific and offer a feasibility request.
- Error state: preserve selected filters and offer retry/contact.
- Share state: allow a query-string URL only at implementation stage after privacy review.

### Feasibility conversion band

Preserve:

- Heading: `Ready to start a project?`
- Action: `Request feasibility check`
- Promise: `Confirm feasibility within 24 hours` only if operations confirms it as a service-level commitment.

Pass selected filters into the consultation form automatically at implementation time.

## 11. Service pages — preserve copy, improve presentation

All service pages use the same reusable template:

1. Breadcrumb.
2. Compact internal hero with existing H1 and opening paragraph.
3. Intro/explanation block using current copy verbatim.
4. Method, benefit, or process cards using current headings and descriptions.
5. Optional related-services row.
6. Existing `A Consultation Call` conversion band.
7. Global footer.

Do not rewrite or shorten the current page copy without client approval.

### Qualitative Market Research

Route: `/services/qualitative-market-research`

Preserve these content groups:

- Understand the “How” and “Why”
- Research Methods We Use: In-Depth Interviews (IDIs); Focus Groups; Online Forums & Boards; Observation & Ethnography; Case Studies; Pattern Discovery (Grounded Theory)
- How IRG Delivers Impact: Define; Recruit; Moderate; Synthesize
- What You’ll Walk Away With: Message & Positioning; Buyer & User Narratives; Opportunity Map; Go-to-Market Clarity
- Common Questions
- A Consultation Call

### In-Depth Interviews

Route: `/services/in-depth-interviews`

Preserve:

- What IDIs Deliver
- Benefits of Conducting In-Depth Interviews
- Observing the Unsaid As Well As the Said
- Small Sample, Rich Content
- Deeper Understanding of Participants
- Quality of Findings
- How IRG Runs In-Depth Interviews: Design; Recruit; Moderate; Synthesize
- A Consultation Call

### Online Bulletin Boards

Route: `/services/bulletin-boards`

Preserve:

- What is an Online Bulletin Board?
- Leveraging Online Research Bulletin Boards
- Access to a Wealth of Information
- Gathering Diverse Perspectives
- Sharing and Learning from Others
- Discovering New Resources
- A Consultation Call

### Market Research Focus Groups

Route: `/services/market-research-focus-groups`

Preserve:

- Why Focus Groups?
- The Importance of Focus Groups
- Rich Qualitative Data
- Group Dynamics and Synergy
- Engage Clients for More Credibility
- Explaining Complex Processes
- A Consultation Call

### Marketing Research Online Communities (MROCs)

Route: `/services/marketing-research-online-communities-depth-interviews`

Preserve:

- What are MROCs?
- Setting Up and Managing MROCs
- Needs Assessment
- Platform Selection
- Community Setup
- Recruitment & Onboarding
- Content Management
- Community Moderation
- A Consultation Call

### Quantitative Market Research

Route: `/services/quantitative-market-research`

Preserve:

- Structured, Reliable, Scalable
- Characteristics of Quantitative Research
- Structured Data Collection
- Large Sample Sizes
- Objectivity
- Replicability
- The Importance of Quantitative Market Research
- Data-Driven Insights
- Market Segmentation
- Product Development & Innovation
- Competitive Analysis
- A Consultation Call

### Computer Assisted Telephone Interview (CATI)

Route: `/services/computer-assisted-telephone-interview`

Preserve:

- What is CATI?
- CATI Project Management
- Project Planning
- Questionnaire Design
- Recruitment & Training
- Data Collection
- Data Analysis
- A Consultation Call

### Online Web Surveys

Route: `/services/online-web-survey`

Preserve:

- What is an Online Web Survey?
- Designing Effective Online Web Surveys
- Implementing Online Web Surveys: Best Practices
- Choosing the Right Tool
- Targeting the Right Audience
- Optimizing for Mobile
- Keeping it Short & Simple
- Personalizing Invitations
- Testing Before Launch
- A Consultation Call

### Telephone Interview Questions

Route: `/services/telephone-interview-questions`

Preserve:

- Telephone Interviews, Done Right
- Essential Skills for Telephone Interviewers
- Communication Skills
- Active Listening
- Questioning Techniques
- Time Management
- Computer Skills (CATI)
- Adaptability
- A Consultation Call

## 12. Company and support pages

### About

Route: `/about`

Light refresh only. Preserve:

- Hero: `Data-driven insights. Human-powered strategy.`
- Existing introduction.
- Core Values: Speed; Value; Collaboration; Transparency.
- A Consultation Call.

Use a compact editorial hero, a 2 × 2 values grid, and one abstract IRG network graphic.

### Industries

Route: `/industries`

Preserve all 12 industries and current descriptions:

- Technology & AI
- Healthcare & Life Sciences
- Financial Services
- Marketing & Advertising
- Food & Beverage
- Manufacturing Excellence
- Automotive Innovation
- Energy & Industrials
- Real Estate
- Transportation & Logistics
- National & Provincial Government
- Department of Trade & Industry (DTI)

Use a searchable/filterable card grid only if it does not hide content or require unsupported categorization. Default design is a clean 3-column grid with 24 px gaps.

### Consultation

Route: `/consultation`

Preserve:

- `Check feasibility & costing`
- Calendar booking and QR option
- Why consult IRG?: Expert Access; Right Method, Right Time; Fast Turnarounds; Decision-Grade Outputs
- Our approach: Clarify Outcomes; Design Methodology; Fieldwork; Synthesis
- Current four FAQs

Desktop layout: 5/7 split with a sticky scheduling panel and explanatory content. Mobile: explanation first, booking CTA immediately after hero, then details.

### Compliance

Route: `/compliances`

Preserve the full current copy and these sections:

- Inventive Research Group, Compliance Commitment
- Why Compliance Matters in Market Research
- Our Compliance Framework
- Safeguards for Experts
- Safeguards for Clients
- A Living Framework

Preserve all current safeguards, including identity/expertise checks, conflict checks, terms of participation, training, employer protections, activity transparency, customizable controls, and the Employer Preference Registry.

Use a restrained, document-like layout with a sticky section index on desktop. Do not add badges or certifications that are not already verified.

### Contact

Route: `/contact`

Preserve:

- `Let’s Work Together`
- Current inquiry form and inquiry types.
- Offices in London, UAE, and Lahore.
- Current phone and email details after contact-data reconciliation.

Use a 5/7 split: contact details and offices on the left, form on the right. On mobile, form appears after the introduction and before office cards.

### Careers

Route: `/careers`

Preserve:

- `Build Your Career at IRG`
- Why Join Inventive Research Group?
- Inclusive Culture; Growth & Learning; Flexibility
- How You’ll Work With Us: Impact; Collaboration; Ownership; Excellence
- Existing application instruction to email a resume.

Do not invent open positions. If no roles exist, clearly show a general-interest application state.

## 13. Content preservation rules

- Existing page copy is the source of truth unless this specification supplies a precise replacement.
- Correct obvious punctuation/spacing issues only; do not alter meaning.
- Keep US/UK spelling consistent within a page.
- Do not invent customer logos, company names, respondent photos, reviewer identities, or case-study outcomes.
- Do not claim all participants receive invitations; communicate matching and eligibility.
- Do not imply panel category counts are mutually exclusive.
- Keep client and participant compliance language distinct.
- Use `IRG` after the first full `Inventive Research Group` mention on a page.
- Every CTA must describe the next action clearly.

## 14. Accessibility and responsive requirements

- Target WCAG 2.2 AA.
- Body text contrast must meet 4.5:1; large text and essential UI must meet applicable contrast requirements.
- Minimum interactive target: 44 × 44 px.
- Visible keyboard focus on every interactive element.
- Mega menu and accordions must be keyboard accessible and close with Escape.
- Never rely on color alone for selected filters or errors.
- Inputs require persistent labels; placeholders are examples, not labels.
- Errors must identify the field and the correction needed.
- Charts require text equivalents and exact displayed values.
- Marquee content must pause and have a reduced-motion alternative.
- Decorative network graphics should be hidden from assistive technology.
- Mobile order must follow reading priority, not merely desktop visual position.

## 15. Prototype flows

Build these clickable prototype flows:

### Client conversion

Home → Services mega menu → Qualitative Market Research → In-Depth Interviews → Book a Consultation.

### Panel exploration

Home → Panel Explorer → select Industry + Seniority + Geography → review updated breakdown → Request feasibility check → Consultation with filters prefilled.

### Expert conversion

Home → Become an Expert → How It Works → participant reviews → Apply Now → complete steps 1–8 → consent/CAPTCHA state → success state.

### Mobile navigation

Home → open menu → expand Services → select a nested service → return → open expert pathway.

## 16. Required states for handoff

For every interactive component, include:

- Default
- Hover
- Focus
- Active/pressed
- Disabled
- Loading where applicable
- Error where applicable
- Success where applicable

For Panel Explorer, include:

- No filters
- One filter selected
- Multiple filters selected
- No results
- Loading
- Data unavailable

For the expert form, include:

- Empty
- Filled
- Validation error
- Back-navigation with retained value
- Final consent
- CAPTCHA placeholder
- Submission loading
- Success

## 17. Data and approval checklist before launch

The following items require client confirmation:

- Authoritative total expert count.
- Source and update frequency for every Panel Explorer count.
- Whether category counts represent records, reachable participants, or estimates.
- Whether `Confirm feasibility within 24 hours` is guaranteed.
- Whether `5–10 business days` is the universal payment timeframe.
- Any participant incentive range.
- Current Trustpilot rating, review count, approved excerpts, and embed method.
- Exact ESOMAR membership status and approved wording.
- Rights to every testimonial, client logo, photo, and third-party badge.
- Canonical contact email; the current site uses inconsistent addresses.
- Terms and Privacy page content and final links.
- Final form consent copy and retention/privacy requirements.

## 18. Figma Make master instruction

Use this specification as the source of truth. Create a complete responsive website design system and all listed screens for Inventive Research Group. Preserve existing website content and route structure. Use Inter only. Use only the approved IRG colors, gradients made from those colors, and the supplied original logo assets. Do not use serif typography or borrow colors from the Claude artifact. Apply the Claude reference only to composition, information hierarchy, conversion flow, card systems, dashboard interaction, and form experience.

Give the Homepage, Become an Expert, and Panel Explorer the highest design fidelity and prototype depth. Keep the existing Our Services and Book a Consultation sections on the Homepage. Build Become an Expert as a rich landing page with verified Trustpilot participant feedback in a pauseable marquee and the existing eight-step application. Build Panel Explorer as a responsive dashboard using the current five filter dimensions and validated data only. Apply a lighter spacing, hierarchy, and component refresh to all other pages without deleting or rewriting their content.

Do not generate unverified statistics, testimonials, certification claims, payment ranges, turnaround guarantees, or legal copy. Use clearly labeled placeholders wherever approval is pending. Create Desktop, Tablet, and Mobile frames, reusable Auto Layout components, interaction states, accessibility annotations, and the three primary prototype flows.

## 19. Definition of done

The design is ready for client review when:

- Every route in this document has responsive frames.
- Inter is the only type family in the file.
- No unapproved color exists in styles, fills, strokes, shadows, or gradients.
- The original logo assets are used without modification.
- Homepage, Become an Expert, and Panel Explorer have complete desktop/mobile layouts and clickable flows.
- All service submenu pages and current content groups are represented.
- Every uncertain claim is visibly marked for approval, not presented as fact.
- Spacing and typography use shared tokens.
- Components include all required interaction states.
- Accessibility and responsive annotations are complete.
- The prototype can demonstrate both client and expert journeys without confusion.

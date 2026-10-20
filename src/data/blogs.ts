export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; by: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  author: { name: string; role: string };
  excerpt: string;
  takeaways: string[];
  body: Block[];
};

const author = { name: "IRG Research Team", role: "Inventive Research Group" };

export const posts: Post[] = [
  {
    slug: "recruit-c-suite-executives-for-interviews",
    title: "How to recruit C-suite executives for in-depth interviews",
    category: "Qualitative",
    date: "Sep 18, 2026",
    read: "6 min",
    author,
    excerpt: "Senior decision-makers are time-poor and heavily gatekept. Here's how we screen, schedule, and keep them engaged.",
    takeaways: [
      "Lead with relevance and a clear time ask, not an incentive.",
      "Verify seniority independently; titles alone are unreliable.",
      "Offer short, flexible windows and confirm twice.",
    ],
    body: [
      { type: "p", text: "C-suite executives are the hardest audience in B2B research. Their calendars are managed by others, their inboxes are saturated, and they have little patience for generic outreach. Yet their perspective is often the one that matters most for strategy, pricing, and market-entry decisions." },
      { type: "h2", text: "Why executives decline" },
      { type: "list", items: ["The invitation reads like a survey, not a conversation between peers.", "The time commitment is unclear or too long.", "There is no obvious reason why they, specifically, were chosen.", "Assistants filter anything that looks like a sales or panel message."] },
      { type: "h2", text: "A recruitment approach that works" },
      { type: "steps", items: [
        { title: "Define the profile tightly", text: "Specify function, company size, and decision authority. A narrow profile signals a considered study." },
        { title: "Source through multiple channels", text: "Combine our expert network with targeted outreach and referrals from existing participants." },
        { title: "Verify before you invite", text: "Confirm role and tenure through independent sources, then screen by phone for relevance." },
        { title: "Respect the calendar", text: "Offer 30 to 45 minute slots, early or late in the day, and work through assistants when needed." },
      ] },
      { type: "callout", title: "Incentives are not the lever", text: "For senior audiences, honoraria rarely drive participation. A relevant topic, a respectful ask, and the option to donate the fee to charity perform better than a higher payment." },
      { type: "h2", text: "Keeping them engaged through fieldwork" },
      { type: "p", text: "Send a short briefing note in advance, confirm 24 hours before, and have a backup moderator ready. Executives rarely reschedule twice, so the first slot has to count." },
      { type: "quote", text: "The best response rates come from invitations that sound like they were written for one person.", by: "IRG recruitment lead" },
    ],
  },
  {
    slug: "avoiding-professional-survey-takers-b2b",
    title: "Avoiding professional survey takers in B2B quant studies",
    category: "Quantitative",
    date: "Sep 4, 2026",
    read: "5 min",
    author,
    excerpt: "Verification layers, trap questions, and panel hygiene practices that protect your data quality.",
    takeaways: [
      "Fraud shows up in the screener first; design it to catch fraud.",
      "Combine identity verification with behavioural checks.",
      "Clean panels continuously, not just before a study.",
    ],
    body: [
      { type: "p", text: "In B2B studies, a small share of fraudulent or inattentive respondents can distort results badly, because the target sample is already small. Every bad complete matters." },
      { type: "h2", text: "Where bad data comes from" },
      { type: "list", items: ["Respondents who claim a profile to qualify for higher incentives.", "Duplicate accounts and shared panel logins.", "Automated or scripted completes.", "Speeders who skim through the questionnaire."] },
      { type: "h2", text: "Layers of defence" },
      { type: "steps", items: [
        { title: "Verify identity and role", text: "Match respondents to professional profiles and company data before they reach the survey." },
        { title: "Design a smart screener", text: "Avoid obvious qualifying answers. Use knowledge checks that only a real practitioner can answer." },
        { title: "Add in-survey checks", text: "Use trap questions, consistency checks, and open-text review alongside time-based flags." },
        { title: "Review after fieldwork", text: "Remove flagged completes and feed the findings back into the panel." },
      ] },
      { type: "callout", title: "Open-text is your best detector", text: "Copy-pasted, generic, or off-topic open-ended answers are the fastest signal that a complete should be removed." },
      { type: "p", text: "None of these steps is enough alone. Quality comes from stacking several light checks so that no single weakness lets a bad respondent through." },
    ],
  },
  {
    slug: "focus-groups-vs-idis",
    title: "Focus groups vs. IDIs: choosing the right qualitative method",
    category: "Qualitative",
    date: "Aug 21, 2026",
    read: "7 min",
    author,
    excerpt: "A practical guide to matching methodology with your research objectives, audience, and budget.",
    takeaways: [
      "Use IDIs for sensitive topics and senior or competing audiences.",
      "Use focus groups when group dynamics and reactions are the insight.",
      "Budget and timeline matter, but objectives should decide first.",
    ],
    body: [
      { type: "p", text: "Both methods deliver rich qualitative insight, but they answer different questions. Choosing the wrong one costs time and can hide the very thing you are trying to learn." },
      { type: "h2", text: "When to choose in-depth interviews" },
      { type: "list", items: ["The topic is sensitive, confidential, or commercially competitive.", "Participants are senior or hard to schedule together.", "You need to explore individual decision journeys in detail.", "Participants would influence each other in a group."] },
      { type: "h2", text: "When to choose focus groups" },
      { type: "list", items: ["You want to observe how opinions form and shift in discussion.", "You are testing concepts, messaging, or creative.", "You need many perspectives quickly.", "The audience is consumer-like or peer-comfortable."] },
      { type: "callout", title: "A quick rule of thumb", text: "If the insight is what one person thinks, run IDIs. If it is how people think together, run groups." },
      { type: "h2", text: "Budget and timeline" },
      { type: "p", text: "Groups are often cheaper per participant but harder to recruit for niche B2B profiles. IDIs cost more per head yet are easier to schedule. For specialist audiences, IDIs frequently turn out faster overall." },
    ],
  },
  {
    slug: "healthcare-expert-recruitment-compliance",
    title: "Healthcare expert recruitment: compliance essentials",
    category: "Industry",
    date: "Aug 7, 2026",
    read: "8 min",
    author,
    excerpt: "HCP recruitment comes with strict rules. What research teams need to know before fieldwork starts.",
    takeaways: [
      "Document consent, purpose, and data handling for every HCP.",
      "Apply fair market value to honoraria and keep records.",
      "Know adverse event reporting duties before fieldwork.",
    ],
    body: [
      { type: "p", text: "Healthcare professionals are among the most regulated research audiences. Recruiting them without a compliance plan puts both the study and your organisation at risk." },
      { type: "h2", text: "What to settle before fieldwork" },
      { type: "steps", items: [
        { title: "Consent and purpose", text: "Tell participants who the research is for, how data will be used, and that participation is voluntary." },
        { title: "Fair market value", text: "Set honoraria based on time and seniority, and keep the calculation on file." },
        { title: "Sponsor transparency", text: "Disclose or blind the sponsor according to the study design and local rules." },
        { title: "Adverse event handling", text: "Brief moderators and recruiters on what to report and how, if a participant mentions a safety event." },
      ] },
      { type: "callout", title: "Local rules differ", text: "Requirements vary by country and specialty. Confirm local codes and privacy law for every market in scope." },
      { type: "h2", text: "Data protection" },
      { type: "p", text: "Collect only what the study needs, store it securely, and agree retention and deletion periods up front. Our compliance process covers each of these steps." },
    ],
  },
  {
    slug: "feasible-sample-plans-niche-b2b",
    title: "Building feasible sample plans for niche B2B audiences",
    category: "Quantitative",
    date: "Jul 24, 2026",
    read: "6 min",
    author,
    excerpt: "How to estimate incidence, set quotas, and avoid surprises when targeting hard-to-reach professionals.",
    takeaways: [
      "Estimate incidence from real panel data, not assumptions.",
      "Prioritise quotas; every extra cell multiplies difficulty.",
      "Agree fallback options before fieldwork begins.",
    ],
    body: [
      { type: "p", text: "A sample plan that looks good on paper can fall apart in fieldwork when the audience is small. Feasibility work up front prevents delays and budget overruns." },
      { type: "h2", text: "Start with incidence" },
      { type: "p", text: "Incidence is the share of contacted people who qualify. For niche audiences it can be a fraction of a percent, so small errors in the estimate turn into large cost and timeline gaps." },
      { type: "h2", text: "Planning steps" },
      { type: "steps", items: [
        { title: "Define the qualifying profile", text: "List must-have and nice-to-have criteria so you know where flexibility exists." },
        { title: "Size the universe", text: "Use panel counts and external data to estimate how many qualified professionals exist." },
        { title: "Set realistic quotas", text: "Limit cells to those that drive decisions. Each extra quota slows the study." },
        { title: "Plan fallbacks", text: "Agree what happens if incidence is lower than expected: widen criteria, extend field, or reduce sample." },
      ] },
      { type: "callout", title: "Fewer cells, better data", text: "Overlapping quotas on country, role, and company size can make completes nearly impossible. Keep only those you will analyse." },
    ],
  },
  {
    slug: "inside-our-expert-verification-process",
    title: "Inside our expert verification process",
    category: "Inside IRG",
    date: "Jul 10, 2026",
    read: "4 min",
    author,
    excerpt: "From LinkedIn validation to phone screening: the steps every expert goes through before joining a study.",
    takeaways: [
      "Every expert is verified before joining a study.",
      "Automated checks and human review work together.",
      "Verification continues after onboarding.",
    ],
    body: [
      { type: "p", text: "Our network of 700k+ experts is only valuable if each person is who they say they are. Here is how verification works at IRG." },
      { type: "h2", text: "The verification journey" },
      { type: "steps", items: [
        { title: "Profile validation", text: "We match the expert's role, company, and tenure against professional profiles and public sources." },
        { title: "Duplicate and identity checks", text: "Automated checks flag duplicate accounts, mismatched details, and suspicious patterns." },
        { title: "Phone screening", text: "A trained recruiter speaks with the expert to confirm experience and relevance for the specific project." },
        { title: "Ongoing review", text: "Feedback from moderators and clients feeds back into each expert's record." },
      ] },
      { type: "quote", text: "Technology finds the red flags; people confirm the real thing.", by: "IRG quality team" },
      { type: "p", text: "The result is a network that clients can rely on, and experts who know their time is respected." },
    ],
  },
];

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug);
export const postSlugs = posts.map((p) => p.slug);

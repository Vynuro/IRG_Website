import type { IconName } from "../lib/icons";

export type ServiceBlock = { title: string; desc: string };
export type ServiceSection = { title: string; intro?: string; blocks: ServiceBlock[] };
export type Service = {
  slug: string;
  parent: "Qualitative" | "Quantitative";
  eyebrow: string;
  h1: string;
  intro: string;
  lead: { title: string; body: string };
  sections: ServiceSection[];
  icon: IconName;
};

const b = (title: string, desc: string): ServiceBlock => ({ title, desc });

export const services: Service[] = [
  {
    slug: "qualitative-market-research",
    parent: "Qualitative",
    eyebrow: "Qualitative Research Recruitment",
    h1: "Qualitative Research Recruitment",
    intro: "We recruit senior professionals for qualitative studies: one-on-one interviews, focus groups, and online communities that need the right voices, not just available ones.",
    lead: {
      title: "Understand the “How” and “Why”",
      body: "Qualitative market research is one of the most effective ways to uncover the motivations, perceptions, and decision drivers behind business choices. If you’re asking how industry professionals view a solution or why organizations adopt one approach over another, qualitative research surfaces the insights you need to shape strategies that resonate. At IRG, we connect businesses with vetted subject matter experts and decision-makers for tailored B2B qualitative programs, translating behavior, sentiment, and context into clear, actionable guidance for product, sales, and marketing teams.",
    },
    sections: [
      {
        title: "Research Methods We Use",
        intro: "We tailor every approach to help you uncover the why behind business decisions. Our methods are guided by industry veterans and powered by our expert network.",
        blocks: [
          b("In‑Depth Interviews (IDIs)", "One-on-one conversations that dig into motivations, perceptions, and what really drives decisions."),
          b("Focus Groups", "Interactive group discussions that surface consensus, disagreements, and the language people actually use."),
          b("Online Forums & Boards", "Asynchronous discussions over days or weeks that show how opinions and priorities evolve."),
          b("Observation & Ethnography", "Real-world research to uncover workarounds, unmet needs, and how people truly behave in context."),
          b("Case Studies", "Deep dives into use cases and outcomes that reveal stories and insights influencing stakeholders."),
          b("Pattern Discovery (Grounded Theory)", "Spotting patterns in qualitative data to build fresh insights for new products or categories."),
        ],
      },
      {
        title: "How IRG Delivers Impact",
        blocks: [
          b("Define", "Co-design objectives, hypotheses, and audience segments. Translate into a lean discussion guide."),
          b("Recruit", "Source and verify senior participants through our expert network; handle screening and scheduling."),
          b("Moderate", "Senior moderators run sessions, probe deeply, and capture verbatims across text, audio, or video."),
          b("Synthesize", "Turn raw input into themes, frameworks, and strategic recommendations stakeholders can act on."),
        ],
      },
    ],
    icon: "qualitative",
  },
  {
    slug: "in-depth-interviews",
    parent: "Qualitative",
    eyebrow: "IDI Participant Recruitment",
    h1: "IDI Participant Recruitment",
    intro: "We source and screen senior decision-makers for one-on-one interviews, matched precisely to your discussion guide criteria and screened for genuine relevance.",
    lead: {
      title: "What IDIs Deliver",
      body: "In-depth interviews are a cornerstone qualitative method for collecting comprehensive accounts of B2B professionals’ behavior, perceptions, and attitudes. Conducted with one expert at a time, our senior moderators use conversational probing to extract rich detail whether sessions are face-to-face, online, or by phone.",
    },
    sections: [
      {
        title: "Benefits of Conducting In‑Depth Interviews",
        blocks: [
          b("Observing the Unsaid As Well As the Said", "Build comfort to discuss sensitive topics and observe non-verbal cues body language, tone, and pauses across in-person, phone, or online sessions."),
          b("Small Sample, Rich Content", "One-on-one conversations encourage openness and yield higher fidelity insights than many broad methods."),
          b("Deeper Understanding of Participants", "Probe follow-ups, track shifts in language and tone, and uncover motivations to inform better product and GTM decisions."),
          b("Quality of Findings", "Open ended questions, direct engagement, and expert moderation generate high quality material that can be quantified and themed."),
        ],
      },
      {
        title: "How IRG Runs In‑Depth Interviews",
        blocks: [
          b("Design", "Align objectives and craft a lean discussion guide for depth and flow."),
          b("Recruit", "Source, screen, and schedule senior B2B experts via our network."),
          b("Moderate", "Experienced moderators probe deeply and capture verbatims."),
          b("Synthesize", "Code themes and produce actionable recommendations."),
        ],
      },
    ],
    icon: "interview",
  },
  {
    slug: "bulletin-boards",
    parent: "Qualitative",
    eyebrow: "Online Bulletin Board Recruitment",
    h1: "Online Bulletin Board Recruitment",
    intro: "We recruit engaged B2B professionals for asynchronous online discussion boards, pre-screened for relevance, commitment, and quality of contribution.",
    lead: {
      title: "What is an Online Bulletin Board?",
      body: "An online bulletin board (OBB) is a virtual qualitative research method where participants join at their convenience to complete tasks, read posts, and share comments. You can think of it as a digital focus group, an ongoing forum where ideas are exchanged over time, offering both depth and flexibility.",
    },
    sections: [{
      title: "Leveraging Online Research Bulletin Boards",
      blocks: [
        b("Access to a Wealth of Information", "Gain exposure to a wide range of knowledge and perspectives from diverse B2B experts, accelerating understanding."),
        b("Gathering Diverse Perspectives", "Tap into insights from experts across industries, ensuring a fair and balanced view of research questions."),
        b("Sharing and Learning from Others", "Leverage community knowledge share queries, get feedback, and learn from peer experiences."),
        b("Discovering New Resources", "Experts often share relevant articles, studies, and tools that save clients time and deliver actionable intelligence."),
      ],
    }],
    icon: "bulletin",
  },
  {
    slug: "market-research-focus-groups",
    parent: "Qualitative",
    eyebrow: "Focus Group Recruitment",
    h1: "Focus Group Recruitment",
    intro: "We recruit matched professionals for group sessions, carefully balancing seniority, sector, and perspective so every voice in the room adds distinct value.",
    lead: {
      title: "Why Focus Groups?",
      body: "A focus group brings together 6-10 experts who share their experiences, opinions, and perspectives with guidance from a skilled moderator. This approach is especially valuable for exploring new ideas, testing concepts, and observing the social dynamics that shape opinions.",
    },
    sections: [{
      title: "The Importance of Focus Groups",
      blocks: [
        b("Rich Qualitative Data", "Focus groups generate deeper and more diverse responses than one-to-one interviews, providing a realistic view of beliefs, behaviors, and demands."),
        b("Group Dynamics and Synergy", "Participants spark ideas off each other, challenge assumptions, and co-create insights that no single interview would uncover."),
        b("Engage Clients for More Credibility", "Clients can observe live, whether in-person or online. They can even influence discussion flow through the moderator, ensuring alignment with goals."),
        b("Explaining Complex Processes", "Focus groups are especially valuable when exploring new products or explaining complex B2B processes in context."),
      ],
    }],
    icon: "focusGroup",
  },
  {
    slug: "marketing-research-online-communities-depth-interviews",
    parent: "Qualitative",
    eyebrow: "MROC & Online Community Recruitment",
    h1: "MROC & Online Community Recruitment",
    intro: "We build and recruit dedicated professional communities for longitudinal research and co-creation programmes that require sustained expert engagement over time.",
    lead: {
      title: "What are MROCs?",
      body: "Market Research Online Communities (MROCs) are research platforms where participants engage in ongoing discussions and activities over an extended period. Unlike short-term methods such as focus groups or bulletin boards, MROCs stay active for weeks, months, or even years, allowing for multiple objectives and continuous qualitative insights.",
    },
    sections: [{
      title: "Setting Up and Managing MROCs",
      blocks: [
        b("Needs Assessment", "We collaborate with clients to define goals, participants, and expected outcomes."),
        b("Platform Selection", "Assist in evaluating and choosing the right platform with scalability and customization."),
        b("Community Setup", "Handle technical setup, user-friendly design, and engaging layouts."),
        b("Recruitment & Onboarding", "Recruit relevant B2B experts, decision-makers, and stakeholders from our network."),
        b("Content Management", "Ensure timely postings of topics, issues, and questions to engage participants."),
        b("Community Moderation", "Provide moderation services to maintain a productive environment."),
      ],
    }],
    icon: "community",
  },
  {
    slug: "quantitative-market-research",
    parent: "Quantitative",
    eyebrow: "Quantitative Research Recruitment",
    h1: "Quantitative Research Recruitment",
    intro: "We recruit verified B2B professionals at scale for quantitative studies: pre-screened, targeted samples that give your data the statistical integrity it needs.",
    lead: {
      title: "Structured, Reliable, Scalable",
      body: "Quantitative research gathers data through surveys, polls, or questionnaires from a large, targeted sample. The responses are analyzed with statistical methods to uncover patterns, correlations, and insights into business decision-making and market dynamics.",
    },
    sections: [
      {
        title: "Characteristics of Quantitative Research",
        intro: "Our quantitative research programs provide the clarity clients need to make well-founded, data-driven decisions that strengthen strategies, refine offerings, and drive growth.",
        blocks: [
          b("Structured Data Collection", "Surveys, polls, and questionnaires gather measurable, objective data for clear analysis."),
          b("Large Sample Sizes", "Ensures statistical significance by representing broader populations with confidence."),
          b("Objectivity", "Unbiased, numerical data removes subjectivity and supports evidence-based decisions."),
          b("Replicability", "Standardized methods allow outcomes to be verified and validated across time and studies."),
        ],
      },
      {
        title: "The Importance of Quantitative Market Research",
        blocks: [
          b("Data-Driven Insights", "Move beyond assumptions by using hard numbers to understand market dynamics, buyer behaviors, and decision-maker preferences."),
          b("Market Segmentation", "Segment markets by demographics, geography, and behavior to design precise strategies."),
          b("Product Development & Innovation", "Identify gaps and opportunities to design new products or refine existing offerings."),
          b("Competitive Analysis", "Benchmark against competitors on satisfaction, pricing, market share, and KPIs to sharpen strategy."),
        ],
      },
    ],
    icon: "analytics",
  },
  {
    slug: "computer-assisted-telephone-interview",
    parent: "Quantitative",
    eyebrow: "CATI Recruitment",
    h1: "CATI Recruitment",
    intro: "We recruit pre-screened B2B professionals for structured telephone interviews, verified against your exact targeting criteria for reliable, representative data collection.",
    lead: {
      title: "What is CATI?",
      body: "Computer Assisted Telephone Interviewing (CATI) is a methodology where interviews are conducted by telephone while the interviewer follows a computer-displayed script. This ensures structured, unbiased flow of questions, real-time entry of responses, and higher data accuracy than traditional surveys.",
    },
    sections: [{
      title: "CATI Project Management",
      blocks: [
        b("Project Planning", "We define objectives, scope, target audience, and sampling methodology, building a clear project timeline with clients."),
        b("Questionnaire Design", "Collaborating with clients, we design clear and unbiased questionnaires that achieve all research objectives."),
        b("Recruitment & Training", "Our network recruits and trains skilled B2B interviewers, monitoring performance and providing feedback for quality."),
        b("Data Collection", "CATI software ensures real-time data entry. Progress is monitored live and validated with quality checks."),
        b("Data Analysis", "After cleaning and preparing data, we apply statistical tools and software to extract insights and trends."),
      ],
    }],
    icon: "cati",
  },
  {
    slug: "online-web-survey",
    parent: "Quantitative",
    eyebrow: "Online Survey Recruitment",
    h1: "Online Survey Recruitment",
    intro: "We source targeted B2B respondents for web-based surveys, screened to spec before a single response is collected. No professional survey takers, no panel fatigue.",
    lead: {
      title: "What is an Online Web Survey?",
      body: "Online web surveys are one of the most renowned data collection processes in quantitative research. They are flexible, cost-effective, and distributed across email, social media, and web platforms. At IRG, we keep surveys short and concise (15 minutes or less) to maximize response rates from B2B professionals.",
    },
    sections: [
      {
        title: "Designing Effective Online Web Surveys",
        blocks: [
          b("Who should be asked those questions?", "Target the visitor segments most likely to give useful, representative answers."),
          b("Where on the website to extract answers?", "Placement on high-intent pages so responses stay timely and relevant."),
          b("What type of survey to run?", "Pop-up, widget, and other suitable formats."),
        ],
      },
      {
        title: "Implementing Online Web Surveys: Best Practices",
        blocks: [
          b("Choosing the Right Tool", "Select reputable platforms like SurveyMonkey, Typeform, or Qualtrics for functionality, security, and ease of use."),
          b("Targeting the Right Audience", "Define and reach the correct B2B demographics through targeted invitations."),
          b("Optimizing for Mobile", "Ensure surveys are mobile-friendly with responsive layouts."),
          b("Keeping it Short & Simple", "Limit survey length to 15 minutes or less. Keep language clear and jargon-free."),
          b("Personalizing Invitations", "Use personalized invites with names and context for higher response rates."),
          b("Testing Before Launch", "Run tests to ensure clarity, accuracy, and browser compatibility before going live."),
        ],
      },
    ],
    icon: "survey",
  },
  {
    slug: "hybrid-study-recruitment",
    parent: "Quantitative",
    eyebrow: "Hybrid Study Recruitment",
    h1: "Hybrid Study Recruitment",
    intro: "We recruit participants for mixed-methodology programmes combining telephone, online, and in-person components, managing consistency across every touchpoint.",
    lead: {
      title: "One Sample, Every Touchpoint",
      body: "Hybrid studies ask more of a sample than any single method does. The same professional may need to complete an online screener, join a telephone interview, and attend an in-person session weeks apart \u2014 and the research only holds together if it is the same person at every stage. Most providers recruit each phase separately and accept the drop-off. IRG recruits the whole programme as one brief, screening every participant against the full commitment before confirming them, so your data stays consistent from first touchpoint to last.",
    },
    sections: [
      {
        title: "How We Recruit Hybrid Programmes",
        intro: "Every participant is individually sourced and screened against the complete study arc \u2014 not just the first phase.",
        blocks: [
          b("Full-Programme Screening", "We screen for the entire commitment up front \u2014 every phase, format, and date \u2014 so nobody is confirmed who cannot see the study through."),
          b("Single Point of Contact", "One IRG recruiter owns your programme end to end, holding the same participant relationships across telephone, online, and in-person phases."),
          b("Consistency Across Phases", "The same verified professionals carry through each stage, so responses can be compared across methods without sample drift."),
          b("Scheduling & Logistics", "We coordinate availability across time zones and formats, confirming each phase in advance and reconfirming ahead of every session."),
          b("Attrition Management", "Drop-outs are replaced with participants matched to the original screening criteria, and we stay on call for the full duration of fieldwork."),
        ],
      },
      {
        title: "Why Clients Choose IRG for Hybrid Studies",
        blocks: [
          b("Active Practitioners Only", "Every participant is working in their field today \u2014 not a professional respondent or paid consultant."),
          b("Human-Verified", "Each participant is reviewed by an IRG team member against your exact criteria before confirmation. No automated matching."),
          b("No Infeasible Briefs", "We take multi-phase programmes other providers mark as too complex. If the audience exists and can be reached, we recruit it."),
          b("Feasibility in 24 Hours", "Send the full study arc and we confirm what is deliverable \u2014 across every phase \u2014 within one business day."),
        ],
      },
    ],
    icon: "layers",
  },
  {
    slug: "diary-longitudinal-study-recruitment",
    parent: "Quantitative",
    eyebrow: "Diary & Longitudinal Study Recruitment",
    h1: "Diary & Longitudinal Study Recruitment",
    intro: "We recruit committed B2B professionals for multi-session diary studies, tracking behaviour and decision-making over time with verified, consistent participants throughout.",
    lead: {
      title: "Research That Depends on People Staying",
      body: "A longitudinal study is only as good as its retention. Lose a third of the sample by week six and the trend you set out to measure disappears with them. Recruiting for these programmes is therefore less about filling a quota on day one and more about confirming people who will still be contributing on the final entry. IRG screens for commitment as rigorously as for professional criteria, and stays in contact with participants throughout, so the sample you finish with reflects the one you started with.",
    },
    sections: [
      {
        title: "How We Recruit Longitudinal Programmes",
        intro: "We screen for commitment alongside seniority and sector, then support participants across the full study period.",
        blocks: [
          b("Screening for Commitment", "Participants confirm the full duration, entry cadence, and time per session before they are accepted onto a study."),
          b("Verified Professional Criteria", "Seniority, industry, and decision-making authority are checked by an IRG team member \u2014 the same standard as every other IRG brief."),
          b("Retention Support", "We stay in contact across the study period, sending reminders and resolving issues before they become drop-outs."),
          b("Structured Replacements", "Where attrition does occur, replacements are matched to the original screening criteria so the sample composition holds."),
          b("Incentive Management", "Multi-session incentives are agreed up front and paid on completion, in 90+ markets via PayPal or bank transfer."),
        ],
      },
      {
        title: "Why Clients Choose IRG for Diary Studies",
        blocks: [
          b("Individually Recruited", "Participants are sourced specifically for your study, not pulled from a list \u2014 which is why they stay engaged."),
          b("Consistent Sample Throughout", "The same verified professionals contribute from first entry to last, so behaviour can be tracked over time with confidence."),
          b("Global Reach", "700k+ verified B2B experts across 90+ markets and 15+ industries, at every seniority level from manager to C-suite."),
          b("ESOMAR Verified", "IRG is a verified ESOMAR member and fully GDPR compliant. Participant data is protected for the full study duration."),
        ],
      },
    ],
    icon: "clock",
  },
  {
    slug: "telephone-interview-questions",
    parent: "Quantitative",
    eyebrow: "Telephone Interview Questions",
    h1: "Telephone Interview Questions",
    intro: "Structured scripts, effective probing, and CATI-enabled capture ensure every call delivers reliable B2B insights without friction.",
    lead: {
      title: "Telephone Interviews, Done Right",
      body: "Telephone interviews follow the same principles as other research interviews but are conducted over the phone to efficiently reach targeted B2B experts. We focus on precise script delivery, strong data quality, expert management, and effective objection handling. We design clear, error-free questionnaires with the right mix of closed- and open-ended questions, while enabling progress tracking and ensuring timely delivery once fieldwork is complete.",
    },
    sections: [{
      title: "Essential Skills for Telephone Interviewers",
      blocks: [
        b("Communication Skills", "Clear verbal delivery, active articulation of questions, and ability to convey information smoothly."),
        b("Active Listening", "Listen for nuance, avoid interruptions, and maintain an error-free, effective environment for respondents."),
        b("Questioning Techniques", "Use closed-ended for specifics and open-ended for depth; probe effectively to elicit high-value responses."),
        b("Time Management", "Stay on schedule, prioritize key items, and transition smoothly across topics without drifting."),
        b("Computer Skills (CATI)", "Operate CATI tools to navigate scripts, enter data live, and handle call logs accurately."),
        b("Adaptability", "Handle objections, unexpected events, and changes in direction while preserving rapport and data quality."),
      ],
    }],
    icon: "phoneScript",
  },
];

export const serviceSlugs = services.map((service) => service.slug);
export const getService = (slug: string) => services.find((service) => service.slug === slug);

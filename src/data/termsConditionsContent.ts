import type { LegalSection } from "../components/LegalDocument";

export const termsConditionsSections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    blocks: [
      {
        kind: "p",
        text: "These Terms & Conditions (“Terms”) govern your use of the Inventive Research Group website and, where applicable, your interaction with Inventive Research Group in connection with research projects, participant recruitment and related services.",
      },
      {
        kind: "p",
        text: "Inventive Research Group Ltd (“IRG”, “Inventive Research Group”, “we”, “us” or “our”) is a company incorporated in England and Wales under company number 14942073, with its registered office at:",
      },
      {
        kind: "address",
        lines: [
          "4th Floor, Silverstream House",
          "45 Fitzroy Street",
          "London, England",
          "W1T 6EB",
          "United Kingdom",
        ],
      },
      {
        kind: "p",
        text: "By using our website or agreeing to participate in an IRG research opportunity, you agree to these Terms to the extent applicable to your interaction with us.",
      },
      {
        kind: "p",
        text: "Certain projects or client engagements may also be governed by separate agreements, confidentiality terms, consent forms, statements of work or project-specific conditions.",
      },
      {
        kind: "p",
        text: "Where a separate written agreement conflicts with these Terms, the separate written agreement will normally take precedence in relation to that specific service or project.",
      },
    ],
  },
  {
    id: "about-irg",
    title: "1. About Inventive Research Group",
    blocks: [
      {
        kind: "p",
        text: "Inventive Research Group provides market research recruitment, research fieldwork, professional sourcing and related services to organisations worldwide.",
      },
      { kind: "p", text: "Our activities may include:" },
      {
        kind: "ul",
        items: [
          "in-depth interviews;",
          "focus groups;",
          "quantitative surveys;",
          "telephone interviews;",
          "online communities;",
          "bulletin boards;",
          "expert consultations;",
          "B2B participant recruitment;",
          "healthcare professional recruitment;",
          "research panels; and",
          "related market and opinion research activities.",
        ],
      },
      {
        kind: "p",
        text: "IRG may act as a research supplier, recruitment partner, fieldwork provider or intermediary between research participants and the organisation commissioning the research.",
      },
    ],
  },
  {
    id: "website-use",
    title: "2. Website Use",
    blocks: [
      { kind: "p", text: "You may use the IRG website only for lawful purposes." },
      { kind: "p", text: "You must not:" },
      {
        kind: "ul",
        items: [
          "use the website in violation of any applicable law;",
          "attempt to gain unauthorised access to our systems;",
          "introduce malware or malicious code;",
          "interfere with website security or availability;",
          "impersonate another person or organisation;",
          "submit deliberately false information;",
          "reproduce substantial website content without permission;",
          "scrape or systematically extract proprietary information where prohibited by law or these Terms; or",
          "use IRG intellectual property in a misleading or unauthorised manner.",
        ],
      },
      { kind: "p", text: "We may restrict or block access where we reasonably believe the website is being misused." },
    ],
  },
  {
    id: "research-invitations",
    title: "3. Research Invitations",
    blocks: [
      {
        kind: "p",
        text: "Receiving an invitation from IRG does not guarantee that you will qualify for or be selected for a research project.",
      },
      { kind: "p", text: "Research projects frequently have specific criteria established by our clients." },
      { kind: "p", text: "Eligibility may depend on factors such as:" },
      {
        kind: "ul",
        items: [
          "current or previous employment;",
          "industry;",
          "professional responsibility;",
          "seniority;",
          "company size;",
          "geography;",
          "product usage;",
          "purchasing authority;",
          "professional qualifications; or",
          "other project-specific requirements.",
        ],
      },
      {
        kind: "p",
        text: "IRG or its client may determine that a potential participant does not meet the required criteria at any stage of the recruitment process.",
      },
      {
        kind: "p",
        text: "Completing a screener does not by itself create an entitlement to participate or receive an incentive unless expressly stated otherwise.",
      },
    ],
  },
  {
    id: "voluntary-participation",
    title: "4. Voluntary Participation",
    blocks: [
      { kind: "p", text: "Participation in research is voluntary." },
      { kind: "p", text: "You may decline an invitation if:" },
      {
        kind: "ul",
        items: [
          "you are uncomfortable with the topic;",
          "you do not believe you meet the eligibility requirements;",
          "you have a conflict of interest;",
          "participation would breach an obligation to your employer or another organisation;",
          "you cannot discuss the subject without revealing confidential information; or",
          "you simply do not wish to participate.",
        ],
      },
      {
        kind: "p",
        text: "IRG supports responsible and ethical research participation and expects participants to stop or decline participation where they believe continuing would violate a legal, contractual, professional or ethical obligation.",
      },
    ],
  },
  {
    id: "accuracy-of-information",
    title: "5. Accuracy of Information",
    blocks: [
      {
        kind: "p",
        text: "You are responsible for ensuring that information you provide to IRG is accurate, current and not misleading.",
      },
      { kind: "p", text: "This includes information concerning:" },
      {
        kind: "ul",
        items: [
          "your identity;",
          "employment;",
          "previous employment;",
          "job title;",
          "professional responsibilities;",
          "qualifications;",
          "experience;",
          "employer size or characteristics;",
          "decision-making authority;",
          "product usage;",
          "industry knowledge; and",
          "screening responses.",
        ],
      },
      { kind: "p", text: "IRG and its clients rely on this information when determining research eligibility." },
      {
        kind: "p",
        text: "We reserve the right to verify reasonable aspects of a participant's professional background through legitimate sources.",
      },
      { kind: "p", text: "Providing deliberately false, misleading or materially incomplete information may result in:" },
      {
        kind: "ul",
        items: [
          "disqualification from a project;",
          "cancellation of participation;",
          "withholding of an incentive where legally permitted;",
          "removal from future research opportunities; or",
          "investigation for suspected fraud.",
        ],
      },
    ],
  },
  {
    id: "professional-employer-obligations",
    title: "6. Professional and Employer Obligations",
    blocks: [
      {
        kind: "p",
        text: "Before participating in a research project, you are responsible for ensuring that your participation is permitted under any obligations that apply to you.",
      },
      { kind: "p", text: "These may include:" },
      {
        kind: "ul",
        items: [
          "employment agreements;",
          "confidentiality agreements;",
          "non-disclosure agreements;",
          "professional codes;",
          "regulatory obligations;",
          "fiduciary duties;",
          "consultancy restrictions; and",
          "employer policies concerning outside activities.",
        ],
      },
      { kind: "p", text: "You must not participate in a project where doing so would cause you to breach such an obligation." },
      {
        kind: "p",
        text: "IRG may restrict participation in projects relating directly to a participant's current employer or another organisation where a conflict, confidentiality concern or compliance risk exists.",
      },
    ],
  },
  {
    id: "information-must-not-disclose",
    title: "7. Information You Must Not Disclose",
    blocks: [
      { kind: "p", text: "Research participants must not disclose information that they are not lawfully entitled to share." },
      { kind: "p", text: "This includes, without limitation:" },
      {
        kind: "ul",
        items: [
          "trade secrets;",
          "confidential employer information;",
          "confidential customer or supplier information;",
          "material non-public information;",
          "non-public financial results;",
          "confidential pricing or commercial strategy;",
          "protected intellectual property;",
          "confidential government information;",
          "confidential clinical-trial information;",
          "personally identifiable patient information;",
          "information subject to a non-disclosure agreement; or",
          "information whose disclosure would violate applicable law or professional obligations.",
        ],
      },
      {
        kind: "p",
        text: "If a question during research would require you to disclose restricted information, you should decline to answer that question.",
      },
      { kind: "p", text: "If necessary, you should stop the interview and inform the IRG project team." },
    ],
  },
  {
    id: "confidentiality-of-projects",
    title: "8. Confidentiality of Research Projects",
    blocks: [
      { kind: "p", text: "Information relating to an IRG research project may itself be confidential." },
      {
        kind: "p",
        text: "Unless IRG or the client expressly permits disclosure, you must not publicly disclose confidential information learned through a research project, including where applicable:",
      },
      {
        kind: "ul",
        items: [
          "the client's identity;",
          "project materials;",
          "research questions;",
          "concepts or products shown during research;",
          "screenshots;",
          "prototypes;",
          "research methodology;",
          "non-public commercial information;",
          "information shared by other research participants; or",
          "other information identified as confidential.",
        ],
      },
      {
        kind: "p",
        text: "You must not publish confidential project information on social media, professional networks, websites or other public platforms.",
      },
      { kind: "p", text: "Additional confidentiality agreements may apply to individual projects." },
    ],
  },
  {
    id: "research-quality-conduct",
    title: "9. Research Quality and Participant Conduct",
    blocks: [
      { kind: "p", text: "Participants must engage honestly and professionally." },
      { kind: "p", text: "You agree not to:" },
      {
        kind: "ul",
        items: [
          "intentionally provide false research responses;",
          "misrepresent your identity or experience;",
          "participate multiple times in the same study using different identities;",
          "use another person's professional credentials;",
          "share screener answers with others to help them qualify;",
          "allow another person to participate on your behalf;",
          "use automated tools to complete research where not permitted;",
          "record confidential research sessions without permission; or",
          "otherwise attempt to manipulate research results or eligibility.",
        ],
      },
      { kind: "p", text: "IRG may implement reasonable quality-control and fraud-prevention procedures." },
    ],
  },
  {
    id: "scheduling-attendance",
    title: "10. Scheduling and Attendance",
    blocks: [
      {
        kind: "p",
        text: "If selected for an interview, focus group or other scheduled research activity, you are expected to make reasonable efforts to attend at the agreed time.",
      },
      { kind: "p", text: "If you need to cancel or reschedule, you should notify IRG as soon as reasonably possible." },
      { kind: "p", text: "Repeated no-shows or last-minute cancellations may affect eligibility for future projects." },
      { kind: "p", text: "Research schedules may also change due to circumstances outside IRG's control, including:" },
      {
        kind: "ul",
        items: [
          "client scheduling changes;",
          "moderator availability;",
          "changes in research requirements;",
          "participant quotas being filled;",
          "technology problems; or",
          "project cancellation.",
        ],
      },
      { kind: "p", text: "We will make reasonable efforts to communicate material scheduling changes." },
    ],
  },
  {
    id: "incentives-payments",
    title: "11. Research Incentives and Payments",
    blocks: [
      { kind: "p", text: "Certain research projects provide a financial incentive or honorarium for eligible participants." },
      {
        kind: "p",
        text: "Where an incentive applies, the amount and relevant conditions will normally be communicated before participation.",
      },
      { kind: "p", text: "Unless otherwise stated:" },
      {
        kind: "ul",
        items: [
          "screening alone is not compensated;",
          "an invitation does not create an entitlement to payment;",
          "payment is generally associated with valid participation in the relevant research activity;",
          "completion may be subject to reasonable quality and eligibility verification; and",
          "payment will be processed using the payment method or procedure communicated for the project.",
        ],
      },
      { kind: "p", text: "IRG may reasonably investigate or withhold payment where there is evidence of:" },
      {
        kind: "ul",
        items: [
          "deliberate misrepresentation;",
          "fraudulent participation;",
          "duplicate participation;",
          "impersonation;",
          "failure to complete the agreed research activity;",
          "manipulation of research responses; or",
          "a serious breach of applicable project requirements.",
        ],
      },
      { kind: "p", text: "Any decision to withhold payment will be based on the particular circumstances and applicable law." },
      {
        kind: "p",
        text: "Payment timelines may vary depending on the project, client confirmation, payment provider, banking system and participant location.",
      },
      { kind: "p", text: "Where possible, expected payment timing will be communicated to participants." },
      {
        kind: "p",
        text: "Participants are responsible for any personal tax obligations associated with research incentives unless applicable law requires IRG to make a deduction or report the payment.",
      },
      { kind: "p", text: "Participants are not employees of IRG merely because they receive an incentive for research participation." },
    ],
  },
  {
    id: "client-changes-cancellation",
    title: "12. Client Changes and Project Cancellation",
    blocks: [
      { kind: "p", text: "Research projects are commissioned by independent organisations, and project requirements may change." },
      { kind: "p", text: "A client may:" },
      {
        kind: "ul",
        items: [
          "modify eligibility requirements;",
          "close a quota;",
          "change the interview schedule;",
          "reduce the required number of participants;",
          "place recruitment on hold; or",
          "cancel a study.",
        ],
      },
      { kind: "p", text: "IRG will make reasonable efforts to notify affected participants." },
      {
        kind: "p",
        text: "Unless otherwise specifically agreed, an incentive is not automatically payable merely because a participant was screened, shortlisted or scheduled but the research session did not ultimately take place.",
      },
      {
        kind: "p",
        text: "Where a cancellation occurs after substantial participant commitment, IRG may apply a project-specific cancellation or partial-payment arrangement where one has been agreed with the client.",
      },
    ],
  },
  {
    id: "recordings-transcripts",
    title: "13. Recordings and Transcripts",
    blocks: [
      { kind: "p", text: "Some research sessions may be audio recorded, video recorded, observed or transcribed." },
      { kind: "p", text: "Where applicable, this will be disclosed to participants before the relevant activity." },
      { kind: "p", text: "Recordings and transcripts may be accessible to:" },
      {
        kind: "ul",
        items: [
          "IRG;",
          "the research client;",
          "moderators;",
          "authorised research personnel; and",
          "contracted technology or transcription providers.",
        ],
      },
      { kind: "p", text: "The applicable project notice will determine whether recordings are identifiable and how they may be used." },
      {
        kind: "p",
        text: "You should not participate in a recorded research session if you do not agree to the disclosed recording arrangements.",
      },
    ],
  },
  {
    id: "research-contributions",
    title: "14. Your Research Contributions",
    blocks: [
      { kind: "p", text: "Research participants retain ownership of pre-existing intellectual property that they lawfully own." },
      {
        kind: "p",
        text: "By voluntarily providing research responses, comments or opinions, you permit IRG and the relevant research client to use those contributions for legitimate research, analysis and reporting purposes in accordance with the project information and our Privacy Policy.",
      },
      { kind: "p", text: "Research outputs may include:" },
      {
        kind: "ul",
        items: [
          "summaries;",
          "anonymised quotations;",
          "aggregated findings;",
          "transcripts;",
          "research reports;",
          "statistical analysis; or",
          "other research deliverables.",
        ],
      },
      { kind: "p", text: "IRG will not intentionally represent participant statements misleadingly." },
      {
        kind: "p",
        text: "Where identifiable quotations, recordings, images or other personally identifiable research content will be used beyond what would reasonably be expected from the project, additional notice or permission will be obtained where required.",
      },
    ],
  },
  {
    id: "healthcare-regulated-research",
    title: "15. Healthcare and Regulated Research",
    blocks: [
      { kind: "p", text: "Certain IRG projects may involve healthcare professionals or other regulated professionals." },
      { kind: "p", text: "Participants remain responsible for complying with their professional and legal duties." },
      {
        kind: "p",
        text: "Healthcare professionals must not disclose identifiable patient information or other protected information that they are not authorised to disclose.",
      },
      {
        kind: "p",
        text: "Some healthcare or pharmaceutical research projects may also involve regulatory obligations regarding product-safety information or adverse events. Where applicable, participants may receive additional project-specific information explaining those requirements.",
      },
      {
        kind: "p",
        text: "Nothing provided through an IRG research study should be treated as medical, legal, financial, investment or other regulated professional advice from IRG.",
      },
    ],
  },
  {
    id: "client-relationships",
    title: "16. Client Relationships",
    blocks: [
      { kind: "p", text: "Organisations purchasing services from IRG may be subject to separate:" },
      {
        kind: "ul",
        items: [
          "proposals;",
          "purchase orders;",
          "statements of work;",
          "master service agreements;",
          "data processing agreements;",
          "non-disclosure agreements; or",
          "project-specific contracts.",
        ],
      },
      { kind: "p", text: "Those agreements govern the relevant commercial engagement." },
      {
        kind: "p",
        text: "Information displayed on the IRG website concerning capabilities, coverage, feasibility, sample availability or timelines is general information and does not constitute a guarantee that a particular research audience can be recruited.",
      },
      {
        kind: "p",
        text: "Project feasibility is dependent on the final eligibility criteria, incidence, market conditions, participant availability, client response times and other project-specific factors.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "17. Intellectual Property",
    blocks: [
      { kind: "p", text: "Unless otherwise stated, the IRG website and its original content, including:" },
      {
        kind: "ul",
        items: [
          "branding;",
          "text;",
          "graphics;",
          "logos;",
          "website design;",
          "research materials developed by IRG; and",
          "other proprietary materials",
        ],
      },
      {
        kind: "p",
        text: "are owned by or licensed to Inventive Research Group and are protected by applicable intellectual-property laws.",
      },
      { kind: "p", text: "You may view and use our website for legitimate personal or business purposes." },
      {
        kind: "p",
        text: "You may not reproduce, republish, commercially exploit or falsely represent IRG content as your own without appropriate permission.",
      },
    ],
  },
  {
    id: "third-party-platforms",
    title: "18. Third-Party Platforms and Links",
    blocks: [
      { kind: "p", text: "IRG may use third-party platforms to support:" },
      {
        kind: "ul",
        items: [
          "video interviews;",
          "scheduling;",
          "surveys;",
          "payments;",
          "file sharing;",
          "research communities; and",
          "other research activities.",
        ],
      },
      { kind: "p", text: "Your use of an independent third-party platform may also be subject to that provider's terms and privacy practices." },
      {
        kind: "p",
        text: "IRG is not responsible for the availability or independent conduct of third-party services outside our reasonable control.",
      },
    ],
  },
  {
    id: "website-information",
    title: "19. Website Information",
    blocks: [
      { kind: "p", text: "We seek to keep information on our website accurate and current." },
      { kind: "p", text: "However, website content is provided for general information and may be changed without notice." },
      { kind: "p", text: "We do not warrant that:" },
      {
        kind: "ul",
        items: [
          "every page will always be available;",
          "website information will always be error-free;",
          "every advertised service will be available in every market; or",
          "any particular research opportunity will remain open.",
        ],
      },
      { kind: "p", text: "Nothing on the website constitutes legal, financial, medical, investment or other professional advice." },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "20. Limitation of Liability",
    blocks: [
      {
        kind: "p",
        text: "Nothing in these Terms excludes or limits liability where doing so would be unlawful, including liability that cannot legally be excluded for fraud, fraudulent misrepresentation or other matters protected by mandatory law.",
      },
      {
        kind: "p",
        text: "To the maximum extent permitted by applicable law, IRG will not be responsible for indirect, incidental, special or consequential losses resulting solely from use of the website or circumstances outside our reasonable control.",
      },
      { kind: "p", text: "Nothing in this section limits any rights that cannot lawfully be waived." },
      {
        kind: "p",
        text: "Where a client has entered into a separate written agreement with IRG, liability relating to that engagement will be governed by the relevant agreement.",
      },
    ],
  },
  {
    id: "privacy",
    title: "21. Privacy",
    blocks: [
      { kind: "p", text: "Our collection and use of personal information is governed by our Privacy Policy." },
      {
        kind: "p",
        text: "Participants should review the Privacy Policy together with any project-specific privacy, consent or recording information.",
      },
    ],
  },
  {
    id: "suspension-removal",
    title: "22. Suspension or Removal",
    blocks: [
      {
        kind: "p",
        text: "IRG may suspend or discontinue someone's participation in current or future research where reasonably necessary due to:",
      },
      {
        kind: "ul",
        items: [
          "fraud;",
          "serious misrepresentation;",
          "research-quality concerns;",
          "confidentiality breaches;",
          "abusive or threatening behaviour;",
          "repeated duplicate participation;",
          "security concerns;",
          "violation of these Terms; or",
          "legal or compliance requirements.",
        ],
      },
      {
        kind: "p",
        text: "Where appropriate, we may maintain limited records necessary to prevent repeated abuse or fraudulent participation.",
      },
    ],
  },
  {
    id: "changes-to-terms",
    title: "23. Changes to These Terms",
    blocks: [
      { kind: "p", text: "We may update these Terms from time to time to reflect changes in:" },
      {
        kind: "ul",
        items: ["our services;", "research practices;", "technology;", "industry standards;", "legal requirements; or", "regulatory guidance."],
      },
      { kind: "p", text: "The most recent version will be published on our website together with the date it was last updated." },
      {
        kind: "p",
        text: "Material changes affecting an existing contractual relationship will be handled in accordance with applicable law and any separate agreement.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "24. Governing Law",
    blocks: [
      {
        kind: "p",
        text: "These Terms and any dispute arising from general use of the IRG website are governed by the laws of England and Wales, except where mandatory laws in another jurisdiction provide rights that cannot legally be excluded.",
      },
      {
        kind: "p",
        text: "The courts of England and Wales will have jurisdiction over disputes relating to these Terms, subject to any mandatory rights or alternative dispute provisions that apply.",
      },
      { kind: "p", text: "Separate client contracts may specify different dispute-resolution arrangements." },
    ],
  },
  {
    id: "severability",
    title: "25. Severability",
    blocks: [
      {
        kind: "p",
        text: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in effect to the fullest extent permitted by law.",
      },
    ],
  },
  {
    id: "no-waiver",
    title: "26. No Waiver",
    blocks: [
      {
        kind: "p",
        text: "Failure by IRG to enforce a provision of these Terms on one occasion does not constitute a waiver of that provision or prevent us from enforcing it later.",
      },
    ],
  },
  {
    id: "contact",
    title: "27. Contact",
    blocks: [
      { kind: "p", text: "For questions regarding these Terms, research participation or IRG services, contact:" },
      {
        kind: "address",
        lines: [
          "Inventive Research Group Ltd",
          "4th Floor, Silverstream House",
          "45 Fitzroy Street",
          "London, England",
          "W1T 6EB",
          "United Kingdom",
        ],
      },
      { kind: "p", text: "Company Number: 14942073" },
      { kind: "p", text: "Email: hello@inventiveresearchgroup.com" },
    ],
  },
];

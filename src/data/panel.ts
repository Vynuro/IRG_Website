export type Dim = {
  key: string;
  label: string;
  note: string;
  options: { label: string; count: number }[];
};

export const panelData: Dim[] = [
  {
    key: "hcp",
    label: "HCP Speciality",
    note: "Specialty area for healthcare-practitioner experts.",
    options: [
      { label: "General practitioners", count: 4172 },
      { label: "Oncologists", count: 1461 },
      { label: "Haematologists", count: 775 },
      { label: "Cardiologists", count: 1163 },
      { label: "Hospital administrators", count: 2757 },
      { label: "Pharmacists", count: 1073 },
      { label: "Nurses & NPs", count: 1461 },
      { label: "Radiologists", count: 626 },
      { label: "Surgeons", count: 954 },
      { label: "Psychiatrists", count: 567 },
    ],
  },
  {
    key: "industry",
    label: "Industry",
    note: "Primary sector in which the expert works.",
    options: [
      { label: "Technology & Software", count: 168632 },
      { label: "Other", count: 99830 },
      { label: "Financial Services", count: 70182 },
      { label: "Healthcare & Medical", count: 68725 },
      { label: "Retail & Consumer Goods", count: 58142 },
      { label: "Professional & Business Services", count: 57694 },
      { label: "Real Estate & Construction", count: 56301 },
      { label: "Manufacturing & Industrial", count: 39338 },
      { label: "Transportation & Logistics", count: 35082 },
      { label: "Utilities & Energy", count: 34906 },
      { label: "Hospitality & Travel", count: 24003 },
    ],
  },
  {
    key: "function",
    label: "Job Function",
    note: "The expert’s primary functional area.",
    options: [
      { label: "Other", count: 220839 },
      { label: "Technology & Engineering", count: 151762 },
      { label: "Executive & General Management", count: 90713 },
      { label: "Operations", count: 83821 },
      { label: "Sales & Business Development", count: 59824 },
      { label: "Marketing", count: 41512 },
      { label: "Finance & Accounting", count: 32708 },
      { label: "Product", count: 10638 },
      { label: "Human Resources", count: 10499 },
      { label: "Legal & Compliance", count: 6874 },
      { label: "Customer Success & Support", count: 3645 },
    ],
  },
  {
    key: "seniority",
    label: "Seniority",
    note: "Level of responsibility within the organisation.",
    options: [
      { label: "C-Level & Founder", count: 178311 },
      { label: "VP", count: 15650 },
      { label: "Director", count: 159637 },
      { label: "Manager", count: 176941 },
      { label: "Staff & Individual Contributor", count: 182296 },
    ],
  },
  {
    key: "geography",
    label: "Geography",
    note: "Region where the expert is based.",
    options: [
      { label: "North America", count: 498601 },
      { label: "Western Europe", count: 84813 },
      { label: "UK", count: 60020 },
      { label: "Other", count: 30921 },
      { label: "APAC", count: 25051 },
      { label: "LATAM", count: 8743 },
      { label: "MENA", count: 4686 },
    ],
  },
  {
    key: "size",
    label: "Company Size",
    note: "Size of the expert’s current employer.",
    options: [
      { label: "Self-employed", count: 0 },
      { label: "1-10", count: 31600 },
      { label: "11-50", count: 61729 },
      { label: "51-200", count: 78189 },
      { label: "201-500", count: 52741 },
      { label: "501-1000", count: 52114 },
      { label: "1001-5000", count: 114111 },
      { label: "5001-10000", count: 54031 },
      { label: "10001+", count: 238726 },
      { label: "Unknown", count: 29594 },
    ],
  },
];

export const fmt = (n: number) => n.toLocaleString("en-US");

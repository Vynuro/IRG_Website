import { Section, SectionHead, Card, Eyebrow, Button, WRAP } from "../lib/ui";
import { ConsultationCall } from "../components/Bands";
import demoMember from "../assets/team/demo-member.svg";

// To use a real photo: drop the file in src/assets/team/, import it, and set `image` on the member (square, min 400x400, face centered).
const leadership: { name: string; role: string; bio: string; image?: string }[] = [
  { name: "Daniel Whitmore", image: demoMember, role: "Chief Executive Officer", bio: "Two decades building B2B research operations across North America and Europe." },
  { name: "Priya Raman", role: "Head of Research Operations", bio: "Leads fieldwork delivery, quality control, and screening standards across every study." },
  { name: "Marcus Chen", role: "Director, Panel & Recruitment", bio: "Oversees the 700k+ expert panel, sourcing strategy, and respondent verification." },
  { name: "Sofia Alvarez", role: "Head of Client Partnerships", bio: "Partners with agencies and consultancies to scope feasibility and timelines." },
];

const team = [
  { name: "Hamza Qureshi", role: "Senior Project Manager" },
  { name: "Emily Carter", role: "Recruitment Lead, Healthcare" },
  { name: "Omar Siddiqui", role: "Quantitative Sample Manager" },
  { name: "Grace Liu", role: "Qualitative Recruitment Specialist" },
  { name: "Ayesha Malik", role: "Compliance & Data Privacy" },
  { name: "James O'Neill", role: "Panel Growth Manager" },
  { name: "Lena Fischer", role: "Project Manager, EMEA" },
  { name: "Bilal Ahmed", role: "Screening & QA Analyst" },
];

const initials = (name: string) => name.split(" ").map((p) => p[0]).slice(0, 2).join("");

function Avatar({ name, image, size = "lg" }: { name: string; image?: string; size?: "lg" | "sm" }) {
  const box = size === "lg" ? "h-16 w-16 text-[18px]" : "h-11 w-11 shrink-0 text-[13px]";
  if (image) {
    return <img src={image} alt={name} className={`${box} rounded-full object-cover`} />;
  }
  return (
    <span className={`flex ${box} items-center justify-center rounded-full font-extrabold text-white`} style={{ background: "var(--grad-primary)" }} aria-hidden="true">
      {initials(name)}
    </span>
  );
}

export default function Team() {
  return (
    <>
      <section className="border-b border-tint-100" style={{ background: "var(--grad-pale)" }}>
        <div className={`${WRAP} py-12 sm:py-14 lg:py-16`}>
          <Eyebrow>Meet Our Team</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
            The people behind every recruit.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
            Researchers, recruiters, and project managers who source, screen, and deliver the right experts across 15+ industries and 90+ markets.
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHead eyebrow="Leadership" title="Leading the network" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((p) => (
            <Card key={p.name} className="h-full">
              <Avatar name={p.name} image={p.image} />
              <h3 className="mt-5 text-[18px] font-bold text-primary">{p.name}</h3>
              <p className="mt-1 text-[13px] font-semibold text-secondary">{p.role}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-body">{p.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHead eyebrow="Delivery Team" title="Recruitment & project delivery" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <div key={p.name} className="flex items-center gap-4 rounded-card border border-tint-100 bg-white p-4 shadow-card">
              <Avatar name={p.name} size="sm" />
              <span>
                <strong className="block text-[15px] font-bold text-primary">{p.name}</strong>
                <small className="block text-[13px] text-body">{p.role}</small>
              </span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-panel border border-tint-100 bg-white p-8 shadow-card">
          <div>
            <h3 className="text-[22px] font-extrabold text-primary">Want to join us?</h3>
            <p className="mt-2 text-[15px] text-body">We&rsquo;re always looking for curious researchers and recruiters.</p>
          </div>
          <Button to="/careers">View careers</Button>
        </div>
      </Section>

      <ConsultationCall />
    </>
  );
}

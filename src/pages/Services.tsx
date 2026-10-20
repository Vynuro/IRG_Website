import { Breadcrumb, Eyebrow, Button, WRAP } from "../lib/ui";
import OrbitVisual from "../components/OrbitVisual";
import { ConsultationCall } from "../components/Bands";
import OurServices from "../components/OurServices";

export default function Services() {
  return (
    <>
      {/* Hero: mirrors the individual service page template */}
      <section style={{ background: "var(--grad-pale)" }} className="border-b border-tint-100">
        <div className={`${WRAP} py-10 sm:py-14`}>
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <Eyebrow>B2B Research Recruitment Services</Eyebrow>
              <h1 className="mt-4 text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
                Qualitative &amp; Quantitative Research Recruitment
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
                From in-depth interviews and focus groups to online surveys and CATI, we recruit verified B2B professionals for every methodology, screened to your exact criteria from a 700k+ expert panel across 15+ industries.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/consultation" size="lg">Send Requirements</Button>
                <Button to="/panel-explorer" variant="outline" size="lg">Explore Our Panel</Button>
              </div>
            </div>
            <div className="lg:col-span-4">
              <OrbitVisual
                icon="layers"
                label="8 recruitment methods"
                chips={[
                  { icon: "interview", label: "In-depth interviews" },
                  { icon: "focusGroup", label: "Focus groups" },
                  { icon: "survey", label: "Online surveys" },
                  { icon: "cati", label: "CATI" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <OurServices />
      <ConsultationCall />
    </>
  );
}

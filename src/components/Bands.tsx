import { Button, Eyebrow } from "../lib/ui";

/** Primary client conversion band — bright, premium, and visually distinct from dark proof sections. */
export function ConsultationBand() {
  return (
    <section className="border-y border-tint-100" style={{ background: "var(--grad-pale)" }}>
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-panel border border-secondary/15 bg-white/85 px-7 py-12 text-center shadow-card backdrop-blur-sm sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative">
          <Eyebrow>Ready to move faster with credible market insight?</Eyebrow>
          <h2 className="mt-5 text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary sm:text-[44px]">
            Book a Consultation
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
            Speak with our research lead to scope your objectives, whether it&rsquo;s expert interviews, focus
            groups, or data-backed market sizing. We&rsquo;ll recommend the right mix of qualitative and
            quantitative approaches to get you confident, fast.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/consultation" size="lg">
              Schedule a Consultation
            </Button>
          </div>
          <p className="mt-5 text-[14px] text-body">
            20-minute intro. No obligation. We&rsquo;ll share an approach and timeline.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reusable, lighter "A Consultation Call" band for interior pages. */
export function ConsultationCall() {
  return (
    <section className="bg-tint-50">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div
          className="overflow-hidden rounded-panel px-8 py-12 text-white sm:px-14"
          style={{ background: "var(--grad-primary)" }}
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-[28px] font-extrabold leading-tight sm:text-[34px]">A Consultation Call</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-white/80">
                Tell us about your objectives and we&rsquo;ll recommend the right approach, timeline, and expert
                mix: no obligation.
              </p>
            </div>
            <Button to="/consultation" variant="dark" size="lg" className="shrink-0">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

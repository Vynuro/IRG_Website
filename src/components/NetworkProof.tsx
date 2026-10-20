import { Link } from "react-router";
import { Icon } from "../lib/icons";
import { WRAP, cx } from "../lib/ui";
import { TRUSTPILOT_URL } from "../data/site";

const metrics = [
  { value: "90", suffix: "+", label: "Markets covered", detail: "Local knowledge. Global reach.", icon: "globe" as const },
  { value: "5-10", suffix: "days", label: "Average delivery", detail: "The right people, on your timeline.", icon: "clock" as const },
  { value: "15", suffix: "+", label: "Specialist industries", detail: "Deep expertise across key sectors.", icon: "layers" as const },
];

export default function NetworkProof() {
  return (
    <section aria-labelledby="network-heading" className="border-b border-[#e5ebf5] bg-[#f7f9fc]">
      <div className={cx(WRAP, "py-11 lg:py-14")}>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#44618c]">The IRG advantage</p>
            <h2 id="network-heading" className="mt-2 text-[25px] font-bold tracking-[-0.035em] text-primary sm:text-[30px]">A world of expertise. Within reach.</h2>
          </div>
          <Link to="/panel-explorer" className="focus-ring group inline-flex min-h-11 items-center gap-3 rounded-full border border-[#dbe4f1] bg-white py-2 pl-4 pr-2 text-[12px] font-semibold text-primary transition-colors hover:border-[#a9bfdf]">
            Explore our network <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef3fb] transition-transform group-hover:translate-x-0.5"><Icon.arrow size={14} /></span>
          </Link>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-[#dce5f1] bg-white shadow-[0_14px_48px_-28px_#16366740]">
          <div className="grid lg:grid-cols-[0.95fr_2fr]">
            <div className="relative isolate overflow-hidden px-7 py-8 text-white sm:px-9 lg:py-9" style={{ background: "radial-gradient(ellipse at 110% 0%, #164b96 0%, transparent 65%), linear-gradient(135deg, #061b42 0%, #002776 100%)" }}>
              <svg viewBox="0 0 280 280" className="pointer-events-none absolute -bottom-12 -right-20 -z-10 h-[290px] w-[290px] text-[#a4c7ff] opacity-[0.17]" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
                <circle cx="140" cy="140" r="115" /><circle cx="140" cy="140" r="133" strokeDasharray="2 6" />
                <ellipse cx="140" cy="140" rx="70" ry="115" /><ellipse cx="140" cy="140" rx="30" ry="115" />
                <ellipse cx="140" cy="140" rx="115" ry="44" /><ellipse cx="140" cy="140" rx="115" ry="82" />
                <path d="M25 140h230M140 25v230" />
                <circle cx="75" cy="104" r="4" fill="currentColor" /><circle cx="210" cy="178" r="4" fill="currentColor" /><circle cx="164" cy="58" r="4" fill="currentColor" />
              </svg>
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#d0dff6]"><span className="h-1.5 w-1.5 rounded-full bg-[#9fc9ff] shadow-[0_0_0_4px_#ffffff0d]" />IRG Intelligence Network</div>
              <p className="mt-7 text-[68px] font-bold leading-none tracking-[-0.065em] sm:text-[78px]">700k<span className="text-[#9ec5ff]">+</span></p>
              <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.02em]">Verified experts.</h3>
              <p className="mt-3 max-w-[230px] text-[12px] leading-[1.7] text-[#c2d2ea]">Real practitioners. Relevant experience.<br />Recruited around your brief.</p>
            </div>

            <dl className="grid grid-cols-1 bg-[linear-gradient(180deg,#ffffff_30%,#f9fbff_100%)] sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <div key={metric.label} className={cx("relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-6 py-6 sm:flex sm:flex-col sm:items-start sm:justify-center sm:px-5 sm:py-8 lg:px-7", index > 0 && "border-t border-[#e8edf5] sm:border-l sm:border-t-0")}>
                  <span className="row-span-2 flex h-11 w-12 shrink-0 items-center justify-center rounded-[13px] border border-[#d6e3f9] text-[#063781] shadow-[inset_0_1px_0_#fff,0_3px_7px_#143c7b06] sm:h-12 sm:w-14" style={{ background: "linear-gradient(145deg, #f2f6ff, #dfeaff)" }}>{Icon[metric.icon]({ size: 23 })}</span>
                  <dd className="col-start-3 row-span-2 row-start-1 whitespace-nowrap text-[32px] font-bold leading-none tracking-[-0.055em] text-[#06265c] sm:mt-6 sm:text-[44px] xl:text-[48px]">{metric.value}<span className={cx(metric.suffix === "days" ? "ml-1.5 text-[11px] font-semibold tracking-normal text-[#526b8e]" : "ml-0.5 text-[28px] text-[#5276aa]")}>{metric.suffix}</span></dd>
                  <dt className="text-[12px] font-bold leading-snug text-[#183760] sm:mt-3">{metric.label}</dt>
                  <dd className="mt-1.5 hidden max-w-[155px] text-[12px] leading-relaxed text-[#65748b] sm:block">{metric.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-5 border-t border-[#e2e9f3] bg-white px-7 py-6 sm:grid-cols-3 sm:gap-0 sm:px-9">
            <div className="flex items-center gap-4 sm:pr-6">
              <span className="border-r border-[#dde5f0] py-1 pr-4 text-[19px] font-bold tracking-[-0.05em] text-[#183760]">ESOMAR</span>
              <div><p className="text-[12px] font-semibold text-[#183760]">Corporate member</p><p className="mt-1 text-[11px] text-[#65748b]">Professional research standards</p></div>
            </div>
            <div className="border-y border-[#e8edf5] py-4 sm:border-x sm:border-y-0 sm:px-7 sm:py-0">
              <p className="text-[14px] font-semibold tracking-[-0.015em] text-[#183760]">Human verified. Brief specific.</p>
              <p className="mt-1.5 text-[11px] text-[#65748b]">Every expert reviewed by our recruitment team.</p>
            </div>
            <a href={TRUSTPILOT_URL} target="_blank" rel="noreferrer" className="focus-ring group flex items-center justify-between gap-4 rounded-md sm:pl-7" aria-label="Rated 4.6 out of 5 on Trustpilot. Read reviews in a new tab.">
              <div>
                <div className="flex items-center gap-2.5"><span aria-hidden="true" className="text-[22px] leading-none text-[#00865a]">★</span><span className="text-[17px] font-semibold tracking-[-0.025em] text-[#183760]">Trustpilot</span><span className="ml-1 text-[14px] font-bold text-[#183760]">4.6<span className="font-normal text-[#65748b]">/5</span></span></div>
                <p className="mt-1.5 text-[11px] text-[#65748b]">Independent feedback. Real experiences.</p>
              </div>
              <span className="text-[#8498b3] transition-transform group-hover:translate-x-0.5"><Icon.arrow size={17} /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

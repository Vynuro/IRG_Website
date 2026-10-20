import { Icon } from "../lib/icons";

/** Abstract IRG-blue expert-network visualization. Decorative — hidden from AT. */
export default function NetworkGraphic() {
  const nodes = [
    { label: "C-level", x: 50, y: 8 },
    { label: "IT & Tech", x: 88, y: 32 },
    { label: "Healthcare", x: 82, y: 74 },
    { label: "Finance", x: 18, y: 74 },
    { label: "Manufacturing", x: 12, y: 32 },
  ];
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* concentric rings */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#396ef3" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#396ef3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#274ca8" />
            <stop offset="100%" stopColor="#396ef3" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#glow)" />
        {[40, 30, 20].map((r) => (
          <circle key={r} cx="50" cy="46" r={r} fill="none" stroke="#274ca8" strokeOpacity="0.16" strokeWidth="0.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={i} x1="50" y1="46" x2={n.x} y2={n.y} stroke="url(#line)" strokeOpacity="0.35" strokeWidth="0.5" />
        ))}
      </svg>

      {/* center hub */}
      <div
        className="absolute left-1/2 top-[46%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-[0_8px_22px_rgba(0,39,118,0.13)]"
        style={{ background: "var(--grad-primary)" }}
      >
        <div className="text-center leading-tight">
          <div className="text-[15px] font-extrabold">90+</div>
          <div className="text-[9px] font-medium tracking-wide opacity-80">markets</div>
        </div>
      </div>

      {/* role nodes */}
      {nodes.map((n) => (
        <div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-pill border border-tint-100 bg-white px-3 py-1.5 text-[12px] font-semibold text-primary shadow-card"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          {n.label}
        </div>
      ))}

      {/* interface card */}
      <div className="absolute -bottom-2 right-0 w-[190px] rounded-panel border border-tint-100 bg-white p-4 shadow-card-hover">
        <div className="flex items-center gap-2 text-secondary">
          <Icon.compass size={18} />
          <span className="text-[12px] font-semibold text-primary">Feasibility snapshot</span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { l: "Available pool", v: 72 },
            { l: "Vetted", v: 54 },
          ].map((b) => (
            <div key={b.l}>
              <div className="mb-1 flex justify-between text-[11px] text-body">
                <span>{b.l}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-pill bg-tint-100">
                <div
                  className="h-full rounded-pill"
                  style={{ width: `${b.v}%`, background: "var(--grad-primary)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
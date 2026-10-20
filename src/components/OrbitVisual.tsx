import { Icon, type IconName } from "../lib/icons";

type Chip = { icon: IconName; label: string };

const chipPos = ["left-5 top-5", "right-5 top-5", "bottom-5 left-5", "bottom-5 right-5"];

export default function OrbitVisual({ icon, label, chips }: { icon: IconName; label: string; chips: Chip[] }) {
  return (
    <div className="relative mx-auto min-h-[300px] w-full max-w-[380px] overflow-hidden rounded-panel border border-secondary/15 bg-white/80 shadow-card-hover backdrop-blur-sm lg:ml-auto lg:mr-0">
      <span className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-tint-100/70 blur-3xl" aria-hidden="true" />
      <span className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <span className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/10" aria-hidden="true" />
      <span className="absolute left-1/2 top-1/2 h-[158px] w-[270px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[50%] border border-dashed border-secondary/15" aria-hidden="true" />
      {chips.slice(0, 4).map((chip, i) => (
        <span key={chip.label} className={`absolute ${chipPos[i]} flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm`}>
          <span className="text-secondary">{Icon[chip.icon]({ size: 17 })}</span>
          {chip.label}
        </span>
      ))}
      <div
        className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white text-white shadow-card-hover"
        style={{ background: "var(--grad-primary)" }}
        aria-hidden="true"
      >
        {Icon[icon]({ size: 58 })}
      </div>
      <span className="absolute left-1/2 top-[calc(50%+64px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-tint-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
        {label}
      </span>
    </div>
  );
}

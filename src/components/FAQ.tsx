import { useState, type ReactNode } from "react";
import { Icon } from "../lib/icons";
import { cx } from "../lib/ui";

export type QA = { q: string; a: ReactNode };

export default function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-tint-100 overflow-hidden rounded-card border border-tint-100 bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-[17px] font-semibold text-primary">{it.q}</span>
              <span className={cx("shrink-0 text-secondary transition-transform", isOpen && "rotate-180")}>
                <Icon.chevron size={20} />
              </span>
            </button>
            <div className={cx("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-body">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

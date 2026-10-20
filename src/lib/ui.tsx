import { Link } from "react-router";
import type { ReactNode } from "react";

type Cx = (string | false | null | undefined)[];
export const cx = (...c: Cx) => c.filter(Boolean).join(" ");

export const WRAP = "mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10";

/* ---------- Buttons ---------- */
type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "text" | "dark";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  loading,
}: BtnProps) {
  const navigates = Boolean(to || href);
  const showArrow = navigates && variant !== "text" && !loading;
  const label =
    typeof children === "string" ? children.replace(/\s*→\s*$/, "") : children;
  const base =
    "focus-ring group inline-flex items-center rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";
  const sizes =
    size === "lg"
      ? showArrow
        ? "min-h-[52px] min-w-[210px] gap-5 py-2.5 pl-6 pr-2.5 text-[16px]"
        : "min-h-[52px] gap-2 px-7 py-3 text-[16px]"
      : showArrow
        ? "min-h-[44px] gap-4 py-2 pl-5 pr-2 text-[15px]"
        : "min-h-[44px] gap-2 px-5 py-2.5 text-[15px]";
  const variants: Record<string, string> = {
    primary:
      "text-white shadow-[0_5px_14px_rgba(0,39,118,0.11)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,39,118,0.15)]",
    secondary:
      "bg-tint-100 text-primary hover:-translate-y-0.5 hover:bg-tint-50",
    outline:
      "border border-secondary/15 bg-white text-primary shadow-[0_5px_14px_rgba(0,39,118,0.06)] hover:-translate-y-0.5 hover:border-secondary/35 hover:shadow-card-hover",
    text: "min-h-0 rounded-none px-0 py-0 text-primary underline-offset-4 hover:text-secondary hover:underline",
    dark:
      "bg-white text-primary hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,39,118,0.12)]",
  };
  const style =
    variant === "primary"
      ? { background: "linear-gradient(135deg,#063086 0%,#274ca8 100%)" }
      : undefined;

  const content = (
    <>
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      <span className="inline-flex items-center gap-2">{label}</span>
      {showArrow && (
        <span
          aria-hidden="true"
          className={cx(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[17px] leading-none transition-transform duration-200 group-hover:translate-x-0.5",
            variant === "primary"
              ? "bg-white/15 text-white"
              : variant === "secondary"
                ? "bg-white/70 text-secondary"
                : "bg-tint-50 text-secondary"
          )}
        >
          →
        </span>
      )}
    </>
  );
  const cls = cx(base, sizes, showArrow ? "justify-between" : "justify-center", variants[variant], className);

  if (to) return <Link to={to} className={cls} style={style}>{content}</Link>;
  if (href) {
    const external = /^https?:|^mailto:/.test(href);
    return (
      <a
        href={href}
        className={cls}
        style={style}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={cls} style={style}>
      {content}
    </button>
  );
}

/* ---------- Eyebrow ---------- */
export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cx(
        "inline-flex min-h-8 items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.14em] backdrop-blur-sm",
        dark
          ? "border-white/15 bg-white/[0.08] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          : "border-secondary/15 bg-tint-50/90 text-secondary shadow-[0_3px_10px_rgba(0,39,118,0.03),inset_0_1px_0_rgba(255,255,255,0.9)]"
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(57,110,243,0.08)]" />
      {children}
    </span>
  );
}

/* ---------- Section ---------- */
export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "gray" | "tint" | "pale" | "dark" | "ink";
  id?: string;
}) {
  const tones: Record<string, string> = {
    white: "bg-white",
    gray: "bg-gray-50",
    tint: "bg-tint-50",
    pale: "",
    dark: "text-white",
    ink: "text-white",
  };
  const style =
    tone === "pale"
      ? { background: "var(--grad-pale)" }
      : tone === "dark"
      ? { background: "var(--grad-dark)" }
      : tone === "ink"
      ? { background: "#0b1a3c" }
      : undefined;
  return (
    <section
      id={id}
      style={style}
      className={cx("py-14 sm:py-20 lg:py-28", tones[tone], className)}
    >
      <div className={WRAP}>{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center,
  dark,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={cx("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={cx(
          "mt-5 text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[40px] lg:text-[48px]",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cx(
            "mt-5 text-[15px] leading-[1.65] sm:text-[16px]",
            dark ? "text-white/75" : "text-body"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------- Card ---------- */
export function Card({
  children,
  className,
  hover = true,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}) {
  return (
    <As
      className={cx(
        "rounded-card border border-tint-100 bg-white p-7 sm:p-8 shadow-card transition-all duration-200",
        hover && "hover:-translate-y-1 hover:border-secondary/40 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </As>
  );
}

/* ---------- Placeholder chip (unverified content) ---------- */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-ctl border border-dashed border-secondary/50 bg-tint-50 px-2.5 py-1 text-[12px] font-medium text-secondary">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      </svg>
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section style={{ background: "var(--grad-pale)" }} className="border-b border-tint-100">
      <div className={cx(WRAP, "py-12 sm:py-16 lg:py-20")}>
        {crumbs && <div className="mb-8"><Breadcrumb items={crumbs} /></div>}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">{intro}</p>}
      </div>
    </section>
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-body">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {it.to ? (
            <Link to={it.to} className="hover:text-primary">
              {it.label}
            </Link>
          ) : (
            <span className="text-primary">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="text-tint-100">/</span>}
        </span>
      ))}
    </nav>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Icon } from "../lib/icons";
import { Button, WRAP, cx } from "../lib/ui";
import { nav, megaMenu, contact } from "../data/site";
import { projects } from "../data/projects";
import { OfficialIRGLogo } from "./HeroLogo3D";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const loc = useLocation();
  const servicesActive = loc.pathname.startsWith("/services");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setMobile(false);
    setMega(false);
  }, [loc.pathname]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && (setMega(false), setMobile(false));
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  // Click outside the header closes an open mega menu, since clicking the
  // trigger itself now only opens/keeps it open (never toggles it shut).
  useEffect(() => {
    if (!mega) return;
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMega(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [mega]);

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setMega(false)}
      className={cx(
        "sticky top-0 z-50 border-t border-b transition-all duration-200",
        scrolled
          ? "border-t-primary/15 border-b-tint-100 bg-white/95 backdrop-blur-md"
          : "border-t-primary/15 border-b-tint-100 bg-white"
      )}
    >
      <div className={cx(WRAP, "flex h-[88px] items-center gap-4 xl:h-[96px] xl:justify-between 2xl:gap-5")}>
        <Link
          to="/"
          className="focus-ring flex shrink-0 items-center rounded-ctl"
          aria-label="Inventive Research Group home"
        >
          <OfficialIRGLogo
            className="h-[42px] w-auto text-primary sm:h-[46px] xl:h-[50px] 2xl:h-[52px]"
          />
        </Link>

        {/* Desktop navigation: same IRG menu content, wider original-site style */}
        <nav className="hidden min-w-0 flex-none self-stretch items-center justify-center gap-2 xl:flex 2xl:gap-3">
          {nav.map((item) =>
            item.mega ? (
              <div key={item.label} className="relative h-full" onMouseEnter={() => setMega(true)}>
                <Link
                  to="/services"
                  className={cx(
                    "focus-ring relative flex h-full shrink-0 items-center gap-1.5 whitespace-nowrap rounded-ctl px-1 text-[13px] font-semibold text-primary transition-colors hover:text-secondary 2xl:px-1.5 2xl:text-[14px]",
                    servicesActive && "text-secondary"
                  )}
                  aria-expanded={mega}
                  aria-haspopup="true"
                  onFocus={() => setMega(true)}
                >
                  {item.label}
                  <span className={cx("transition-transform", mega && "rotate-180")}>
                    <Icon.chevron size={16} />
                  </span>
                  {servicesActive && (
                    <span className="pointer-events-none absolute left-1 right-1 top-[calc(50%+18px)] h-[2px] rounded-full bg-secondary 2xl:left-1.5 2xl:right-1.5" />
                  )}
                </Link>
              </div>
            ) : item.children ? (
              <div key={item.label} className="group relative h-full">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cx(
                      "focus-ring relative flex h-full shrink-0 items-center gap-1.5 whitespace-nowrap rounded-ctl px-1 text-[13px] font-semibold text-primary transition-colors hover:text-secondary 2xl:px-1.5 2xl:text-[14px]",
                      (isActive || loc.pathname === "/team") && "text-secondary"
                    )
                  }
                  aria-haspopup="true"
                >
                  {item.label}
                  <span className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180">
                    <Icon.chevron size={16} />
                  </span>
                </NavLink>
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-1 pt-1 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-card border border-tint-100 bg-white p-2 shadow-card-hover">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        end
                        className={({ isActive }) =>
                          cx("focus-ring block rounded-ctl px-4 py-2.5 text-[14px] font-semibold text-primary transition-colors hover:bg-tint-50 hover:text-secondary", isActive && "bg-tint-50 text-secondary")
                        }
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cx(
                    "focus-ring relative flex h-full shrink-0 items-center whitespace-nowrap rounded-ctl px-1 text-[13px] font-semibold text-primary transition-all hover:text-secondary 2xl:px-1.5 2xl:text-[14px]",
                    isActive && "text-secondary"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="pointer-events-none absolute left-1 right-1 top-[calc(50%+18px)] h-[2px] rounded-full bg-secondary 2xl:left-1.5 2xl:right-1.5" />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        {/* Journey actions styled like the original IRG header, using current brand colours */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-4">
          <Link
            to="/become-irg-expert"
            className="focus-ring inline-flex min-h-[40px] items-center justify-center rounded-full px-4 text-[14px] font-semibold text-white shadow-[0_6px_16px_rgba(0,39,118,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,39,118,0.22)] 2xl:px-5 2xl:text-[15px]"
            style={{ background: "var(--grad-primary)" }}
          >
            Become an expert
          </Link>
          <Link
            to="/live-projects"
            className="irg-live-cta irg-live-border focus-ring group inline-flex h-10 min-h-[40px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-transparent px-4 text-[14px] font-semibold text-primary transition-shadow hover:shadow-[0_4px_10px_rgba(0,39,118,0.08)] 2xl:px-5 2xl:text-[15px]"
          >
            Live Projects
            <span className="inline-flex h-5 min-w-[22px] items-center justify-center rounded-full bg-secondary px-1.5 text-[11px] font-bold tabular-nums text-white">
              {projects.length}
            </span>
            <span
              className="text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="IRG on LinkedIn"
            className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
          >
            <Icon.linkedin size={18} />
          </a>
        </div>

        {/* Mobile / tablet toggle */}
        <button
          className="focus-ring ml-auto rounded-ctl p-2.5 text-primary xl:hidden"
          onClick={() => setMobile((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobile}
        >
          {mobile ? <Icon.close /> : <Icon.menu />}
        </button>
      </div>

      {/* Mega menu */}
      {mega && (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-tint-100 bg-white shadow-card-hover xl:block"
          onMouseEnter={() => setMega(true)}
          onMouseLeave={() => setMega(false)}
        >
          <div className={cx(WRAP, "grid grid-cols-12 gap-8 py-8")}>
            <Link
              to="/services"
              className="focus-ring group col-span-12 -mb-3 flex items-center justify-between rounded-ctl border-b border-tint-100 pb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-secondary"
            >
              All services overview
              <span className="transition-transform group-hover:translate-x-1"><Icon.arrow size={16} /></span>
            </Link>
            {megaMenu.map((col) => (
              <div key={col.title} className="col-span-4">
                <Link
                  to={col.to}
                  className="focus-ring text-[15px] font-bold text-primary hover:text-secondary"
                >
                  {col.title}
                </Link>
                <ul className="mt-3 space-y-1">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="focus-ring block rounded-ctl px-2 py-2 text-[14px] text-body hover:bg-tint-50 hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-4">
              <div
                className="rounded-panel p-6 text-white"
                style={{ background: "var(--grad-primary)" }}
              >
                <p className="text-[16px] font-semibold leading-snug">
                  Not sure which method fits? Speak with our research lead.
                </p>
                <Button to="/consultation" variant="dark" className="mt-5">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobile && (
        <div className="border-t border-tint-100 bg-white xl:hidden">
          <div className={cx(WRAP, "space-y-1 py-4")}>
            {nav.map((item) =>
              item.mega ? (
                <div key={item.label}>
                  <button
                    className="focus-ring flex w-full items-center justify-between rounded-ctl px-3 py-3 text-[16px] font-medium text-primary"
                    onClick={() => setMobileServices((v) => !v)}
                    aria-expanded={mobileServices}
                  >
                    Services
                    <span className={cx("transition-transform", mobileServices && "rotate-180")}>
                      <Icon.chevron size={18} />
                    </span>
                  </button>
                  {mobileServices && (
                    <div className="space-y-1 pb-2 pl-3">
                      <Link to="/services" className="block px-3 py-2 text-[14px] font-bold text-secondary">
                        All services overview →
                      </Link>
                      {megaMenu.map((col) => (
                        <div key={col.title} className="pt-2">
                          <Link to={col.to} className="block px-3 py-1.5 text-[14px] font-semibold text-primary">
                            {col.title}
                          </Link>
                          {col.links.map((l) => (
                            <Link key={l.to} to={l.to} className="block px-3 py-2 text-[14px] text-body">
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.children ? (
                <div key={item.label}>
                  <p className="px-3 pb-1 pt-3 text-[16px] font-medium text-primary">{item.label}</p>
                  <div className="space-y-1 pl-3">
                    {item.children.map((c) => (
                      <NavLink key={c.to} to={c.to} end className={({ isActive }) => cx("block rounded-ctl px-3 py-2 text-[14px] text-body", isActive && "text-secondary")}>
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cx(
                      "focus-ring flex items-center rounded-ctl px-3 py-3 text-[16px] font-medium text-primary",
                      isActive && "text-secondary"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="space-y-3 pt-4">
              <Button to="/become-irg-expert" className="w-full">
                Become an expert
              </Button>
              <Link
                to="/live-projects"
                className="irg-live-cta irg-live-border focus-ring group flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-transparent px-4 text-[15px] font-semibold text-primary"
              >
                Live Projects
                <span className="inline-flex h-5 min-w-[22px] items-center justify-center rounded-full bg-secondary px-1.5 text-[11px] font-bold tabular-nums text-white">
                  {projects.length}
                </span>
                <span className="text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="IRG on LinkedIn"
                className="focus-ring flex min-h-[44px] w-full items-center justify-center rounded-full border-2 border-primary text-primary transition-all hover:bg-primary hover:text-white"
              >
                <Icon.linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

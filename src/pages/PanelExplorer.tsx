import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { Section, SectionHead, Eyebrow, Button, WRAP, cx } from "../lib/ui";
import { Icon } from "../lib/icons";
import { panelData, fmt } from "../data/panel";

type SelectedOption = { dim: string; opt: string; count: number };
type SelectedOptions = SelectedOption[];

const TOTAL_EXPERTS = 712835;
// Floor so the estimate never collapses to 0 once several dimensions are
// selected — mirrors the approved artifact's Math.max(20, ...) floor.
const MIN_POOL = 20;

function getInitialExplorerState(search: string) {
  const params = new URLSearchParams(search);
  const requestedDimension = params.get("dimension");
  const requestedIndustry = params.get("industry");
  const activeTab = requestedIndustry
    ? "industry"
    : panelData.some((dimension) => dimension.key === requestedDimension)
      ? requestedDimension!
      : "hcp";
  const industry = panelData
    .find((dimension) => dimension.key === "industry")
    ?.options.find((option) => option.label === requestedIndustry);

  return {
    activeTab,
    selected: industry
      ? [{ dim: "industry", opt: industry.label, count: industry.count }]
      : [],
  };
}

export default function PanelExplorer() {
  const { search } = useLocation();
  const initialState = useMemo(() => getInitialExplorerState(search), [search]);
  const [selected, setSelected] = useState<SelectedOptions>(initialState.selected);
  const [activeTab, setActiveTab] = useState(initialState.activeTab);
  const [loading, setLoading] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);

  useEffect(() => {
    setSelected(initialState.selected);
    setActiveTab(initialState.activeTab);
  }, [initialState]);

  const toggle = (dim: string, opt: string) => {
    const dimension = panelData.find((item) => item.key === dim);
    const option = dimension?.options.find((item) => item.label === opt);
    if (!option) return;

    // Keep the results panel in sync with the dimension being filtered.
    setActiveTab(dim);
    setLoading(true);
    setSelected((current) => {
      const exists = current.some((item) => item.dim === dim && item.opt === opt);
      if (exists) {
        return current.filter((item) => !(item.dim === dim && item.opt === opt));
      }
      return [...current, { dim, opt, count: option.count }];
    });
    window.setTimeout(() => setLoading(false), 260);
  };

  const reset = () => setSelected([]);

  const consultationUrl = useMemo(() => {
    if (selected.length === 0) return "/consultation";
    const params = new URLSearchParams();
    selected.forEach((item) => params.append(item.dim, item.opt));
    return `/consultation?${params.toString()}`;
  }, [selected]);

  const dim = panelData.find((d) => d.key === activeTab) ?? panelData[0];
  const max = Math.max(...dim.options.map((o) => o.count));
  const hasFilters = selected.length > 0;

  // Multiple choices inside one dimension are still treated as an OR pool
  // (summed) — unchanged from before.
  //
  // Across dimensions, pools are now combined MULTIPLICATIVELY instead of
  // with Math.min(). This matches the approved Panel Explorer artifact's
  // calcPool() formula: each selected dimension contributes its share of
  // the total panel (pool / TOTAL_EXPERTS), and those shares multiply
  // together, then scale back up by TOTAL_EXPERTS. Every dimension you
  // touch now moves the headline number — nothing gets silently pinned to
  // a single "bottleneck" dimension the way Math.min() did.
  const mainCount = useMemo(() => {
    const dimensionPools = new Map<string, number>();
    selected.forEach((item) => {
      dimensionPools.set(item.dim, (dimensionPools.get(item.dim) ?? 0) + item.count);
    });

    if (dimensionPools.size === 0) return TOTAL_EXPERTS;

    const ratio = [...dimensionPools.values()].reduce(
      (acc, pool) => acc * (pool / TOTAL_EXPERTS),
      1
    );

    return Math.max(MIN_POOL, Math.round(TOTAL_EXPERTS * ratio));
  }, [selected]);

  return (
    <>
      {/* Intro */}
      <section
        className="overflow-hidden border-b border-tint-100"
        style={{ background: "var(--grad-pale)" }}
      >
        <div
          className={`${WRAP} grid grid-cols-1 items-center gap-8 py-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16`}
        >
          <div className="relative z-10 lg:col-span-8">
            <Eyebrow>Expert panel explorer</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
              Expert Panel Explorer
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
              Browse 700k+ individually verified B2B experts by industry, seniority, and geography. Every figure
              reflects custom-recruited panel members: not database estimates.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["700k+ custom-recruited experts", "90+ markets", "ESOMAR verified"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-tint-100 bg-white/80 px-3 py-1.5 text-[12px] font-semibold text-primary">{item}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="relative mx-auto min-h-[300px] w-full max-w-[380px] overflow-hidden rounded-panel border border-secondary/15 bg-white/80 shadow-card-hover backdrop-blur-sm lg:ml-auto lg:mr-0"
              aria-label="IRG panel explorer filters across industry, job function, seniority, geography, company size, and HCP speciality"
            >
              <span
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-tint-100/70 blur-3xl"
                aria-hidden="true"
              />

              <span
                className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
                aria-hidden="true"
              />

              <span
                className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/10"
                aria-hidden="true"
              />

              <span
                className="absolute left-1/2 top-1/2 h-[158px] w-[270px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[50%] border border-dashed border-secondary/15"
                aria-hidden="true"
              />

              <span
                className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.layers size={17} />
                </span>
                Industry
              </span>

              <span
                className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.users size={17} />
                </span>
                Job function
              </span>

              <span
                className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.compass size={17} />
                </span>
                Geography
              </span>

              <span
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-tint-100 bg-white px-3 py-2 text-[11px] font-bold text-primary shadow-sm"
                aria-hidden="true"
              >
                <span className="text-secondary">
                  <Icon.target size={17} />
                </span>
                Seniority
              </span>

              <div
                className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white text-white shadow-card-hover"
                style={{ background: "var(--grad-primary)" }}
              >
                <Icon.search size={58} />
              </div>

              <span className="absolute left-1/2 top-[calc(50%+64px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-secondary/10 bg-tint-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
                6 panel dimensions
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section tone="gray" className="!py-8 sm:!py-10 lg:!py-12">
        {/* Mobile filter trigger */}
        <div className="mt-5 lg:hidden">
          <Button variant="outline" className="w-full" onClick={() => setMobileFilters(true)}>
            <Icon.search size={18} /> Filters {hasFilters && `(${selected.length})`}
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          {/* Filter cluster (left, wider) */}
          <aside className="hidden lg:block">
            <FilterRail
              selected={selected}
              toggle={toggle}
              onDimensionFocus={setActiveTab}
              activeDimension={activeTab}
            />
          </aside>

          {/* Right column: count summary + breakdown, stacked so the column's
              total height sits closer to the left filter rail's. */}
          <div className="flex flex-col gap-5">
            {/* Count summary */}
            <div className="rounded-card border border-tint-100 bg-white px-6 py-8 shadow-[0_5px_18px_rgba(0,39,118,0.035)] sm:px-7 sm:py-11">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
                    {loading ? (
                      <div className="h-10 w-36 animate-pulse rounded bg-tint-100" />
                    ) : (
                      <strong className="text-[36px] font-extrabold leading-none tracking-[-0.035em] text-primary sm:text-[42px]">
                        {fmt(mainCount)}
                      </strong>
                    )}
                    <span className="pb-1 text-[14px] text-body sm:text-[15px]">
                      {hasFilters ? "experts match your criteria" : "experts in our panel"}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-[12px] leading-relaxed text-body sm:text-[13px]">
                    {hasFilters
                      ? "Estimated pool based on your selections. Final cross-match feasibility is confirmed after your request is reviewed."
                      : "Select one or more filters to review available pool sizes, or browse the complete breakdown below."}
                  </p>
                </div>

                {hasFilters && (
                  <button
                    type="button"
                    onClick={reset}
                    className="focus-ring shrink-0 rounded-ctl px-2 py-1 text-[14px] font-semibold text-secondary hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>

            {/* Unified breakdown panel */}
            <div className="flex flex-1 flex-col overflow-hidden rounded-card border border-tint-100 bg-white shadow-[0_5px_18px_rgba(0,39,118,0.035)]">
              <div className="border-b border-tint-100 px-5 pt-5 sm:px-7 sm:pt-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-[20px] font-bold text-primary">{dim.label} breakdown</h2>
                    <p className="mt-1 text-[13px] leading-relaxed text-body">{dim.note}</p>
                  </div>

                  <div className="flex max-w-full flex-wrap gap-2 pb-4">
                    {panelData.map((d) => (
                      <button
                        key={d.key}
                        onClick={() => setActiveTab(d.key)}
                        className={cx(
                          "focus-ring inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-1.5 py-1.5 text-[10px] font-semibold transition-colors sm:px-2 sm:text-[11px]",
                          activeTab === d.key
                            ? "border border-primary bg-primary text-white"
                            : d.key === "hcp"
                              ? "irg-hcp-gradient irg-hcp-border-pulse border-2 text-secondary"
                              : "border border-tint-100 bg-white text-primary/70 hover:border-secondary/25 hover:bg-tint-50"
                        )}
                      >
                        {d.key === "hcp" && activeTab !== d.key && (
                          <span className="text-secondary" aria-hidden="true">
                            <Icon.users size={11} />
                          </span>
                        )}
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-7">

              {loading ? (
                <div className="mt-6 space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-3 w-32 animate-pulse rounded bg-tint-100" />
                      <div className="h-6 animate-pulse rounded bg-tint-50" style={{ width: `${90 - i * 12}%` }} />
                    </div>
                  ))}
                </div>
              ) : (
                /* Fixed row spacing so every dimension reads with the same
                   line height whether it has 4 rows or 10. */
                <table className="w-full">
                  <caption className="sr-only">{dim.label} panel counts</caption>
                  <tbody>
                    {dim.options.map((o) => {
                      const isSel = selected.some((item) => item.dim === dim.key && item.opt === o.label);
                      const pct = Math.round((o.count / max) * 100);
                      return (
                        <tr key={o.label} className="align-middle">
                          <th scope="row" className="w-[38%] py-2.5 pr-4 text-left text-[14px] font-medium text-primary sm:w-[30%]">
                            <span className="flex items-center gap-2">
                              {isSel && <span className="text-secondary"><Icon.check size={15} /></span>}
                              {o.label}
                            </span>
                          </th>
                          <td className="py-2">
                            <div className="h-5 w-full overflow-hidden rounded-full bg-[#F4F6FA]">
                              <div
                                className="h-full rounded-full transition-[width] duration-300"
                                style={{
                                  width: `${pct}%`,
                                  background: isSel ? "var(--grad-primary)" : "#E6ECFF",
                                }}
                              />
                            </div>
                          </td>
                          <td className="w-[74px] py-2.5 pl-4 text-right text-[14px] font-semibold tabular-nums text-primary">
                            {fmt(o.count)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Panel snapshot */}
      <section className="bg-white">
        <div className={cx(WRAP, "pb-2 pt-2 sm:pb-3 sm:pt-4")}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { value: "700k+", label: "Total experts" },
              { value: "90+", label: "Markets" },
              { value: "5-10 days", label: "Avg. delivery" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-card border border-tint-100 bg-white px-6 py-6 text-center shadow-[0_4px_14px_rgba(0,39,118,0.035)] sm:py-7"
              >
                <strong className="block text-[24px] font-extrabold leading-none tracking-[-0.02em] text-primary sm:text-[26px]">
                  {stat.value}
                </strong>
                <span className="mt-2 block text-[14px] text-body sm:text-[15px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need more than the panel shows */}
      <Section tone="white">
        <SectionHead
          eyebrow="Need More Than the Panel Shows?"
          title="Our custom recruitment capability goes beyond the panel."
          intro="If the audience exists and can be reached, IRG will find them: even if they're not currently in our panel. Send us your brief and we'll confirm what we can deliver within 24 hours."
          center
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { n: "1", title: "Send your requirements", description: "Target audience, quota, methodology, and timeline. We respond personally within 24 hours." },
            { n: "2", title: "Receive a custom proposal", description: "Sourcing approach, confirmed quota, per-recruit pricing, and timeline. No surprises." },
            { n: "3", title: "Recruitment begins", description: "Individually sourced and verified. Delivered to your schedule, every time." },
          ].map((step) => (
            <div key={step.n} className="rounded-card border border-tint-100 bg-white p-6 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-full text-[17px] font-extrabold text-white" style={{ background: "var(--grad-primary)" }}>{step.n}</span>
              <h3 className="mt-5 text-[18px] font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Feasibility band */}
      <section className="bg-white">
        <div className={cx(WRAP, "py-10 sm:py-12")}>
          <div className="relative overflow-hidden rounded-panel px-6 py-10 text-white shadow-card-hover sm:px-10 lg:px-14" style={{ background: "var(--grad-dark)" }}>
            <span className="absolute -right-20 -top-28 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
            <span className="absolute -bottom-24 right-[28%] h-52 w-52 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <h2 className="text-[28px] font-extrabold sm:text-[36px]">Ready to start a project?</h2>
                <p className="mt-2 text-[16px] text-white/75">
                  We&rsquo;ll pass your selected filters into the consultation form automatically.
                </p>
              </div>
              <Button to={consultationUrl} variant="dark" size="lg" className="shrink-0">Send your requirements →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter bottom sheet */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/50" onClick={() => setMobileFilters(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-auto rounded-t-panel bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[18px] font-bold text-primary">Filters</h2>
              <button className="focus-ring rounded-ctl p-1 text-primary" onClick={() => setMobileFilters(false)} aria-label="Close filters">
                <Icon.close />
              </button>
            </div>
            <FilterRail
              selected={selected}
              toggle={toggle}
              onDimensionFocus={setActiveTab}
              activeDimension={activeTab}
            />
            <div className="sticky bottom-0 mt-5 flex gap-3 bg-white pt-2">
              <Button variant="outline" className="flex-1" onClick={reset}>Reset</Button>
              <Button className="flex-1" onClick={() => setMobileFilters(false)}>Show results</Button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

function FilterRail({
  selected,
  toggle,
  onDimensionFocus,
  activeDimension,
}: {
  selected: SelectedOptions;
  toggle: (d: string, o: string) => void;
  onDimensionFocus: (dimension: string) => void;
  activeDimension: string;
}) {
  const renderCard = (d: (typeof panelData)[number], extraClassName?: string) => {
    // Every dimension stays expanded; the header now just focuses the matching
    // breakdown on the right (two-way sync) and highlights which dimension is
    // currently driving that chart.
    const isActive = activeDimension === d.key;
    const selectedCount = selected.filter((item) => item.dim === d.key).length;
    const selectedInDimension = selectedCount > 0;
    const isHcp = d.key === "hcp";
    return (
      <div
        key={d.key}
        className={cx(
          "flex flex-col overflow-hidden rounded-card shadow-[0_6px_22px_rgba(0,39,118,0.045)] transition-colors",
          isHcp ? "irg-hcp-gradient irg-hcp-border-pulse border-2" : "border bg-white",
          !isHcp && (isActive ? "border-secondary/40 ring-1 ring-secondary/20" : "border-tint-100"),
          extraClassName
        )}
      >
        <button
          type="button"
          onClick={() => onDimensionFocus(d.key)}
          className={cx(
            "focus-ring flex w-full items-start justify-between gap-1.5 px-2.5 py-2.5 text-left transition-colors",
            !isHcp && (isActive ? "bg-tint-50" : "hover:bg-tint-50/60")
          )}
          aria-pressed={isActive}
        >
          <span className="flex min-w-0 items-center gap-1 text-[13px] font-bold leading-tight text-primary">
            <span className={cx("h-3 w-1 shrink-0 rounded-full transition-colors", isActive ? "bg-secondary" : "bg-transparent")} aria-hidden="true" />
            {isHcp && (
              <span className="shrink-0 text-secondary" aria-hidden="true">
                <Icon.users size={13} />
              </span>
            )}
            <span className="min-w-0">{d.label}</span>
          </span>
          <span
            className={cx(
              "shrink-0 whitespace-nowrap rounded-full px-1 py-0.5 text-[9px] font-bold",
              selectedInDimension ? "bg-primary text-white" : isHcp ? "bg-white/70 text-secondary" : "bg-tint-50 text-body"
            )}
          >
            {selectedInDimension ? `${selectedCount} selected` : `${d.options.length} options`}
          </span>
        </button>

        <fieldset className={cx("border-t px-2 py-2", isHcp ? "border-accent/15" : "border-tint-100")}>
          <legend className="sr-only">{d.label}</legend>
          <div className="space-y-1 pr-1">
            {d.options.map((o) => {
              const checked = selected.some((item) => item.dim === d.key && item.opt === o.label);
              return (
                <label
                  key={o.label}
                  className={cx(
                    "flex cursor-pointer items-center justify-between gap-1.5 rounded-ctl px-1.5 py-1.5 text-[12px] transition-colors",
                    isHcp ? "hover:bg-white/40" : "hover:bg-tint-50",
                    checked && (isHcp ? "bg-white/40" : "bg-tint-50")
                  )}
                >
                  <span className="flex min-w-0 items-center gap-1.5 text-primary">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 shrink-0 accent-[#274ca8]"
                      checked={checked}
                      onChange={() => toggle(d.key, o.label)}
                    />
                    <span className="min-w-0 truncate leading-tight">{o.label}</span>
                  </span>
                  <span className="shrink-0 text-[10px] tabular-nums text-body">{fmt(o.count)}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-between px-1">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">Refine audience</p>
          <h2 className="mt-1 text-[18px] font-extrabold text-primary">Panel filters</h2>
        </div>
        <span className="rounded-full bg-tint-100 px-2.5 py-1 text-[11px] font-bold text-secondary">6 dimensions</span>
      </div>

      {/* One grid, one consistent gap throughout — so the row spacing above
          and below Seniority/Geography reads as equal, not a big gap then a
          small one. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {panelData.map((d, i) =>
          renderCard(d, i === panelData.length - 1 && panelData.length % 2 === 1 ? "sm:col-span-2" : undefined)
        )}
      </div>
    </div>
  );
}

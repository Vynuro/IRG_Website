import { useState } from "react";
import { Link } from "react-router";
import { posts } from "../data/blogs";
import { Section, Eyebrow, WRAP, cx } from "../lib/ui";
import { ConsultationCall } from "../components/Bands";

import { getBlogImage } from "../data/blogImages";

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function Blogs() {
  const [cat, setCat] = useState("All");
  const [featured, ...rest] = posts;
  const list = cat === "All" ? rest : posts.filter((p) => p.category === cat);
  const featuredImage = getBlogImage(featured.slug);

  return (
    <>
      <section
        className="border-b border-tint-100"
        style={{ background: "var(--grad-pale)" }}
      >
        <div className={`${WRAP} py-12 sm:py-14 lg:py-16`}>
          <Eyebrow>Blogs</Eyebrow>

          <h1 className="mt-4 max-w-4xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary sm:text-[48px] lg:text-[56px]">
            Insights on B2B research recruitment.
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
            Practical guides, methodology notes, and lessons from thousands of
            expert recruits.
          </p>
        </div>
      </section>

      <Section tone="white">
        {cat === "All" && (
          <Link
            to={`/blogs/${featured.slug}`}
            className="focus-ring group grid grid-cols-1 overflow-hidden rounded-panel border border-tint-100 bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
              <img
                src={featuredImage.src}
                alt={featuredImage.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#001646]/60 via-[#001646]/10 to-transparent" />

              <span className="absolute left-6 top-6 rounded-full border border-white/25 bg-[#001646]/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:left-8 sm:top-8">
                Featured
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-secondary">
                {featured.category}
              </span>

              <h2 className="mt-3 text-[26px] font-extrabold leading-tight text-primary sm:text-[30px]">
                {featured.title}
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-body">
                {featured.excerpt}
              </p>

              <p className="mt-6 text-[13px] text-body">
                {featured.date} · {featured.read} read
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-secondary">
                Read article
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        )}

        <div
          className="mt-12 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by category"
        >
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={cx(
                "focus-ring rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors",
                cat === c
                  ? "border-primary bg-primary text-white"
                  : "border-tint-100 bg-white text-primary hover:bg-tint-50"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => {
            const image = getBlogImage(p.slug);

            return (
              <Link
                key={p.slug}
                to={`/blogs/${p.slug}`}
                className="focus-ring group block rounded-card"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-card border border-tint-100 bg-white shadow-card transition-all duration-200 group-hover:-translate-y-1 group-hover:border-secondary/40 group-hover:shadow-card-hover">
                  <div className="aspect-[16/9] overflow-hidden bg-tint-50">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-secondary">
                      {p.category}
                    </span>

                    <h3 className="mt-3 text-[18px] font-bold leading-snug text-primary">
                      {p.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-body">
                      {p.excerpt}
                    </p>

                    <p className="mt-5 border-t border-tint-100 pt-4 text-[12px] text-body">
                      {p.date} · {p.read} read
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </Section>

      <ConsultationCall />
    </>
  );
}
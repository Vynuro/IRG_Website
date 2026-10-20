import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getPost, posts } from "../data/blogs";
import type { Block } from "../data/blogs";
import { Section, Eyebrow, Breadcrumb, Button, WRAP, cx } from "../lib/ui";
import { ConsultationCall } from "../components/Bands";
import NotFound from "./NotFound";

import { getBlogImage } from "../data/blogImages";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "h2":
      return (
        <h2
          id={slugify(b.text)}
          className="mt-12 scroll-mt-28 text-[26px] font-extrabold leading-tight tracking-[-0.01em] text-primary sm:text-[30px]"
        >
          {b.text}
        </h2>
      );

    case "p":
      return (
        <p className="mt-5 text-[16px] leading-[1.8] text-body sm:text-[17px]">
          {b.text}
        </p>
      );

    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {b.items.map((it) => (
            <li
              key={it}
              className="flex gap-3 text-[16px] leading-[1.7] text-body"
            >
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {it}
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="mt-6 space-y-4">
          {b.items.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-4 rounded-card border border-tint-100 bg-tint-50 p-5 sm:p-6"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white"
                style={{ background: "var(--grad-primary)" }}
              >
                {i + 1}
              </span>

              <div>
                <h3 className="text-[17px] font-bold text-primary">
                  {s.title}
                </h3>

                <p className="mt-1.5 text-[15px] leading-[1.7] text-body">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "callout":
      return (
        <aside className="mt-8 rounded-card border-l-4 border-accent bg-tint-100/60 p-6">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-secondary">
            {b.title}
          </p>

          <p className="mt-2 text-[16px] leading-[1.7] text-primary">
            {b.text}
          </p>
        </aside>
      );

    case "quote":
      return (
        <blockquote
          className="mt-10 rounded-panel p-8 text-white sm:p-10"
          style={{ background: "var(--grad-dark)" }}
        >
          <p className="text-[22px] font-bold leading-snug sm:text-[26px]">
            &ldquo;{b.text}&rdquo;
          </p>

          <footer className="mt-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/60">
            {b.by}
          </footer>
        </blockquote>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;

      setProgress(
        max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0
      );
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  if (!post) return <NotFound />;

  const idx = posts.findIndex((p) => p.slug === post.slug);

  const prev = posts[idx + 1];
  const next = posts[idx - 1];

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        Number(b.category === post.category) -
        Number(a.category === post.category)
    )
    .slice(0, 3);

  const toc = post.body.filter(
    (b): b is Extract<Block, { type: "h2" }> =>
      b.type === "h2"
  );

  const featuredImage = getBlogImage(post.slug);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[60] h-[3px] bg-accent transition-[width] duration-100"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <section
        className="border-b border-tint-100"
        style={{ background: "var(--grad-pale)" }}
      >
        <div className={`${WRAP} py-10 sm:py-14 lg:py-16`}>
          <Breadcrumb
            items={[
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Blogs",
                to: "/blogs",
              },
              {
                label: post.category,
              },
            ]}
          />

          <div className="mt-6">
            <Eyebrow>{post.category}</Eyebrow>
          </div>

          <h1 className="mt-5 max-w-4xl text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary sm:text-[44px] lg:text-[52px]">
            {post.title}
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] leading-[1.65] text-body sm:text-[18px]">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-body">
            <span className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{
                  background: "var(--grad-primary)",
                }}
              >
                IRG
              </span>

              <span>
                <span className="block text-[14px] font-semibold text-primary">
                  {post.author.name}
                </span>

                {post.author.role}
              </span>
            </span>

            <span>{post.date}</span>

            <span>{post.read} read</span>
          </div>
        </div>
      </section>

      <div className={`${WRAP} pt-8 sm:pt-10 lg:pt-12`}>
        <figure className="relative overflow-hidden rounded-panel border border-tint-100 bg-tint-50 shadow-card">
          <div className="aspect-[16/10] sm:aspect-[16/7]">
            <img
              src={featuredImage.src}
              alt={featuredImage.alt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001646]/20 via-transparent to-transparent" />
        </figure>
        <p className="mt-2 text-right text-[11px] text-body">Photo: <a href={featuredImage.source} target="_blank" rel="noreferrer" className="focus-ring rounded underline underline-offset-2">{featuredImage.credit}</a></p>
      </div>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-secondary">
                On this page
              </p>

              <ul className="mt-4 space-y-1 border-l border-tint-100">
                {toc.map((t) => (
                  <li key={t.text}>
                    <a
                      href={`#${slugify(t.text)}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[14px] leading-snug text-body transition-colors hover:border-accent hover:text-primary"
                    >
                      {t.text}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={copy}
                className="focus-ring mt-8 rounded-full border border-tint-100 px-4 py-2 text-[13px] font-semibold text-primary transition-colors hover:bg-tint-50"
              >
                {copied ? "Link copied" : "Copy link"}
              </button>
            </div>
          </aside>

          <article className="max-w-3xl">
            <div className="rounded-card border border-secondary/15 bg-tint-50 p-6 sm:p-7">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-secondary">
                Key takeaways
              </p>

              <ul className="mt-4 space-y-3">
                {post.takeaways.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 text-[15px] leading-[1.6] text-primary"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] text-white">
                      ✓
                    </span>

                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="-mt-5">
              {post.body.map((b, i) => (
                <BlockView key={i} b={b} />
              ))}
            </div>

            <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-panel border border-tint-100 p-7 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-[19px] font-bold text-primary">
                  Need experts for your next study?
                </h3>

                <p className="mt-1 text-[14px] text-body">
                  Tell us your audience and we will scope feasibility.
                </p>
              </div>

              <Button to="/consultation">
                Book a Consultation
              </Button>
            </div>

            <nav
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
              aria-label="More posts"
            >
              {[
                {
                  p: prev,
                  label: "Previous",
                },
                {
                  p: next,
                  label: "Next",
                },
              ].map(({ p, label }) =>
                p ? (
                  <Link
                    key={label}
                    to={`/blogs/${p.slug}`}
                    className={cx(
                      "focus-ring rounded-card border border-tint-100 p-5 transition-all hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-card-hover",
                      label === "Next" && "sm:text-right"
                    )}
                  >
                    <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-secondary">
                      {label === "Previous"
                        ? "← Older"
                        : "Newer →"}
                    </span>

                    <span className="mt-2 block text-[15px] font-bold leading-snug text-primary">
                      {p.title}
                    </span>
                  </Link>
                ) : (
                  <span key={label} />
                )
              )}
            </nav>
          </article>
        </div>
      </Section>

      <Section tone="tint">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em] text-primary sm:text-[34px]">
            Keep reading
          </h2>

          <Link
            to="/blogs"
            className="text-[14px] font-semibold text-secondary hover:underline"
          >
            All posts →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => {
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

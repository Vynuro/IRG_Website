import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

/*
 * The browser's own scroll restoration (history.scrollRestoration) tries to
 * put back/forward navigations back where they were, racing our own
 * top-of-page reset below and briefly showing the old (often near-footer)
 * scroll position. Take manual control so only our logic decides.
 */
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    /* Anchor deep-links should land on their section, not be yanked to the top. */
    if (window.location.hash) return;
    /*
     * index.css sets `html { scroll-behavior: smooth }`, so a plain
     * scrollTo(0, 0) animates all the way up and the new page can be read
     * mid-scroll. "instant" overrides that for navigation resets.
     *
     * useLayoutEffect (not useEffect) so this runs before the browser
     * paints the new route — otherwise the old scroll position (e.g. the
     * footer) flashes on screen for a frame before jumping to the top.
     */
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function Root() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


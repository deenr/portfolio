"use client";

export function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hover:text-foreground transition-colors text-left"
    >
      ↑ back to top
    </button>
  );
}

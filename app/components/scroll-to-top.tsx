"use client";

export function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="hover:text-foreground hover:underline underline-offset-[3px] transition-colors text-left cursor-pointer"
    >
      ↑ back to top
    </button>
  );
}

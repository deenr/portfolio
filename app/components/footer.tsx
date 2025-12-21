export function Footer() {
  return (
    <footer className="w-full py-8 sm:py-16 text-[var(--muted-foreground)] text-xs sm:text-sm font-mono flex flex-row justify-between items-center mt-auto">
      <div className="flex flex-row gap-4">
        <a
          className="hover:text-foreground hover:underline underline-offset-[3px] transition-colors duration-150"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/dean-reymen"
        >
          linkedin
        </a>
        <a
          className="hover:text-foreground hover:underline underline-offset-[3px] transition-colors duration-150"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/deenr"
        >
          github
        </a>
      </div>
      <span>© {new Date().getFullYear()} dean reymen</span>
    </footer>
  );
}

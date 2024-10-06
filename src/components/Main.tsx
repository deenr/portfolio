import { ThemeToggle } from './ThemeToggle';

export function Main({ className }: { className?: string }) {
  return (
    <section className={`relative p-12 flex flex-col flex-1 justify-between gap-16 bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <h2 className="text-primary-500 text-4xl sm:text-5xl md:text-6xl xl:text-[84px] 2xl:text-8xl font-medium">
        a passionate
        <br /> full-stack developer
        <br /> with a focus on
        <br />
        precision
      </h2>
      <div>
        <p className="text-gray-900 dark:text-white text-base font-medium">Based in Belgium</p>
        <p className="text-gray-500 dark:text-gray-300 text-base font-medium">UTC/GMT +1 hour</p>
      </div>

      <ThemeToggle className="absolute top-7 right-7" />
    </section>
  );
}

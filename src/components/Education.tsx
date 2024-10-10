export function Education({ className }: { className?: string }) {
  return (
    <section className={`relative w-full p-7 flex flex-col bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular">Education</h3>
      <p className="mt-3 text-primary-500 text-xl lg:text-2xl xl:text-3xl font-medium">Master of Electronics and ICT Engineering Technology</p>
      <div className="mt-1 flex flex-row flex-wrap gap-row-2 justify-between text-gray-500 dark:text-gray-300 text-sm">
        <p className="font-regular">Hasselt University, 2021 — 2022</p>
      </div>
      <p className="mt-3 text-gray-900 dark:text-white">Graduated with honors </p>
    </section>
  );
}

export function Experience({ className }: { className?: string }) {
  return (
    <section className={`w-full p-7 flex flex-col bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular">Previous experience</h3>
      <p className="mt-3 text-primary-500 text-xl lg:text-3xl font-medium">Frontend Developer</p>
      <div className="mt-1 flex flex-row flex-wrap gap-row-2 justify-between text-gray-500 dark:text-gray-300 text-sm">
        <p className="font-regular">Verhaert Digital Innovation</p>
        <p className="font-medium">2022 — 2024</p>
      </div>
      <p className="mt-3 text-gray-900 dark:text-white">Obtained a solid foundation in comprehensive web development and implementation.</p>
    </section>
  );
}

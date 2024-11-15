export function ToolstackAndInspiration({ className }: { className?: string }) {
  const toolstack = ['Angular', 'TypeScript', 'HTML', 'SCSS', 'RxJS', 'Unit testing', 'Git', 'Node.JS', 'NestJS', 'GraphQL', 'React', 'Tailwind'];
  const inspirations = ['Mountains', 'Photography', 'Motorcycles', 'Hiking', 'Learning', 'Challenges'];

  return (
    <section className={`w-full p-7 flex flex-col gap-4 bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <article className="flex flex-col gap-3">
        <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular">My toolstack</h3>
        <div className="flex flex-wrap gap-2">
          {toolstack.map((tool) => (
            <div key={tool} className="py-1 px-3 border-[1px] border-dashed border-gray-300 dark:border-gray-600 rounded-full text-sm text-dark-900 dark:text-white">
              {tool}
            </div>
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-3">
        <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular">This inspires me</h3>
        <div className="flex flex-wrap gap-2">
          {inspirations.map((inspiration) => (
            <div key={inspiration} className="py-1 px-3 bg-primary-500 rounded-full text-sm text-white">
              {inspiration}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

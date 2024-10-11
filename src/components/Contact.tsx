import { ArrowRight } from 'lucide-react';

export function Contact({ className }: { className?: string }) {
  return (
    <section className={`w-full p-7 flex flex-col bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular">Contact</h3>
      <div className="mt-3 flex grow flex-col gap-4">
        <p className="text-gray-900 dark:text-white text-md font-medium">Think I’d be a good fit for your team? Let’s collaborate and bring your ideas to life!</p>
        <button
          className="group w-fit h-fit flex flex-row items-center gap-1.5 py-3 px-4 rounded-[32px] overflow-hidden border-[1px] border-dashed border-gray-300 dark:border-gray-600 text-sm text-dark-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white dark:hover:bg-opacity-10"
          onClick={() => (window.location.href = 'mailto:reymen@outlook.be')}
        >
          <p className="text-sm font-medium">Send me an email</p>
          <div className="relative w-4 h-4">
            <ArrowRight className="w-4 h-4 transition-all duration-300 ease-in-out transform group-hover:translate-x-4 opacity-100 group-hover:opacity-0" />
            <ArrowRight className="absolute top-0 -left-4 w-4 h-4 transition-all duration-300 ease-in-out opacity-0 group-hover:translate-x-4 group-hover:opacity-100" />
          </div>
        </button>
      </div>
    </section>
  );
}

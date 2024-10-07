import { LinkedIn } from './icons/LinkedIn';

export function LinkedInSocial({ className }: { className?: string }) {
  return (
    <a className={className} href="https://www.linkedin.com/in/dean-reymen/" target="_blank" rel="noopener noreferrer">
      <section className="group w-full p-7 flex flex-row gap-2 items-center justify-center bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] cursor-pointer">
        <LinkedIn className="w-6 h-6 text-gray-900 dark:text-white" />
        <p className="hidden group-hover:block text-gray-900 dark:text-white text-sm font-medium">Let's connect</p>
      </section>
    </a>
  );
}

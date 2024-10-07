import { GitHub } from './icons/GitHub';

export function GitHubSocial({ className }: { className?: string }) {
  return (
    <a
      className={`group w-full flex items-center justify-center min-h-[70px] bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] cursor-pointer overflow-hidden  ${className}`}
      href="https://github.com/deenr/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="w-fit h-full flex items-center justify-center transition-all duration-300 ease-in-out">
        <GitHub className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0" />
        <p className="ml-2 text-gray-900 dark:text-white text-sm font-medium w-0 group-hover:w-full overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out">Follow me</p>
      </section>
    </a>
  );
}

import { GitHub } from './icons/GitHub';

export function GitHubSocial({ className }: { className?: string }) {
  return (
    <section className={`group w-full p-7 flex flex-row gap-2 items-center justify-center bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] cursor-pointer ${className}`}>
      <GitHub className="w-6 h-6 text-gray-900 dark:text-white" />
      <p className="hidden group-hover:block text-gray-900 dark:text-white text-sm font-medium">Follow me</p>
    </section>
  );
}
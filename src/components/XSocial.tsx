import { X } from './icons/X';

export function XSocial({ className }: { className?: string }) {
  return (
    <a
      className={`group w-full flex min-h-[70px] h-fit bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] cursor-pointer overflow-hidden  ${className}`}
      href="https://x.com/deanreymen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="w-fit h-full flex flex-col justify-between p-7">
        <X className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0" />
        <p className="mt-6 text-gray-900 dark:text-white">@deanreymen</p>
        <p className="text-gray-500 dark:text-gray-300 text-sm font-regular">367 followers</p>
      </section>
    </a>
  );
}

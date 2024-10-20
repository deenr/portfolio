import { LinkedIn } from './icons/LinkedIn';

export function LinkedInSocial({ className }: { className?: string }) {
  return (
    <a
      className={`group w-full flex min-h-[70px] h-fit bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] cursor-pointer overflow-hidden  ${className}`}
      href="https://www.linkedin.com/in/dean-reymen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="w-fit h-full flex flex-col justify-between p-7">
        <LinkedIn className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0" />
        <p className="mt-6 text-gray-900 dark:text-white text-nowrap">
          <span className="hidden xs:inline">in/</span>dean-reymen
        </p>
      </section>
    </a>
    // <a
    //   className={`group w-full flex items-center justify-center min-h-[70px] bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] cursor-pointer overflow-hidden  ${className}`}
    //   href="https://www.linkedin.com/in/dean-reymen/"
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   <section className="w-fit h-full flex gap-2 items-center justify-center transition-all duration-300 ease-in-out">
    //     <LinkedIn className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0" />
    //     <p className="text-gray-900 dark:text-white text-sm font-medium w-0 group-hover:w-full overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out">Let's connect</p>
    //   </section>
    // </a>
  );
}

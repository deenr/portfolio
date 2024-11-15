import { Download } from 'lucide-react';
import resume from '../assets/deanreymen_public_cv.pdf';

export function Experience({ className }: { className?: string }) {
  return (
    <section className={`relative w-full p-7 flex flex-col bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular">My experience</h3>
      <p className="mt-3 text-primary-500 text-xl lg:text-2xl xl:text-3xl font-medium">Frontend Developer</p>
      <div className="mt-1 flex flex-row flex-wrap gap-row-2 justify-between text-gray-500 dark:text-gray-300 text-sm">
        <p className="font-regular">Verhaert Digital Innovation, Oct 2022 — Oct 2024</p>
      </div>
      <p className="mt-3 text-gray-900 dark:text-white">Obtained a solid foundation in comprehensive web development and implementation.</p>
      <a href={resume} download="deanreymen_cv.pdf" target="_blank">
        <button className="absolute top-7 right-7 group w-fit h-fit flex flex-row items-center gap-1.5 py-1 px-3 rounded-[32px] overflow-hidden border-[1px] border-dashed border-gray-300 dark:border-gray-600 text-sm text-dark-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white dark:hover:bg-opacity-10">
          <div className="relative w-4 h-4">
            <Download className="w-4 h-4 transition-all duration-300 ease-in-out transform group-hover:translate-y-4 opacity-100 group-hover:opacity-0" />
            <Download className="absolute -top-4 left-0 w-4 h-4 transition-all duration-300 ease-in-out opacity-0 group-hover:translate-y-4 group-hover:opacity-100" />
          </div>
          <p className="text-sm font-medium">Resume</p>
        </button>
      </a>
    </section>
  );
}

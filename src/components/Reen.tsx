import { ReenIcon } from './icons/Reen';

export function Reen({ className }: { className?: string }) {
  return (
    <section className={`w-full p-7 flex flex-col gap-7 bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <ReenIcon className="min-w-[160px] h-9 min-h-9 text-primary-500" />
      <p className="text-base text-normal text-gray-900 dark:text-white">
        Founder of{' '}
        <a className="group relative underline decoration-primary-500 overflow-hidden hover:no-underline hover:text-primary-500" href="https://reen.digital" target="_blank">
          reen.digital
        </a>
        , where we connect your ideas to their digital realization. With expertise in full-stack development, I’m dedicated to transforming concepts into impactful solutions.
      </p>
    </section>
  );
}

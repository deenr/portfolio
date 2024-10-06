import { Mail } from 'lucide-react';

export function Contact({ className }: { className?: string }) {
  return (
    <section className={`group col-span-2 w-full p-7 flex flex-row gap-2 items-center justify-center bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] cursor-pointer ${className}`}>
      <Mail className="w-6 h-6 text-gray-900 dark:text-white" />
      <p className="hidden group-hover:block text-gray-900 dark:text-white text-sm font-medium">Send me an email</p>
    </section>
  );
}

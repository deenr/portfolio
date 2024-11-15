import { Download } from 'lucide-react';
import resume from '../assets/deanreymen_public_cv.pdf';

interface Card {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

const experiences: Card[] = [
  {
    title: 'Frontend Developer',
    organization: 'Verhaert Digital Innovation',
    duration: 'Oct 2022 — Oct 2024',
    description: 'Obtained a solid foundation in comprehensive web development and implementation.'
  },
  {
    title: 'Master of Electronics and ICT Engineering Technology',
    organization: 'Hasselt University',
    duration: 'Sep 2021 — Jun 2022',
    description: 'Graduated with honors, including a semester abroad at Budapest University of Technology and Economics'
  }
];

export function ExperienceAndEducation({ className }: { className?: string }) {
  return (
    <section className={`relative w-full p-7 flex flex-col bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular mb-3">My experience</h3>
      <div className="flex flex-col gap-7">
        {experiences.map((experience, index) => (
          <Card key={index} {...experience} />
        ))}
      </div>
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

interface CardProps {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export function Card({ title, organization, duration, description }: CardProps) {
  return (
    <article>
      <p className="text-md lg:text-lg xl:text-xl font-medium text-primary-500">{title}</p>
      <p className="mt-1 text-gray-500 dark:text-gray-300 text-sm font-regular">
        {organization}, <span className="text-sm text-gray-500 dark:text-gray-300 font-normal">{duration}</span>
      </p>

      <div className="mt-3 text-gray-900 dark:text-white text-sm font-regular" dangerouslySetInnerHTML={{ __html: description }}></div>
    </article>
  );
}

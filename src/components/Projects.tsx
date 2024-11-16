import { ArrowUpRight, Link2, Stars } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'Rise2Role',
    description: 'Rise2Role streamlines your job search with a simple Kanban board to track applications, stay organized, and visualize progress.',
    technologies: ['React', 'Tailwind', 'shadcn/ui'],
    githubLink: 'https://github.com/deenr/rise2role',
    projectLink: 'https://rise2role.deanreymen.be',
    creationDate: 'Nov 2024'
  },
  // {
  //   title: 'Selfgrown',
  //   description: 'Sphience is a company website showcasing news articles with an admin panel for managing and creating content.',
  //   technologies: ['React', 'TypeScript', 'NodeJS', 'PostgreSQL'],
  //   githubLink: 'https://github.com/deenr/sphience',
  //   projectLink: 'https://sphience.deanreymen.be',
  //   creationDate: 'Jul 2024'
  // },
  {
    title: 'Sphience',
    description: 'Sphience is a company website that features news articles about its activities. It includes an admin panel where administrators can manage and create new articles.',
    technologies: ['Angular', 'TypeScript', 'Supabase'],
    githubLink: 'https://github.com/deenr/sphience',
    projectLink: 'https://sphience.deanreymen.be',
    creationDate: 'Jun 2023'
  }
  // {
  //   title: 'Polymoly',
  //   description: 'Polymoly adds AI-generated challenges to Monopoly with classic or explicit decks—no shuffling, no sign-ups.',
  //   technologies: ['Angular', 'TypeScript', 'Supabase'],
  //   githubLink: 'https://github.com/deenr/polymoly',
  //   projectLink: 'https://polymoly.deanreymen.be/',
  //   creationDate: 'Mar 2023'
  // }
];

export function ProjectList({ className }: { className?: string }) {
  return (
    <section className={`relative w-full p-7 flex flex-col bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular mb-3">Latest projects</h3>
      <div className="flex flex-col gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  projectLink: string;
}

export function ProjectCard({ title, description, technologies, githubLink, projectLink, creationDate }: ProjectCardProps & { creationDate: string }) {
  return (
    <article>
      <div className="flex flex-row flex-wrap justify-between items-center gap-2">
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="group w-fit h-fit flex flex-row items-center gap-1.5 overflow-hidden text-sm text-primary-500">
          <p className="text-md lg:text-lg xl:text-xl font-medium">{title}</p>
          <div className="relative -ml-1 w-4 h-4 lg:w-6 lg:h-6">
            <ArrowUpRight className="w-4 h-4 lg:w-6 lg:h-6 transition-all duration-300 ease-in-out group-hover:-translate-y-6 group-hover:translate-x-6 opacity-100 group-hover:opacity-0" />
            <ArrowUpRight className="absolute top-6 -left-6 w-4 h-4 lg:w-6 lg:h-6 transition-all duration-300 ease-in-out opacity-0 group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:opacity-100" />
          </div>
        </a>
        <div className="flex flex-row gap-4 flex-1 justify-end">
          {title === 'Sphience' ? <Credentials /> : <></>}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit h-fit flex-nowrap hidden xs:flex flex-row items-center gap-1.5 overflow-hidden text-sm text-gray-500 dark:text-gray-300"
          >
            <div className="relative w-4 h-4">
              <Link2 className="w-4 h-4 transition-all duration-300 ease-in-out transform group-hover:translate-x-4 opacity-100 group-hover:opacity-0" />
              <Link2 className="absolute -left-4 top-0 w-4 h-4 transition-all duration-300 ease-in-out opacity-0 group-hover:translate-x-4 group-hover:opacity-100" />
            </div>
            <p className="text-sm font-normal">GitHub</p>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-nowrap">{creationDate}</p>
        </div>
      </div>
      <div className="mt-1 flex flex-row flex-wrap gap-row-2 justify-between text-gray-900 dark:text-white text-sm">
        <p className="font-regular">{description}</p>
      </div>
      <div className="mt-3 flex flex-row flex-wrap gap-2">
        {technologies.map((tech) => (
          <div key={tech} className="py-1 px-3 border-[1px] border-dashed border-gray-300 dark:border-gray-600 rounded-full text-sm text-dark-900 dark:text-white">
            {tech}
          </div>
        ))}
      </div>
      {/* <div className="mt-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
        <p>Created: {creationDate}</p>
      </div> */}
    </article>
  );
}

function Credentials({ className }: { className?: string }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLParagraphElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsTooltipVisible(true);
  };

  const hideTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 300);
  };

  const handleTooltipToggle = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    event.preventDefault();
    setIsTooltipVisible(!isTooltipVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node) && triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setIsTooltipVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`relative inline-block z-50 ${className}`}>
      <div
        ref={tooltipRef}
        id="credentials-tooltip"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className={`absolute z-10 w-64 px-4 py-3 bg-white border border-gray-300 border-dashed rounded-xl shadow-lg dark:bg-black dark:border-gray-600 transition-all duration-300 ease-in-out
          ${isTooltipVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          sm:bottom-full sm:left-1/2 sm:-translate-x-1/2 sm:mb-2
          max-sm:fixed max-sm:bottom-4 max-sm:left-4 max-sm:right-4 max-sm:w-auto`}
      >
        <div className={`text-sm space-y-2 ${isTooltipVisible ? 'animate-fade-in' : ''}`}>
          <p className="text-dark-900 dark:text-white">
            You can log in to the admin panel to have a look by clicking{' '}
            <a href="https://sphience.deanreymen.be/admin" target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">
              here
            </a>
            .
          </p>
          <div className="text-gray-500 dark:text-gray-300">
            <p>Email: sphience@deanreymen.be</p>
            <p>Password: sphiencedemo123</p>
          </div>
        </div>
        <div className="absolute w-3 h-3 bg-white border-b border-r border-gray-300 border-dashed -translate-x-1/2 rotate-45 -bottom-1.5 left-1/2 dark:bg-black dark:border-gray-600 max-sm:hidden"></div>
      </div>
      <div
        ref={triggerRef}
        className="group w-fit h-fit flex flex-nowrap flex-row items-center gap-1.5 overflow-hidden text-sm text-gray-500 dark:text-gray-300 cursor-pointer"
        onClick={handleTooltipToggle}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        aria-describedby="credentials-tooltip"
      >
        <div className="relative w-4 h-4">
          <Stars className="w-4 h-4 transition-all duration-300 ease-in-out transform group-hover:translate-x-4 opacity-100 group-hover:opacity-0" />
          <Stars className="absolute -left-4 top-0 w-4 h-4 transition-all duration-300 ease-in-out opacity-0 group-hover:translate-x-4 group-hover:opacity-100" />
        </div>
        <span className="text-sm font-normal">Demo</span>
      </div>
    </div>
  );
}

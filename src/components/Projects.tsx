import { ArrowUpRight, Link2 } from 'lucide-react';

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
      <div className="flex flex-row justify-between items-center gap-2">
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="group w-fit h-fit flex flex-row items-center gap-1.5 overflow-hidden text-sm text-primary-500">
          <p className="text-md lg:text-lg xl:text-xl font-medium">{title}</p>
          <div className="relative -ml-1 w-4 h-4 lg:w-6 lg:h-6">
            <ArrowUpRight className="w-4 h-4 lg:w-6 lg:h-6 transition-all duration-300 ease-in-out group-hover:-translate-y-6 group-hover:translate-x-6 opacity-100 group-hover:opacity-0" />
            <ArrowUpRight className="absolute top-6 -left-6 w-4 h-4 lg:w-6 lg:h-6 transition-all duration-300 ease-in-out opacity-0 group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:opacity-100" />
          </div>
        </a>
        <div className="flex flex-row gap-4 flex-1 justify-end">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="group w-fit h-fit flex flex-row items-center gap-1.5 overflow-hidden text-sm text-gray-500 dark:text-gray-300">
            <div className="relative w-4 h-4">
              <Link2 className="w-4 h-4 transition-all duration-300 ease-in-out transform group-hover:translate-x-4 opacity-100 group-hover:opacity-0" />
              <Link2 className="absolute -left-4 top-0 w-4 h-4 transition-all duration-300 ease-in-out opacity-0 group-hover:translate-x-4 group-hover:opacity-100" />
            </div>
            <p className="text-sm font-normal">GitHub</p>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-300">{creationDate}</p>
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

import { useState } from 'react';

interface Reference {
  author: string;
  role: string;
  text: string;
}

export function References({ className }: { className?: string }) {
  const references: Reference[] = [
    {
      author: 'Jane Doe',
      role: 'Operations Manager',
      text: 'Working with Dean has been one of the best investments we’ve ever made.'
    },
    {
      author: 'Mary Major',
      role: 'Front-end Developer',
      text: 'Dean is easily one of the most thorough and thoughtful developers I’ve ever met.'
    },
    {
      author: 'Jim Smith',
      role: 'Project Manager',
      text: "As someone who's worked with Dean over the years, I can't recommend him enough."
    }
  ];

  const [referenceIndex, setReferenceIndex] = useState<number>(0);

  return (
    <section className={`w-full p-7 flex flex-col bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <div className="flex flex-row justify-between">
        <h3 className="text-gray-400 dark:text-gray-300 text-base font-regular">References</h3>
        <div className="flex flex-row">
          {references.map((_, index) => (
            <button key={index} aria-label={`Go to reference ${index}`} type="button" className="group cursor-pointer px-1" onClick={() => setReferenceIndex(index)}>
              {index === referenceIndex ? (
                <div className="w-2 h-2 rounded-full bg-primary-500 cursor-pointer"></div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-200 cursor-pointer opacity-20 group-hover:opacity-30"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-gray-900 dark:text-white text-lg font-medium">“{references[referenceIndex]?.text}”</p>
      <div className="mt-1 flex flex-col text-gray-500 dark:text-gray-300 text-sm">
        <p className="font-medium">
          — {references[referenceIndex]?.author}, <span className="font-normal">{references[referenceIndex]?.role}</span>
        </p>
      </div>
    </section>
  );
}
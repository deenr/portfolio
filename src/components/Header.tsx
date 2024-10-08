import { ArrowUpRight } from 'lucide-react';
import profilePicture from '../assets/DSC07675.webp';

export function Header() {
  return (
    <header className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-3 items-center">
        <figure className="w-10 min-w-10 xs:w-12 h-10 min-h-10 xs:h-12 rounded-full select-none">
          <img className="w-full h-full rounded-full " src={profilePicture} alt="Portrait of Dean Reymen" />
        </figure>
        <div>
          <h1 className="text-gray-900 dark:text-white text-base font-medium">Dean Reymen</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm xs:text-base font-regular">Founder of Reen Digital</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        {/* <div className="flex flex-row items-center">
          <div className="relative w-6">
            <div className="absolute w-2 h-2 inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <p className="text-gray-900 dark:text-white text-base font-medium">Available for new opportunities</p>
        </div> */}
        <button
          className="group w-fit h-fit flex flex-row gap-1.5 py-2 xs:py-3 px-3 xs:px-4 items-center rounded-[32px] text-white bg-primary-500 border-[1px] border-white border-opacity-5 selection-secondary"
          onClick={() => (window.location.href = 'mailto:reymen@outlook.be')}
        >
          <p className="text-sm font-medium text-nowrap">
            Contact<span className="hidden xs:inline"> me</span>
          </p>
          <div className="relative hidden xs:block w-4 h-4">
            <ArrowUpRight className="w-4 h-4 transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:translate-x-4 opacity-100 group-hover:opacity-0" />
            <ArrowUpRight className="absolute top-4 -left-4 w-4 h-4 transition-all duration-300 ease-in-out opacity-0 group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:opacity-100" />
          </div>
        </button>
      </div>
    </header>
  );
}

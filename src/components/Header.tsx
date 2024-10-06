import { ArrowUpRight } from 'lucide-react';
import profilePicture from '../assets/DSC07675.webp';

export function Header() {
  return (
    <header className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-3 items-center">
        <figure className="w-12 h-12 rounded-full">
          <img className="w-full h-full rounded-full " src={profilePicture} alt="Portrait of Dean Reymen" />
        </figure>
        <div>
          <h1 className="text-gray-900 dark:text-white text-base font-medium">Dean Reymen</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base font-regular">Founder of Reen Digital</p>
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
        <button className="w-fit h-fit flex flex-row gap-1.5 py-3 px-4 items-center rounded-[32px] bg-primary-500 hover:bg-opacity-30 border-[1px] border-white border-opacity-5 hover:shadow-button-inset">
          <p className="text-white text-sm font-medium">Contact me</p>
          <ArrowUpRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </header>
  );
}

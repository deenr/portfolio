import { memo } from 'react';

// const HexagonSVG = memo(({ className }: { className?: string }) => (
//   <svg className={className} width="2925" height="2517" viewBox="0 0 2925 2517" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path className="fill-primary-500" d="M1462.5 790L2001.57 975.431L2134.71 1392.09L1761.66 1726.23H1163.34L790.287 1392.09L923.427 975.431L1462.5 790Z" />
//   </svg>
// ));

const Background = () => {
  return (
    <div className="absolute -z-10 overflow-hidden inset-0 w-full h-full bg-primary-500">
      {/* <HexagonSVG className="absolute z-10 -top-[1040px] -right-[2030px] md:-right-[1950px] lg:-right-[1860px] xl:-right-[1860px]" />
      <HexagonSVG className="absolute z-10 top-0 -left-[1500px] md:-left-[1400px] scale-2" />
      <div className="absolute hidden xl:block z-20 inset-0 w-full h-full backdrop-blur-[250px]"></div>
      <div id="background" className="absolute z-20 inset-0 w-full h-full backdrop-blur-[250px] lg:backdrop-blur-[500px]"></div> */}
    </div>
  );
};

export default memo(Background);

export function Background() {
  //   useEffect(() => {
  //     (window as any).grained('#background', {
  //       animate: true,
  //       patternWidth: 512,
  //       patternHeight: 256,
  //       grainOpacity: 0.05,
  //       grainDensity: 1,
  //       grainWidth: 1,
  //       grainHeight: 1
  //     });
  //   }, []);

  return (
    <div className="absolute -z-10 overflow-hidden inset-0 w-full h-full bg-white dark:bg-black">
      <svg
        className="absolute z-10 -top-[1040px] -right-[2030px] md:-right-[1950px] lg:-right-[1860px] xl:-right-[1860px]"
        width="2925"
        height="2517"
        viewBox="0 0 2925 2517"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="fill-primary-500" d="M1462.5 790L2001.57 975.431L2134.71 1392.09L1761.66 1726.23H1163.34L790.287 1392.09L923.427 975.431L1462.5 790Z" />
      </svg>
      <svg className="absolute z-10 top-0 -left-[1500px] md:-left-[1400px] scale-2" width="2345" height="1937" viewBox="0 0 2345 1937" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-primary-500" d="M1172.5 500L1711.57 685.431L1844.71 1102.09L1471.66 1436.23H873.337L500.287 1102.09L633.427 685.431L1172.5 500Z" />
      </svg>
      <div className="absolute hidden xl:block z-20 inset-0 w-full h-full backdrop-blur-[250px]"></div>
      <div id="background" className="absolute z-20 inset-0 w-full h-full backdrop-blur-[250px] lg:backdrop-blur-[500px]"></div>
    </div>
  );
}

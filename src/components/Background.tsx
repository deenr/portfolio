import React, { memo, useEffect, useRef } from 'react';
import { useTheme } from './providers/ThemeProvider';

const HexagonSVG: React.FC<{ className?: string }> = memo(({ className }) => (
  <svg className={className} width="2925" height="2517" viewBox="0 0 2925 2517" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#e0472a" fillOpacity="0.2" d="M1462.5 790L2001.57 975.431L2134.71 1392.09L1761.66 1726.23H1163.34L790.287 1392.09L923.427 975.431L1462.5 790Z" />
  </svg>
));

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    const drawBackground = () => {
      if (!ctx) return;

      const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2);

      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(224, 71, 42, 0.2)'); // #e0472a with 20% opacity
        gradient.addColorStop(1, 'rgba(224, 71, 42, 0)'); // #e0472a with 0% opacity
        ctx.fillStyle = 'rgb(0, 0, 0)';
      } else {
        gradient.addColorStop(0, 'rgba(224, 71, 42, 0.2)'); // #e0472a with 20% opacity
        gradient.addColorStop(1, 'rgba(224, 71, 42, 0)'); // #e0472a with 0% opacity
        ctx.fillStyle = 'rgb(255, 255, 255)';
      }

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <div className="absolute -z-10 overflow-hidden inset-0 w-full h-full bg-white dark:bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <HexagonSVG className="absolute z-10 -top-[900px] sm:-top-[800px] md:-top-[1040px] -right-[1940px] xs:-right-[1850px] md:-right-[1950px] lg:-right-[1860px] xl:-right-[1860px] animate-float" />
      <HexagonSVG className="absolute z-10 top-0 -left-[1840px] md:-left-[2000px] lg:-left-[1400px] scale-100 md:scale-150 lg:scale-100 animate-float-reverse" />
      <div className="absolute z-20 inset-0 w-full h-full backdrop-blur-[100px] lg:backdrop-blur-[150px] xl:backdrop-blur-[200px]"></div>
    </div>
  );
};

export default memo(Background);

import { useEffect } from 'react';
import darkBackground from '../assets/background-dark.svg';
import lightBackground from '../assets/background-light.svg';
import { useTheme } from './providers/ThemeProvider';

export function Background() {
  const { theme } = useTheme();

  useEffect(() => {
    // Preload both images
    const img = new Image();
    img.src = theme === 'light' ? darkBackground : lightBackground;
  }, [theme]);

  return (
    <>
      <img className="absolute -z-10 overflow-hidden inset-0 w-full h-full object-fill select-none" src={theme === 'light' ? lightBackground : darkBackground} alt="" />
    </>
  );
}

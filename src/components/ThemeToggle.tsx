import { Moon, Sun } from 'lucide-react';
import { useTheme } from './providers/ThemeProvider';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`w-[46px] h-[46px] flex flex-row py-3 px-3 items-center justify-center rounded-[32px] border-[1px] border-dashed border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-white dark:hover:bg-opacity-10 ${className}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon className="w-4 h-4 text-dark-900 dark:text-white" /> : <Sun className="w-4 h-4 text-gray-900 dark:text-white" />}
    </button>
  );
}

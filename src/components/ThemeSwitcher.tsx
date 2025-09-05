import { useTheme } from '../hooks/useTheme';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
}

export default ThemeSwitcher;

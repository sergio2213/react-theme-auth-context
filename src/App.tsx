import { useEffect } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="app-container">
      <h1>Hello, World!</h1>
      <h2>Current theme: {theme}</h2>
      <ThemeSwitcher />
    </div>
  );
}

export default App;

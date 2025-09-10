import { useEffect } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './hooks/useTheme';
import './App.css';
import './styles/global.css';
import { Link, Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import { useAuth } from './hooks/useAuth';

function App() {
  const { theme } = useTheme();
  const { user, isLoggedIn, logout } = useAuth();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="app-nav">
          <h1 className="app-title">Hello, {user?.name ? user.name : 'Guest'}!</h1>
          <ThemeSwitcher />
          {isLoggedIn ? (
            <div className="user-profile">
              <button className="logout-button" onClick={logout}>
                Log Out
              </button>
            </div>
          ) : (
            <Link className="login-link" to="/login">
              Log In
            </Link>
          )}
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  function login(username: string) {
    const userData = { name: username };
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }

  function logout() {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user');
  }

  const value = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as { name: string };
        setUser(parsedUser);
        setIsLoggedIn(true);
      } catch (error: unknown) {
        console.log(error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

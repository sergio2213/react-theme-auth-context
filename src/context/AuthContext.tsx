import { createContext } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  user: { name: string } | null;
  login: (username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

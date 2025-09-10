import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

function Login() {
  const [username, setUsername] = useState<string>('');
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
    } else {
      console.log('Please enter a username');
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      void navigate('/dashboard');
    }
  }, [isLoggedIn]);

  return (
    <div className="page-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={handleChange} placeholder="Enter username" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
export default Login;

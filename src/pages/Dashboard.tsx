import { Link } from 'react-router';
import { useAuth } from '../hooks/useAuth';

function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="page-container">
      <h2>Dashboard</h2>
      <p>Welcome to your private dashboard, {user?.name}!</p>
      <p>This page is only visible to authenticated users.</p>
      <Link to="/" className="link">
        Go to Home
      </Link>
    </div>
  );
}

export default Dashboard;

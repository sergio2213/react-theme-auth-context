import { useAuth } from '../hooks/useAuth';

function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your private dashboard, {user?.name}!</p>
      <p>This page is only visible to authenticated users.</p>
    </div>
  );
}

export default Dashboard;

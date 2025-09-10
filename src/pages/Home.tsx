import { Link } from 'react-router';

function Home() {
  return (
    <div className="page-container">
      <h2>Home Page</h2>
      <p>This is the public home page. You can access it without logging in.</p>
      <Link className="link" to="/dashboard">
        Go to Dashboard (protected)
      </Link>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container left-to-pos text-center mt-5">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link className="btn btn-info" to="/about">
        Go to about page
      </Link>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <p>Oh no, the page you're looking for doesn't exist!</p>
      <Link className="btn btn-info" to="/">
        Return to Home Page
      </Link>
    </div>
  );
}

export default NotFound;

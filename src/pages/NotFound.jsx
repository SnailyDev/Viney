import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container error-light text-center mt-5">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <p>Uh oh, the page you are looking for does not exist!</p>
      <Link className="btn btn-info" to="/">
        Go back to home
      </Link>
    </div>
  );
}

export default NotFound;

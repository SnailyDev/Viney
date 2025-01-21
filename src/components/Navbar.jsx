import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-start">
        <Link className="navbar-brand" to="/">
          Vinex
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link to="/signin" className="btn btn-light ms-auto">
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mt-3 d-flex flex-column min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;

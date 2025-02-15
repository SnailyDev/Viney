import ScrollLink from "../elements/ScrollLink";
function Footer() {
  return (
    <footer className="container mt-auto bg-dark">
      <div className="row">
        <div className="col-sm-2">
          <p>Quick Links</p>
          <ul>
            <li>
              <ScrollLink className="b-link" to="/">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink className="b-link" to="/discover">
                Discover
              </ScrollLink>
            </li>
            <li>
              <ScrollLink className="b-link" to="/contact">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <p>Privacy</p>
          <ul>
            <li>
              <ScrollLink className="b-link" to="/privacy">
                Privacy Policy
              </ScrollLink>
            </li>
            <li>
              <ScrollLink className="b-link" to="/terms">
                Terms Of Service
              </ScrollLink>
            </li>
            <li>
              <ScrollLink className="b-link" to="/contact">
                About Us
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center">Copyright &copy; 2025 Viney.</p>
    </footer>
  );
}

export default Footer;

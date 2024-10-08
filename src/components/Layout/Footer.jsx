import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-body">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <Link to={"/about"}>Read More</Link>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: MasalFood@example.com</p>
          <p>Phone: (+994) 55-555-55-55</p>
          <Link to={"/contact"}>Contact us</Link>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MasalFood. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

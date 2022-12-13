import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>company name</h4>
              <ul>
                <li>
                  <a href="#">
                    [1] Line 58:17: The href attribute requires a valid value to
                    be accessible. Provide a valid, navigable address as the
                    href value. If you cannot provide a valid href, but still
                    need the element to resemble a link, use a button and change
                    it with appropriate styles. Learn more:
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

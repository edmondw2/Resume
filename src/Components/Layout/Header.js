import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

function Header() {
  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="navbarlang py-3 clearfix">
          <Link to="/" className="LinkTo">
            Persian
          </Link>
          <span> | </span>
          <Link to="/english" className="LinkTo">
            English
          </Link>
        </div>
        <div className="py-3 clearfix">
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://twitter.com"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                    <span className="menu-title sr-only">Twitter</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                    <span className="menu-title sr-only">Facebook</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/edmond0_0nz"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                    <span className="menu-title sr-only">Instagram</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/edmondw2"
                    title="Github"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
                    <span className="menu-title sr-only">Github</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //Button
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-exchange-alt" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a to="/service" className="nav-links" onClick={closeMobileMenu}>
                Service
              </a>
            </li>
            <li className="nav-item">
              <a to="/product" className="nav-links" onClick={closeMobileMenu}>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                Sign up
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

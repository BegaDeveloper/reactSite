import React from "react";
import Button from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to recive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unscubribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer=link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <a href="#">How it works</a>
            <a href="#">Testimonial</a>
            <a href="#">Investors</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer=link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
          </div>
        </div>
        <div className="footer=link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a href="#">Post video</a>
            <a href="#">Save video</a>
            <a href="#">Agency</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer=link-wrapper">
          <div className="footer-link-items">
            <h2>Sponsor</h2>
            <a href="#">Sponsorship</a>
            <a href="#">Our team</a>
            <a href="#">Places</a>
            <a href="#">ReadMe</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

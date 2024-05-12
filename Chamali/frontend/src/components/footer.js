import React from 'react';
import '../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are committed to improving sustainability and providing tools and resources to measure environmental impact.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: contact@sustainability.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Connect with us on social media:</p>
          {}
          <div className="social-icons">
            {}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Sustainability, Inc. | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

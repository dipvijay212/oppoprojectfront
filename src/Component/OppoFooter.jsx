import React from "react";
import "./OppoFooter.css";

const OppoFooter = () => {
  return (
    
    <footer className="oppo-footer">
      <div className="oppo-footer-notes">
        <p>*The product pictures are for reference only, please refer to the actual product.</p>
        <p>*The UI is only for demonstration purposes, please refer to the UI design of actual product.</p>
      </div>
      <hr className="oppo-footer-divider" />

      <div className="oppo-footer-links">
        <div className="footer-column">
          <h4>Smartphones</h4>
          <ul>
            <li>OPPO Find N3 Flip</li>
            <li>OPPO Find X8 Pro</li>
            <li>OPPO Find X8</li>
            <li>OPPO Reno13 Pro 5G</li>
            <li>OPPO Reno13 5G</li>
            <li>OPPO Reno12 Pro 5G</li>
            <li>OPPO Reno12 5G</li>
            <li>OPPO F27 Pro+ 5G</li>
            <li>OPPO F27 5G</li>
            <li>OPPO A3 Pro 5G</li>
            <li>OPPO A3 5G</li>
            <li>OPPO A3x 5G</li>
            <li>OPPO A3x</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>IoT Products</h4>
          <ul>
            <li>OPPO Pad Air</li>
            <li>OPPO Enco Buds2</li>
            <li>OPPO Enco Air2 Pro</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Special Offers</h4>
          <ul>
            <li>Exchange Program</li>
            <li>Education Discount</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Service Centers & Reservation</li>
            <li>Warranty Check</li>
            <li>OPPO Update</li>
            <li>Terms and Conditions</li>
            <li>E-waste Management</li>
            <li>Security Response Center</li>
            <li>Warranty Policy</li>
            <li>Investor</li>
            <li>Protection Plan</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About OPPO</h4>
          <ul>
            <li>OPPO Store</li>
            <li>Our Story</li>
            <li>Technology</li>
            <li>Newsroom</li>
            <li>Campaign</li>
            <li>Career</li>
            <li>ColorOS</li>
            <li>Store Locator</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>OPPO Community</h4>
          <ul>
            <li>OPPO Community</li>
          </ul>
        </div>
      </div>
    </footer>
    
  );
};

export default OppoFooter;

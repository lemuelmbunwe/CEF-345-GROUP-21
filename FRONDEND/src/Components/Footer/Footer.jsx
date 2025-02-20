import React from 'react';
import './Footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are dedicated to helping you find your dream home with ease and efficiency.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Why Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: damar@gmail.com</p> 
                    <p>Phone: +237 65262599</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-media">
                        <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025Damar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us:</p>
      
      <div className="contact-methods">
        <div className="contact-item">
          <h2>Email</h2>
          <p>
            <a href="mailto:your-email@example.com">gildasnoka@mail.com</a>
          </p>
        </div>
        
        <div className="contact-item">
          <h2>WhatsApp</h2>
          <p>
            <a href="https://wa.me/+237652625499" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
          </p>
        </div>

        <div className="contact-item">
          <h2>Phone</h2>
          <p>+237652625499</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
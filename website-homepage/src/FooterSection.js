import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='class1'></div>
        <div className="footer-logo">
          {/* Replace with your logo image */}
          <img src="https://media.licdn.com/dms/image/C510BAQEzP4y4oeD4IA/company-logo_200_200/0/1631369563060?e=2147483647&v=beta&t=HMJHH863nRQcolzzGixkspvq8nFEzhuuzkimJUJDg7Q" alt="Company Logo" />
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-info">
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
          <p className="footer-copyright">&copy; 2024 Bluetick Consultants LLP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

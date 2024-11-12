import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>About Us</h3>
          <p style={styles.footerText}>
            We are a logistics company providing reliable and efficient services
            for all your freight needs. Contact us for a quote and experience professional service.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Quick Links</h3>
          <ul style={styles.footerList}>
            <li><a href="#home" style={styles.footerLink}>Home</a></li>
            <li><a href="#services" style={styles.footerLink}>Services</a></li>
            <li><a href="#about" style={styles.footerLink}>About Us</a></li>
            <li><a href="#contact" style={styles.footerLink}>Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Contact Us</h3>
          <p style={styles.footerText}>1234 Logistics Ave, Business City, Country</p>
          <p style={styles.footerText}>Email: info@logistics.com</p>
          <p style={styles.footerText}>Phone: +123 456 7890</p>
        </div>

        {/* Social Media Icons */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.socialIcon}>Facebook</a>
            <a href="https://twitter.com" style={styles.socialIcon}>Twitter</a>
            <a href="https://instagram.com" style={styles.socialIcon}>Instagram</a>
            <a href="https://linkedin.com" style={styles.socialIcon}>LinkedIn</a>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.footerCopy}>© 2024 Logistics Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 20px',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  footerSection: {
    flex: '1 1 250px',
    margin: '20px',
  },
  footerTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  footerText: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
  },
  footerLink: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'block',
    marginBottom: '8px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  socialIcon: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '8px',
    borderRadius: '5px',
    backgroundColor: '#555',
  },
  footerBottom: {
    textAlign: 'center',
    padding: '20px 0 0',
    borderTop: '1px solid #444',
    marginTop: '20px',
  },
  footerCopy: {
    fontSize: '0.875rem',
    color: '#aaa',
  },
};

export default Footer;

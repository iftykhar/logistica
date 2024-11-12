import React from 'react';
// import aboutImage from './assets/img/about.jpg';

const AboutSection = () => {
  return (
    <section style={styles.aboutContainer}>
        <div style={styles.imageContainer}>
            <img src="#"  alt="Logistics handling" style={styles.image} />
        </div>
      <div style={styles.textContainer}>
        <h3 style={{ color:'skyblue' }}> ABOUT US </h3>
        <h2 style={styles.title}>Quick Transport and Logistics Solutions</h2>
        <p style={styles.description}>
          We offer fast, efficient, and reliable transport and logistics solutions. Our team ensures that your shipments arrive safely and on time, no matter the destination.
        </p>
        <div>
          <button style={styles.buttonPrimary}>Learn More</button>
          {/* <button style={styles.buttonSecondary}>Our Services</button> */}
        </div>
      </div>
      
    </section>
  );
};

const styles = {
  aboutContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 10%',
    backgroundColor: '#f8f9fa',
  },
  textContainer: {
    maxWidth: '50%',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  buttonPrimary: {
    background: 'red',
    color: 'white',
    padding: '10px 20px',
    marginRight: '10px',
    border: 'none',
    cursor: 'pointer',
  },
  buttonSecondary: {
    background: 'white',
    color: 'red',
    padding: '10px 20px',
    border: '1px solid red',
    cursor: 'pointer',
  },
  imageContainer: {
    maxWidth: '45%',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default AboutSection;

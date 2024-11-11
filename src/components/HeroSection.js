import React from 'react';
import carouselImage from '../assets/img/carousel-1.jpg';

const HeroSection = () => {
  return (
    <section style={styles.heroContainer}>
      <h1 style={styles.heroTitle}>#1 Place For Your Logistics Solution</h1>
      <p style={styles.heroSubtitle}>
        We offer professional logistics services across various industries, prioritizing timely and secure delivery.
      </p>
      <div>
        <button style={styles.buttonPrimary}>Email Now</button>
        <button style={styles.buttonSecondary}>Free Quote</button>
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
    background: 'url(${carouselImage}) center center/cover',
    color: 'white',
    padding: '100px 0',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '30px',
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
};

export default HeroSection;

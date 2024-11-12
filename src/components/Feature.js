import React from 'react'

const Feature = () => {
  return (
    
      <section style={styles.featurContainer}>
        
      <div style={styles.textContainer}>
        <h3 style={{ color:'skyblue' }}> Feature </h3>
        <h2 style={styles.title}>Quick Transport and Logistics Solutions</h2>
        <p style={styles.description}>
          WWe Are Trusted Logistics Company Since 1990
        </p>
        <div>
            <div>
                <h3>Worldwide Service</h3>
                <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
            </div>
            <div>
                <h3>Worldwide Service</h3>
                <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
            </div>
            <div>
                <h3>Worldwide Service</h3>
                <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
            </div>
          {/* <button style={styles.buttonPrimary}>Learn More</button> */}
          {/* <button style={styles.buttonSecondary}>Our Services</button> */}
        </div>
      </div>
      <div style={styles.imageContainer}>
            <img src="#"  alt="Logistics handling" style={styles.image} />
        </div>
    </section>
    
  )
}


const styles = {
    featurContainer: {
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

export default Feature

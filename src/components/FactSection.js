import React from 'react'

const FactSection = () => {
  return (
    <div>
      <section style={styles.factContainer}>
        
      <div style={styles.textContainer}>
        <h3 style={{ color:'skyblue' }}> Some Facts </h3>
        <h2 style={styles.title}>#1 Place To Manage All Of Your Shipments</h2>
        <p style={styles.description}>
          We offer fast, efficient, and reliable transport and logistics solutions. Our team ensures that your shipments arrive safely and on time, no matter the destination.
        </p>
        <div>
          <button style={styles.buttonPrimary}>Learn More</button>
          {/* <button style={styles.buttonSecondary}>Our Services</button> */}
        </div>
      </div>
        <div style={styles.statContainer}>
            <div style={styles.col}>
                <div style={styles.statBox}>
                    <h2 style={styles.statNumber}>1,234</h2>
                    <p style={styles.statLabel}>Shipments Handled</p>
                </div>
                <div style={styles.statBox}>
                    <h2 style={styles.statNumber}>1,234</h2>
                    <p style={styles.statLabel}>Shipments Handled</p>
                </div>
            </div>
            <div style={styles.col2}>
                <div style={styles.statBox}>
                    <h2 style={styles.statNumber}>1,234</h2>
                    <p style={styles.statLabel}>Shipments Handled</p>
                </div>
            </div>
            
        </div>
    </section>
    </div>
  )
}



const styles = {
    factContainer: {
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
    statContainer: {
      maxWidth: '50%',
      display: 'flex'
    },
    statBox: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '200px',
      },
      statNumber: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '10px',
      },
      statLabel: {
        fontSize: '1rem',
        color: '#555',
      },
      col: {
        maxWidth: '50%',
        padding: '2px 10px 10%',
        
      },
      col2: {
        maxWidth: '50%',
        padding: '2px 10px 10%',
        alignItems: 'center',
        textAlign: 'center'
      }

  };
  

export default FactSection

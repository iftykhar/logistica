import React from 'react';

const Statssection = () => {
  return (
    <section style={styles.statsContainer}>
      <div style={styles.statBox}>
        <h2 style={styles.statNumber}>1,234</h2>
        <p style={styles.statLabel}>Happy Clients</p>
      </div>
      <div style={styles.statBox}>
        <h2 style={styles.statNumber}>1,234</h2>
        <p style={styles.statLabel}>Countries Covered</p>
      </div>
      <div style={styles.statBox}>
        <h2 style={styles.statNumber}>1,234</h2>
        <p style={styles.statLabel}>Years of Experience</p>
      </div>
      <div style={styles.statBox}>
        <h2 style={styles.statNumber}>1,234</h2>
        <p style={styles.statLabel}>Shipments Handled</p>
      </div>
    </section>
  );
};

const styles = {
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px 0',
    backgroundColor: '#f8f9fa',
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
};

export default Statssection;

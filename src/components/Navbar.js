import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav style={styles.container}>
      <div style={styles.logo}>
        <h2 style={styles.logoText}>Logistica</h2>
      </div>
      <div>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Home</li>
        <li style={styles.menuItem}>About</li>
        <li style={styles.menuItem}>Services</li>
        <li style={styles.menuItem}>Contact</li>
      </ul>
      </div>
      <div>
        <p>Logo</p><p>0123544</p>
      </div>
    </nav>
    </div>
  )
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: '10px 20px',
    },
    logo: {
      color: 'whitesmoke',
    },
    logoText: {
      margin: 0,
    },
    menu: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    menuItem: {
      margin: '0 15px',
      color: 'white',
      cursor: 'pointer',
    },
  };

export default Navbar

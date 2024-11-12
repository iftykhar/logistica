import React from 'react'

const Ourservice = () => {
  return (
    <div style={styles.container}>
      <h3 style={{ color:'skyblue' }}>Our Service </h3>
      <h2 style={styles.title}>Quick Transport and Logistics Solutions</h2>
    </div>
  )
}

const styles={
    container: {
        alignItems: 'center',
        textAlign:'center',
    },
    title: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px',
      },
};

export default Ourservice

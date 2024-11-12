import React from 'react';

const FreightCard = ({ image, title, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <button style={styles.buttonPrimary}>Learn More</button>
    </div>
  );
};

const FreightCards = () => {
  const cardData = [
    {
      image: 'src/assets/img/service-1.jpg', 
      title: 'Air Freight',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
    {
      image: 'src/assets/img/service-2.jpg',
      title: 'Ocean Freight',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
    {
      image: 'src/assets/img/service-3.jpg',
      title: 'Road Freight',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
    },
  ];

  return (
    <div style={styles.container}>
      {cardData.map((card, index) => (
        <FreightCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
  },
  card: {
    width: '300px',
    border: '1px solid #f0f0f0',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '10px',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '15px 0 10px',
  },
  description: {
    fontSize: '0.9rem',
    color: '#555',
    padding: '0 15px',
    marginBottom: '40px',
  },
  buttonPrimary: {
    background: 'red',
    color: 'white',
    padding: '10px 20px',
    marginRight: '10px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default FreightCards;

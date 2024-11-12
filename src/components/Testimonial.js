import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Alice Johnson',
      position: 'CEO, Company X',
      review: 'This service is exceptional! They handled everything efficiently and professionally. Highly recommended!',
      imgSrc: '/src/assets/img/testimonial-1.jpg',
    },
    {
      name: 'Bob Williams',
      position: 'Marketing Manager, Company Y',
      review: 'Very satisfied with the logistics support provided. The team was prompt, friendly, and took care of every detail.',
      imgSrc: '/src/assets/img/testimonial-2.jpg',
    },
    {
      name: 'Catherine Lee',
      position: 'Operations Head, Company Z',
      review: 'An outstanding experience! They exceeded our expectations in every way. We will definitely use their services again.',
      imgSrc: '/src/assets/img/testimonial-3.jpg',
    },
  ];

  return (
    <section style={styles.testimonialSection}>
      <h2 style={styles.title}>What Our Clients Say</h2>
      <div style={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={styles.card}>
            <img src={testimonial.imgSrc} alt={testimonial.name} style={styles.image} />
            <h3 style={styles.name}>{testimonial.name}</h3>
            <p style={styles.position}>{testimonial.position}</p>
            <p style={styles.review}>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  testimonialSection: {
    padding: '50px 20px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    padding: '50px 10%',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#333',
  },
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  position: {
    fontSize: '1rem',
    color: '#777',
    marginBottom: '10px',
  },
  review: {
    fontSize: '1rem',
    color: '#555',
    fontStyle: 'italic',
  },
};

export default Testimonial;

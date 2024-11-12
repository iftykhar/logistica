import React, { useState } from 'react';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    freightType: '',
    specialNote: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Your quote request has been submitted!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.infoSection}>
        <h3 style={styles.heading}>GET A QUOTE</h3>
        <h2 style={styles.subheading}>Request A Free Quote!</h2>
        <p style={styles.description}>
          Tempor erat elit rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.
        </p>
        <div style={styles.contact}>
          <div style={styles.icon}>🎧</div>
          <div>
            <p style={styles.contactText}>Call for any query!</p>
            <p style={styles.contactNumber}>+012 345 6789</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputRow}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        
        <div style={styles.inputRow}>
          <input
            type="tel"
            name="phone"
            placeholder="Your Mobile"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <select
            name="freightType"
            value={formData.freightType}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select A Freight</option>
            <option value="Air Freight">Air Freight</option>
            <option value="Ocean Freight">Ocean Freight</option>
            <option value="Road Freight">Road Freight</option>
          </select>
        </div>
        
        <textarea
          name="specialNote"
          placeholder="Special Note"
          value={formData.specialNote}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>
        
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 10%',
    backgroundColor: '#f8f9fa',
  },
  infoSection: {
    flex: 1,
    padding: '20px',
  },
  heading: {
    color: '#00bfa5',
    fontSize: '1rem',
    marginBottom: '5px',
  },
  subheading: {
    fontSize: '1.8rem',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
    marginBottom: '20px',
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
  },
  icon: {
    fontSize: '2rem',
    color: 'red',
    marginRight: '10px',
  },
  contactText: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  contactNumber: {
    color: 'red',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
    padding: '20px',
  },
  inputRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    resize: 'vertical',
    marginBottom: '15px',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default QuoteRequest;

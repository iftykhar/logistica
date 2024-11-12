import React from 'react'

const PricingPlans = () => {
    const plans = [
        {
          name: 'Basic Plan',
          price: '$49.00',
          features: ['HTML5 & CSS3', 'Easy Customize', 'Responsive Layout'],
        },
        {
          name: 'Standard Plan',
          price: '$99.00',
          features: ['HTML5 & CSS3', 'Easy Customize', 'Responsive Layout'],
        },
        {
          name: 'Advanced Plan',
          price: '$149.00',
          features: ['HTML5 & CSS3', 'Easy Customize', 'Responsive Layout'],
        },
      ];
    
      return (
        <section style={styles.container}>
          <h2 style={styles.heading}>Perfect Pricing Plan</h2>
          <div style={styles.plansContainer}>
            {plans.map((plan, index) => (
              <div key={index} style={styles.planCard}>
                <h3 style={styles.planName}>{plan.name}</h3>
                <p style={styles.planPrice}>{plan.price}</p>
                <hr/>
                <ul style={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={styles.feature}>{feature}</li>
                  ))}
                </ul>
                <button style={styles.button}>Choose Plan</button>
              </div>
            ))}
          </div>
        </section>
      );
}

const styles = {
    container: {
      padding: '50px 0',
      textAlign: 'center',
      justifyContent:'space-evenly'
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '30px',
    },
    plansContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    planCard: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    planName: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '10px',
    },
    planPrice: {
      fontSize: '1.25rem',
      color: '#555',
      marginBottom: '15px',
    },
    featuresList: {
      listStyleType: 'none',
      padding: 0,
      textAlign:'start',
      marginBottom: '20px',
    },
    feature: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '5px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

export default PricingPlans

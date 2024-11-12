import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      imgSrc: '/src/assets/img/team-1.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      imgSrc: '/src/assets/img/team-2.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Designer',
      imgSrc: '/src/assets/img/team-3.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Sarah Williams',
      role: 'Project Manager',
      imgSrc: '/src/assets/img/team-4.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <section style={styles.teamSection}>
      <h2 style={styles.title}>Meet Our Team</h2>
      <div style={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.card}>
            <img src={member.imgSrc} alt={member.name} style={styles.image} />
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.role}>{member.role}</p>
            <div style={styles.socialLinks}>
              <a href={member.social.twitter} style={styles.socialIcon}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.social.facebook} style={styles.socialIcon}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={member.social.linkedin} style={styles.socialIcon}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  teamSection: {
    padding: '50px 20px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 10%',
    
  },
  title: {
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#333',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: '1rem',
    color: '#777',
    marginBottom: '15px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  socialIcon: {
    color: '#007bff',
    fontSize: '1.2rem',
  },
};

export default TeamSection;

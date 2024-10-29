// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.contactSection}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.description}>I'm open to collaborations, new opportunities, or just a friendly chat. Feel free to reach out!</p>
      <p style={styles.contactInfo}>📞 Phone: 9555858196</p>
      <p style={styles.contactInfo}>📧 Email: <a href="mailto:harshitprofessional63@gmail.com" style={styles.emailLink}>harshitprofessional63@gmail.com</a></p>
      <p style={styles.contactInfo}>💼 LinkedIn: <a href="https://www.linkedin.com/in/harshitdubey/" target="_blank" rel="noopener noreferrer" style={styles.link}>linkedin.com/in/harshitdubey</a></p>
      <p style={styles.contactInfo}>🐙 GitHub: <a href="https://github.com/harshitrjit" target="_blank" rel="noopener noreferrer" style={styles.link}>github.com/harshitrjit</a></p>
    </section>
  );
};

const styles = {
  contactSection: {
    padding: '40px 20px',
    backgroundColor: '#f4f7fa',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  contactInfo: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
  },
  emailLink: {
    color: '#1e90ff',
    textDecoration: 'none',
  },
  link: {
    color: '#1e90ff',
    textDecoration: 'none',
  },
};

export default Contact;

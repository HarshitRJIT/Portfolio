// src/components/Contact.jsx
import React from 'react';

const Skills = () => {
  return (
    <div>
      <h3 style={styles.mainHeading}>Skills</h3>
      <section id="Skills" style={styles.skillsSection}>
       
      <div style={styles.categoryBox}>
        <h3 style={styles.categoryHeading}>FrontEnd</h3>
        <ul style={styles.skillList}>
          <li style={styles.skillItem}>HTML</li>
          <li style={styles.skillItem}>CSS</li>
          <li style={styles.skillItem}>Tailwind CSS</li>
          <li style={styles.skillItem}>Bootstrap</li>
          <li style={styles.skillItem}>JavaScript</li>
        </ul>
      </div>

      <div style={styles.categoryBox}>
        <h3 style={styles.categoryHeading}>Database</h3>
        <ul style={styles.skillList}>
          <li style={styles.skillItem}>MongoDB</li>
          <li style={styles.skillItem}>SQL</li>
        </ul>
      </div>

      <div style={styles.categoryBox}>
        <h3 style={styles.categoryHeading}>BackEnd</h3>
        <ul style={styles.skillList}>
          <li style={styles.skillItem}>Node.js</li>
          <li style={styles.skillItem}>React.js</li>
          <li style={styles.skillItem}>Express.js</li>
          <li style={styles.skillItem}>APIs, templating, deployment</li>
          <li style={styles.skillItem}>Java (Working on it...)</li>
          <li style={styles.skillItem}>Python (Preparing...)</li>
        </ul>
      </div>

      <div style={styles.categoryBox}>
        <h3 style={styles.categoryHeading}>Open Source</h3>
        <ul style={styles.skillList}>
          <li style={styles.skillItem}>Git & GitHub</li>
        </ul>
      </div>
    </section>
    </div>
  );
};

const styles = {

mainHeading: {
  
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '30px',
  textAlign: 'center',
},
  skillsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '40px 20px',
    backgroundColor: '#f4f7fa',
    // minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  
  categoryBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '250px',
    width: '100%',
    textAlign: 'center',
  },
  categoryHeading: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: '10px',
    borderBottom: '2px solid #1e90ff',
    paddingBottom: '5px',
  },
  skillList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  skillItem: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '8px',
  },
};

export default Skills;

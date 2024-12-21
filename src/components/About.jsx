// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src="./src/assets/HD.jpg" alt="err" />
      <p>
          Hi, I'm **Harshit Dubey**, a dedicated **MERN Stack Developer** with a passion for crafting exceptional web experiences. I'm proficient in both frontend and backend technologies, enabling me to build robust and scalable applications.
        </p>
        <p>
          My focus lies in creating intuitive user interfaces, optimizing performance, and ensuring seamless user interactions. I'm always eager to learn and explore new technologies to stay at the forefront of web development.
        </p>
        <div className="cv" style={styles.cvSection}>
          <h5 style={styles.cvHeading}>My CV</h5>
          
          <a href="./src/assets/Harshit.resume.pdf" download="Harshit_Dubey_CV.pdf" style={styles.downloadButton}>
            Download CV
          </a>
        </div>
        
        </section>
  );
};
const styles = {
  cvSection: {
    marginTop: '30px',
    textAlign: 'center',
  },
  cvHeading: {
    fontSize: '20px',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cvImage: {
    width: '100px',
    height: '130px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  downloadButton: {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#1e90ff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default About;

// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" style={styles.projectsSection}>
      <center><h2 style={styles.sectionTitle}>Projects</h2></center>
      <div style={styles.projectList}>
        <div style={styles.projectItem}>
          <h3 style={styles.projectTitle}>Symon Says Game</h3>
          <img src="./src/assets/SimonSay's.png" alt="Simon Says Game" style={styles.projectImage} />
          <p style={styles.projectDescription}>
            The "Simon Says" game is a memory game where players must replicate an increasingly complex sequence of colors or sounds. Each round, a new step is added to the sequence, and players must follow it correctly to continue.
          </p>
          <button style={styles.projectButton}><a href="https://harshitrjit.github.io/SymonSaysGame/" style={styles.buttonLink}>Play Game</a></button>
        </div>
        
        <div style={styles.projectItem}>
          <h3 style={styles.projectTitle}>Photoshop Clone</h3>
          <img src="./src/assets/PhotoshopClone.png" alt="Photoshop Clone" style={styles.projectImage} />
          <p style={styles.projectDescription}>A React-based clone of Adobe Photoshop's interface.</p>
        </div>

        <div style={styles.projectItem}>
          <h3 style={styles.projectTitle}>Google Cloud Clone</h3>
          <img src="./src/assets/Google-Cloud-clonePic.png" alt="Google Cloud Clone" style={styles.projectImage} />
          <p style={styles.projectDescription}>A React-based clone of the Google Cloud platform.</p>
          <button style={styles.projectButton}><a href="https://harshitrjit.github.io/Google-cloud-clone/" style={styles.buttonLink}>Open Drive</a></button>
        </div>
        
        <div style={styles.projectItem}>
          <h3 style={styles.projectTitle}>Weather App</h3>
          <img src="./src/assets/Google-Cloud-clonePic.png" alt="Google Cloud Clone" style={styles.projectImage} />
          <p style={styles.projectDescription}>A live weather information app built with React.js.</p>
        </div>

        <div style={styles.projectItem}>
          <h3 style={styles.projectTitle}>Spotify Clone</h3>
          <img src="./src/assets/Google-Cloud-clonePic.png" alt="Google Cloud Clone" style={styles.projectImage} />
          <p style={styles.projectDescription}>A music streaming service clone using React.</p>
          <button style={styles.projectButton}><a href="https://harshitrjit.github.io/Google-cloud-clone/" style={styles.buttonLink}>Open Spotify</a></button>
        </div>

        <div style={styles.projectItem}>
          <h3 style={styles.projectTitle}>Wonderlust (Working model of Air-Bnb website using MERN Stack)</h3>
          <img src="./src/assets/Google-Cloud-clonePic.png" alt="Google Cloud Clone" style={styles.projectImage} />
          <p style={styles.projectDescription}>A music streaming service clone using React.</p>
          <button style={styles.projectButton}><a href="https://harshitrjit.github.io/Google-cloud-clone/" style={styles.buttonLink}>Open Wonderlust</a></button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  projectsSection: {
    padding: '40px 20px',
    backgroundColor: '#f4f7fa',
    fontFamily: 'Arial, sans-serif',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '30px',
  },
  projectList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  },
  projectItem: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '300px',
  },
  projectTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: '10px',
  },
  projectDescription: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '15px',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  projectButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#1e90ff',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  buttonLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Projects;

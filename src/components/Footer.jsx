// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <h3>Connect with Me</h3>
      <div className="social-links">
        <a href="https://github.com/HarshitRJIT" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/harshitdubey2004/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/your-instagram-id" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="https://www.hackerrank.com/profile/harshitprofessi2" target="_blank" rel="noopener noreferrer">
          <SiHackerrank /> HackerRank
        </a>
        <a href="mailto:harshitprofessional63@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> Mail Me
        </a>
      </div>
      <p>&copy; 2024 Harshit Dubey. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

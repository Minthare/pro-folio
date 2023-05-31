import React from 'react';

const Footer = () => {

  const styles = {
    footerContainer: {
      marginTop: '20px',
      backgroundColor:'DodgerBlue',
      padding:'50px',
      color:'white'
    },
    linkk:{
      marginLeft:'10px',
      color:'white',
    }
  };

  return (
    <footer style={styles.footerContainer}>
      <p>Connect with me:</p>
      {/* Replace the placeholder links with your actual social media profiles */}
      <a href="https://github.com/Minthare" style={styles
    .linkk}>GitHub</a>
      <a href="https://www.linkedin.com/in/joshua-pierre-1455bb258/" style={styles
    .linkk}>LinkedIn</a>
      <a href="https://twitter.com/yourusername" style={styles
    .linkk}>Twitter</a>
    </footer>
  );
};

export default Footer;

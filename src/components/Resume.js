import React from 'react';

const Resume = () => {
  const styles = {
    resumeSection: {
      marginTop: '20px',
      backgroundColor:'DodgerBlue',
      padding:'50px',
      color:'white'
    },
    linkk: {
      color:'white'
    },
    profencies:{
      color:'white'
    }
  };
  return (
    <section style = {styles.resumeSection}>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a style={styles.linkk} href="https://docs.google.com/document/d/127evYzs0_Mc0TGOiAxqCEs19PtG2z2cpOD-XNkPPXdQ/edit?usp=sharing" download>Download Resume</a>

      <h3 style={styles.profencies}>Proficiencies:</h3>
      
      <ul>
        <li>Languages: JavaScript, HTML, CSS, SQL</li>
        <li>Frameworks: Node.js, Express.js, jQuery, Bootstrap</li>
        <li>Databases: Oracle, SQL Server, MongoDB</li>
        <li>Tools: Navigation Tools, Git, GitHub, GitLab</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;

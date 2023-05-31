import React from 'react';
import port from './port.png';

const About = () => {
  
  const styles = {
    aboutContainer: {
      marginTop: '20px',
      backgroundColor:'#f2f2f2',
      padding:'50px',
      color:'DodgerBlue'
    },
    photo: {
      width: '200px',
      height: '200px',
    },
    bio:{
      fontSize:'20px',
      color:'DodgerBlue',
    }
  };

  return (
    <div style={styles.aboutContainer}>
      <h2>About Me</h2>
      <img src={port} alt="Profile Photo" style={styles.photo} />
      <p style={styles.bio}>
      Hello, my name is Joshua Pierre. I am a dedicated and passionate student who recently attended a coding bootcamp. I have always been fascinated by coding and it has become my true passion. I strive to excel in my studies, consistently achieving good grades as I tackle complex coding challenges. I am a diligent learner who is always seeking opportunities to expand my knowledge and skills. I find joy in diving deep into coding concepts and pushing my boundaries to create innovative solutions. Coding is not just a career path for me; it is my calling, and I am committed to continuous growth and excellence in this field.



      </p>
    </div>
  );
};

export default About;

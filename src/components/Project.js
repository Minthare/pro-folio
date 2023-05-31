import React from 'react';
import '../styles/Project.css';
import password from './password.png';
import work from './work.png';
import note from './note.png';
import weather from './weather.png';
import horiseon from './horiseon.png';
import quiz from './quiz.png';

const Project = ({ title, image, description, deployedLink, githubLink }) => {
  return (
    <div>
    <div className='flexbox'>
    <div className="project">
      <h3 className="projectTitle">Password Generator</h3>
      <img src={password} alt={title} className="projectImage" />
      <p className="projectDescription">{description}</p>
      <div className="projectLinks">
        <a href="https://minthare.github.io/best--passwordgenerator/" className="projectLink">Deployed App</a>
        <a href="https://github.com/Minthare/best--passwordgenerator" className="projectLink">GitHub Repository</a>
      </div>
    </div>

    <div className="project">
      <h3 className="projectTitle">Work Day Scheduler</h3>
      <img src={work} alt={title} className="projectImage" />
      <p className="projectDescription">{description}</p>
      <div className="projectLinks">
        <a href="https://minthare.github.io/workday-scheduler/" className="projectLink">Deployed App</a>
        <a href="https://github.com/Minthare/workday-scheduler" className="projectLink">GitHub Repository</a>
      </div>
    </div>
    <div className="project">
      <h3 className="projectTitle">Practical Note Taker</h3>
      <img src={note} alt={title} className="projectImage" />
      <p className="projectDescription">{description}</p>
      <div className="projectLinks">
        <a href="https://minthare.github.io/practical-note-taker/" className="projectLink">Deployed App</a>
        <a href="https://github.com/Minthare/practical-note-taker" className="projectLink">GitHub Repository</a>
      </div>
    </div>
   


    </div>

    <div className='flexbox2'>
       <div className="project">
      <h3 className="projectTitle">5 Day Weather Forecast</h3>
      <img src={weather} alt={title} className="projectImage" />
      <p className="projectDescription">{description}</p>
      <div className="projectLinks">
        <a href="https://minthare.github.io/5-day-weather-frocast/" className="projectLink">Deployed App</a>
        <a href="https://github.com/Minthare/5-day-weather-frocast" className="projectLink">GitHub Repository</a>
      </div>
    </div>

    <div className="project">
      <h3 className="projectTitle">Timmed Quiz</h3>
      <img src={quiz} alt={title} className="projectImage" />
      <p className="projectDescription">{description}</p>
      <div className="projectLinks">
        <a href="https://minthare.github.io/timmed-quiz/" className="projectLink">Deployed App</a>
        <a href="https://github.com/Minthare/timmed-quiz" className="projectLink">GitHub Repository</a>
      </div>
    </div>

    <div className="project">
      <h3 className="projectTitle">Horiseon Website</h3>
      <img src={horiseon} alt={title} className="projectImage" />
      <p className="projectDescription">{description}</p>
      <div className="projectLinks">
        <a href="https://minthare.github.io/Horiseon-Website-Challenge/" className="projectLink">Deployed App</a>
        <a href="https://github.com/Minthare/Horiseon-Website-Challenge" className="projectLink">GitHub Repository</a>
      </div>
    </div>
    </div>
</div>

  );
};

export default Project;

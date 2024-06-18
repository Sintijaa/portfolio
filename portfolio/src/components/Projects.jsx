import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Projects = () => {
  const history = useHistory();

  return (
    <div>
      <header className="App-header">
        <h1>Projects</h1>
        <div className="nav-buttons">
          <button onClick={() => history.push('/')}>Sākums</button>
          <button onClick={() => history.push('/about-me')}>Par Mani</button>
          <button onClick={() => history.push('/testimonials')}>Atsauksmes</button>
        </div>
      </header>
      <section className="box">
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </section>
    </div>
  );
};

export default Projects;

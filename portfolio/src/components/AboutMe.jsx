import React from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';

const AboutMe = () => {
  const history = useHistory();

  return (
    <div>
      <header className="App-header">
        <h1>About Me</h1>
        <div className="nav-buttons">
          <button onClick={() => history.push('/App')}>Sākums</button>
          <button onClick={() => history.push('/work')}>Atsauksmes</button>
          <button onClick={() => history.push('/projects')}>Darītie Darbi</button>
        </div>
      </header>
      <section className="box">
        <h2>Par mani</h2>
        <p>Es esmu Sintija un es apgūstu profesiju "Programmēšanas tenhiķis" Vidzemes tehnoloģiju un dizaina tehnikumā</p>
      </section>
    </div>
  );
}

export default AboutMe;



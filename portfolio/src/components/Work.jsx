import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Work = () => {
  const history = useHistory();

  return (
    <div>
      <header className="App-header">
        <h1>Darba pieredze</h1>
        <div className="nav-buttons">
          <button onClick={() => history.push('/')}>Sākums</button>
          <button onClick={() => history.push('/about-me')}>Par Mani</button>
          <button onClick={() => history.push('/projects')}>Darītie Darbi</button>
        </div>
      </header>
      <section className="box">
        <h2>Darba pieredze</h2>
        
      </section>
    </div>
  );
};

export default Work;

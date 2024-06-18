import React from 'react';


const AboutMe = () => {

  return (
    <div>
      <header className="App-header">
        <h1>About Me</h1>
        <div className="nav-buttons">
            <a href='/'><button>Sākums</button></a>
            <a href='/'><button>Atsauksmes</button></a>
            <a href='/'><button>Darītie darbi</button></a>
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



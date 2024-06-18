import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from '../AboutMe';
import Work from '../Work'; 
import Projects from '../Projects'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/App" component={Home} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Work" component={Work} />
        <Route path="/Projects" component={Projects} />
      </Switch>
    </Router>
  );
};


export default App;

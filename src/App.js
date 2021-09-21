import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Music from './Components/Music';
import Contact from './Components/Contact';
import Pnf from './Components/Pnf';

import Tracks from './util/Tracks';

function App() {
  return (
    <Router>
      <Menu/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/music" component={Music}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/tracks/:id" component={Tracks}/>
        <Route component={Pnf}/>
      </Switch>
    </Router>
  );
}

export default App;

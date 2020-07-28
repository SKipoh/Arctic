// Importing any functional/programatic bits, such as react itself,
// the react-router, react-redux etc.
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing the other main pages and "complete" components for the site
import Home from './pages/Home';
import About from './pages/About';
import Code from './pages/code';
import Electronics from './pages/electronics';
import Hacking from './pages/hacking';

import Nav from './components/navbar';
import Tile from './components/tile';

import { ReactComponent as MicroIcon } from './icons/microchipDuo.svg';


// Importing Any Stylesheets (both css and sass)
import './styles/style.css';

// Main page for the app, has the Navigation bar always on top, and the main page
// displayed underneath
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/code" component={Code} />
            <Route path="/electronics" component={Electronics} />
            <Route path="/hacking" component={Hacking} />
          </Switch>

        </main>
      </div>
    </Router>
  );
}

export default App;

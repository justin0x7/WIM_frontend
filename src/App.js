import React from 'react';
import './css/tailwind.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MintPage from './pages/MintPage';
// import Header from './components/Header.js';
// import Home from './components/Home.js';
// import About from './components/About.js';
// import Contact from './components/Contact.js';

const App = () => (
  <Router>
    {/* <Header /> */}
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route> */}

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/about">
        <AboutPage />
      </Route>

      <Route exact path="/mint">
        <MintPage />
      </Route>

      {/* <Route exact path="/about">
        <About />
      </Route> */}

      {/* <Route exact path="/contact">
        <Contact />
      </Route> */}
    </Switch>
  </Router>
);

export default App;

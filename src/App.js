import React from 'react';
import './css/tailwind.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import MintPage from './pages/MintPage';
import UtilityPage from './pages/UtilityPage';
import ContactPage from './pages/ContactPage';
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

      <Route exact path="/story">
        <StoryPage />
      </Route>

      <Route exact path="/mint">
        <MintPage />
      </Route>

      <Route exact path="/utility">
        <UtilityPage />
      </Route>

      <Route exact path="/contact">
        <ContactPage />
      </Route>

      {/* <Route exact path="/about">
        <About />
      </Route> */}

      {/* <Route exact path="/contact">
        <Contact />
      </Route> */}
    </Switch>
    {/* {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE} */}
  </Router>
);

export default App;

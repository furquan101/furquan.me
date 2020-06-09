import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { RSA } from './RSA';
import {FordPassPro} from './FordPassPro';
import { NavigationBar } from './Components/NavBar';
import {Footer} from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ReactGA from 'react-ga';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          
          <NavigationBar/>
          <ScrollToTop/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/rsa" component={RSA} />
              <Route path="/FordPassPro" component={FordPassPro} />
              <Route component={NoMatch} />
            </Switch>
            <Footer/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
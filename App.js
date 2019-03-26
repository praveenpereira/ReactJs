import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {  } from 'react-bootstrap';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
		  
        </div>
      </Router>
    );
  }
}

export default App;
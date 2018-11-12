import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import { Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
   

      </div>
    );
  }
}

export default App;

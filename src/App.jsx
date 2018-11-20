import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import { Route } from 'react-router-dom';
import Notebook from './components/Notebook';
import Details from './components/Details';
import Forminput from './components/Forminput';
import NoteHome from './components/NoteHome';
import Gallery from './components/Gallery'
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/note" component={NoteHome} />
        <Route path="/notebook" component={Notebook} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/forminput" component={Forminput} />
        <Route exact path="/gallery" component={Gallery} />
      </div>
    );
  }
}

export default App;

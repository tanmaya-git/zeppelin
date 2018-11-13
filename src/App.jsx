import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import { Route} from 'react-router-dom';
import ListNotes from './components/ListNotes';

class App extends Component {
  render() {
    return (
      <div>
      <NavigationBar />
      <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/list" component={ListNotes} />
   

      </div>
    );
  }
}

export default App;

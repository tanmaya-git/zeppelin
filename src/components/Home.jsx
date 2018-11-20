import React, { Component, img } from 'react';
import List from './List';
import AnalyticImage from './AnalyticImage';

export default class Home extends Component {
  render() {
    return (
      <div>
        <AnalyticImage/>
         <List/>
      </div>
    );
  }
}
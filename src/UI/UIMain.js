import React, { Component } from 'react';
import Map from '../Map/Map.js';

import UIHeader from './UIHeader.js'

import './UIMain.css'

import UIBottom from './UIBottom.js';


class UI extends Component {

 
  renderMainMap = () => {
      return (
        <div className="ui-map-container">
          <Map/>
        </div>
      )
  }

  render() {
    return (
      <div className="UIMain-container">
        <UIHeader/>
        {this.renderMainMap()}
        <UIBottom/>
      </div>
    );
  }
}

export default UI;

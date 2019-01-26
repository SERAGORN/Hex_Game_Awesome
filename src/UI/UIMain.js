import React, { Component } from 'react';
import Map from '../Map/Map.js';

import 'UIMain.css'

class UI extends Component {

 
  renderMainMap = () => {
      return (
        <div>
          <Map/>
        </div>
      )
  }

  render() {
    return (
      <div className="App">
        {this.renderMainMap()}
      </div>
    );
  }
}

export default UI;

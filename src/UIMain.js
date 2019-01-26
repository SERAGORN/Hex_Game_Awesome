import React, { Component } from 'react';
import Map from './Map.js';
import './App.css';

class UI extends Component {
  state = {
    hex_map: [[1,1,1],[1,1,1,1,1,1,1],[1,1,1],[1,1,1],[1,1,1,1,1,1],[1,1,1],[1,1,1],]
  }

  oneHex = (index) => {
    return (
      <div>
        {this.state.hex_map[index].map((row, lol) => {
          return (      
            <div class="hexa">
              <div className="hex1">
                <div className="hex2" style={{backgroundColor: "red"}}>
                  {index},{lol}
                </div>
              </div>
            </div>
          )
        } )}
      </div>
    )
  }

renderHexRow = () => {

}

  renderHexMap = () => {
    return (
      <div className="hex-map-row-super-container">
        {this.state.hex_map.map((row, index) => {
          let padding = () => {
            if (index%2 == 0) {
              return {paddingTop: "115px"}
            } else {
              return {paddingTop: "0px"}
            }
 
          }
            return (
              <div className="hex-container-row" style={padding()}>
                {this.oneHex(index)}
              </div>
              )
        })}
      </div>
    )
  }

  renderMainMap = () => {
      return <Map/>
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

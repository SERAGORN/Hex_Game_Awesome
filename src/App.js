import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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


  render() {
    return (
      <div className="App">
        {this.renderHexMap()}

      </div>
    );
  }
}

export default App;
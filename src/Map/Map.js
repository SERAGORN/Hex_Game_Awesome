import React, { Component, Fragment } from 'react';

import './Map.css'

class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: null,
      userName: "",
      userPos: {}
    }
  }

  componentDidMount(){
    let startPos = {
      x: 2,
      y: 0
    }
    this.setState({userPos: startPos})
  }

  hexRender = (hex_map,counter) => {
    let a = 60, 
        b = 2*a*Math.sqrt(3)
    return (
      <Fragment>
        {hex_map.y.map((row, index) => {
          let curPos = {}, hexagon = "hexagon"
          if(this.state.userPos.x === hex_map.x[counter] && this.state.userPos.y === index){
            curPos = { backgroundColor: "grey" }
          }
          if(this.state.userPos.x % 2 == 1){
            if(((this.state.userPos.x - hex_map.x[counter]) < 3 && (this.state.userPos.x - hex_map.x[counter]) > -1) || ((hex_map.x[counter] - this.state.userPos.x) < 3 && (hex_map.x[counter] - this.state.userPos.x) > -1)){
              if(this.state.userPos.x === hex_map.x[counter]){
                if(((this.state.userPos.y - index) < 2) && ((this.state.userPos.y - index) > -2)){
                  hexagon += " visible"
                }
              }
              if(Math.abs(this.state.userPos.x - hex_map.x[counter]) == 1){
                if((this.state.userPos.y - index) < 2 && (this.state.userPos.y - index) > -1 || ((index - this.state.userPos.y) < 2 && index - this.state.userPos.y > -1) ){
                  hexagon += " visible"
                }
              }
              if(Math.abs(this.state.userPos.x - hex_map.x[counter]) == 2){
                if((this.state.userPos.y - index) < 2 && (this.state.userPos.y - index) > -1 || ((index - this.state.userPos.y) < 2 && index - this.state.userPos.y > -1) ){
                  hexagon += " visible"                
                }
              }
            }
          }
          return (
            <div className="hexagon-box">
              <div className={hexagon}
                onClick={()=>{
                  let coord = {
                    x: hex_map.x[counter],
                    y: index
                  }
                  this.changePos(coord)
                }}
                style={{width: b, height: 4*a}}
              ></div>
              {this.playerCard(curPos)}
              <div className="kek-counter">{hex_map.x[counter]} - {index}</div>
            </div>
          )
        })}
      </Fragment>
    )
  }

  mapRender = () => {
    let a,b,x,y;
    a = 20
    b = 10
    let hex_map = {}
    hex_map.x = []
    hex_map.y = []
    for(let i=0;i<a;i++){
      hex_map.x.push(i)
    }
    for(let i=0;i<b;i++){
      hex_map.y.push(i)
    }
    return (
      <div className="hex-map-row-super-container">
        {hex_map.x.map((row, index) => {
          let margin = () => {
            if (index%2 == 0) {
              return {marginTop: 120}
            } else {
              return {marginTop: 0}
            }
          }
          return (
            <div className="hex-container-row" style={margin()}>
              {this.hexRender(hex_map, index)}
            </div>
          )
        })}
      </div>
    )
  }

  playerCard=(position)=>{
    return(
      <div className="player" style={position}></div>
    )
  }

  changePos=(coord)=>{
    this.setState({
      userPos: coord
    },()=>console.log(this.state.userPos))
  }

  render() {
    return this.mapRender()
  }
}

export default Map;

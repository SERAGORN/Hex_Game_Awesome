import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';

import hex1 from '../assets/hex/1.png'
import hex2 from '../assets/hex/2.png'
import hex3 from '../assets/hex/3.png'
import hex4 from '../assets/hex/4.png'
import hex5 from '../assets/hex/5.png'

import wizard from '../assets/persons/zloi.png'





import './Map.css'

@inject('store')
@observer class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: null,
      userName: this.props.store.name,
      user: []
    }
  }

  componentDidMount(){
    this.props.store.userIndex = 1
    this.props.store.users.push({
      name: "haha",
      x: 1,
      y: 1,
      index: 0,
      color: "red"
    })
    this.props.store.users.push({
      name: "kek",
      x: 4,
      y: 3,
      index: 1,
      color: "white"
    })
    this.props.store.users.push({
      name: "lol",
      x: 14,
      y: 3,
      index: 2,
      color: "blue",
      src: wizard
    })
    this.props.store.users.push({
      name: "arbidol",
      x: 4,
      y: 8,
      index: 3,
      color: "grey"
    })
    console.log(this.props.store.users)
  }

  randomHex = () => {
    let rand = Math.random()
    if (rand > 0 && rand < 0.2)
    return hex1
    else if (rand >= 0.2 && rand < 0.4)
    return hex3
    else if (rand >= 0.4 && rand < 0.6)
    return hex4
    else if (rand>=0.6 && rand < 0.8)
    return hex5
    else return hex2
  }

  hexRender = (hex_map,counter) => {
    let a = 30, 
        b = 2*a*Math.sqrt(3)
    console.log(this.props.store.users[this.props.store.userIndex])
    if(this.props.store.users){
      return (
        <Fragment>
          {hex_map.y.map((row, index) => {
            let curPos = {}, hexagon = "hexagon", users = this.props.store.users, userIndex = this.props.store.userIndex;
            if(userIndex === 0){
              if(((users[0].x - hex_map.x[counter]) < 3 && (users[0].x - hex_map.x[counter]) > -1) || ((hex_map.x[counter] - users[0].x) < 3 && (hex_map.x[counter] - users[0].x) > -1)){
                if(users[0].x % 2 == 1){
                  if(users[0].x === hex_map.x[counter]){
                    if(((users[0].y - index) < 3) && ((users[0].y - index) > -3)){
                      hexagon += " visible"
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) == 1){
                    if((users[0].y - index) < 3 && (users[0].y - index) > 0 || ((index - users[0].y) < 2 && index - users[0].y > -1) ){
                      hexagon += " visible"
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) == 2){
                    if((users[0].y - index) < 2 && (users[0].y - index) > -1 || ((index - users[0].y) < 2 && index - users[0].y > -1) ){
                      hexagon += " visible"
                    }
                  }
                } else {
                  if(users[0].x === hex_map.x[counter]){
                    if(((users[0].y - index) < 3) && ((users[0].y - index) > -3)){
                      hexagon += " visible"
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) == 1){
                    if((users[0].y - index) < 2 && (users[0].y - index) > -1 || ((index - users[0].y) < 3 && index - users[0].y > 0) ){
                      hexagon += " visible"
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) == 2){
                    if((users[0].y - index) < 2 && (users[0].y - index) > -1 || ((index - users[0].y) < 2 && index - users[0].y > -1) ){
                      hexagon += " visible"               
                    }
                  }
                }
              }
            } else {
              for(let i=1;i<users.length;i++){
                if(users[i].x === hex_map.x[counter] && users[i].y === index){
                  curPos = { backgroundColor: users[i].color }
                }
                if(((users[i].x - hex_map.x[counter]) < 3 && (users[i].x - hex_map.x[counter]) > -1) || ((hex_map.x[counter] - users[i].x) < 3 && (hex_map.x[counter] - users[i].x) > -1)){
                  if(users[i].x % 2 == 1){
                    if(users[i].x === hex_map.x[counter]){
                      if(((users[i].y - index) < 3) && ((users[i].y - index) > -3)){
                        if(userIndex === i){
                          hexagon += " user-visible"
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                    if(Math.abs(users[i].x - hex_map.x[counter]) == 1){
                      if((users[i].y - index) < 3 && (users[i].y - index) > 0 || ((index - users[i].y) < 2 && index - users[i].y > -1) ){
                        if(userIndex === i){
                          hexagon += " user-visible"
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                    if(Math.abs(users[i].x - hex_map.x[counter]) == 2){
                      if((users[i].y - index) < 2 && (users[i].y - index) > -1 || ((index - users[i].y) < 2 && index - users[i].y > -1) ){
                        if(userIndex === i){
                          hexagon += " user-visible"
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                  } else {
                    if(users[i].x === hex_map.x[counter]){
                      if(((users[i].y - index) < 3) && ((users[i].y - index) > -3)){
                        if(userIndex === i){
                          hexagon += " user-visible"
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                    if(Math.abs(users[i].x - hex_map.x[counter]) == 1){
                      if((users[i].y - index) < 2 && (users[i].y - index) > -1 || ((index - users[i].y) < 3 && index - users[i].y > 0) ){
                        if(userIndex === i){
                          hexagon += " user-visible"
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                    if(Math.abs(users[i].x - hex_map.x[counter]) == 2){
                      if((users[i].y - index) < 2 && (users[i].y - index) > -1 || ((index - users[i].y) < 2 && index - users[i].y > -1) ){
                        if(userIndex === i){
                          hexagon += " user-visible"
                        } else {
                          hexagon += " visible"
                        }         
                      }
                    }
                  }
                }
              }
            }
  
            return (
              <div className="hexagon-box" onClick={()=>{
                let coord = {
                  x: hex_map.x[counter],
                  y: index
                }
                this.changePos(coord)
              }}>
                <img style={{position: 'absolute', width: 115}} src={this.randomHex()}></img>
                <div className={hexagon} style={{width: b, height: 4*a}}>
                
                </div>
                
                {this.playerCard(curPos)}
              </div>
            )
          })}
        </Fragment>
      )
    }
  }

  mapRender = () => {
    let a,b;
    a = 30
    b = 15
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
              return {marginTop: 60}
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
      <div className="player" style={position}><img src={wizard}/></div>
    )
  }

  changePos=(coord)=>{
    this.props.store.users[this.props.store.userIndex].x = coord.x
    this.props.store.users[this.props.store.userIndex].y = coord.y
  }

  render() {
    return this.mapRender()
  }
}

export default Map;

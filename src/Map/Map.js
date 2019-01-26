import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';

import hex1 from '../assets/hex/1.png'
import hex2 from '../assets/hex/2.png'
import hex3 from '../assets/hex/3.png'
import hex4 from '../assets/hex/4.png'
import hex5 from '../assets/hex/5.png'

import wizard from '../assets/persons/zloi.png'

import good from '../assets/persons/12.gif'





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
    this.props.store.userIndex = 0
    this.props.store.currentMove = 0
    this.props.store.winX = 7
    this.props.store.winY = 7
    this.props.store.users.push({
      name: "haha",
      x: 10,
      y: 10,
      index: 0,
      img: good,
      alive: 1
    })
    this.props.store.users.push({
      name: "kek",
      x: 4,
      y: 3,
      index: 1,
      img: wizard,
      alive: 1
    })
    this.props.store.users.push({
      name: "lol",
      x: 14,
      y: 3,
      index: 2,
      img: wizard,
      alive: 1
    })
    this.props.store.users.push({
      name: "arbidol",
      x: 4,
      y: 8,
      index: 3,
      img: wizard,
      alive: 1
    })
    this.props.store.users.push({
      name: "arbidol",
      x: 6,
      y: 0,
      index: 4,
      img: wizard,
      alive: 1
    })
    console.log(this.props.store.users)
  }

  randomHex = (x, y) => {
    let rand = (x)/(x+y)
    
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
    let a = 20, 
        b = 2*a*Math.sqrt(3)
    if(this.props.store.users){
      return (
        <Fragment>
          {hex_map.y.map((row, index) => {
            let curPos = {},
                hexagon = "hexagon",
                users = this.props.store.users,
                userIndex = this.props.store.userIndex,
                movable = 0;
            if(userIndex === 0){
              if(Math.abs(users[0].x - hex_map.x[counter]) < 5){
                if(users[0].x % 2 == 1){
                  if(users[0].x === hex_map.x[counter]){
                    if(((users[0].y - index) < 5) && ((users[0].y - index) > -5)){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) == 1){
                    if((users[0].y - index) < 5 && (users[0].y - index) > 0 || ((index - users[0].y) < 4 && index - users[0].y > -1) ){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) == 2){
                    if((users[0].y - index) < 4 && (users[0].y - index) > -1 || ((index - users[0].y) < 4 && index - users[0].y > -1) ){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) === 3){
                    if((users[0].y - index) <= 3 && (users[0].y - index) >= 0 || ((index - users[0].y) <= 2 && index - users[0].y >= 0) ){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) === 4){
                    if((users[0].y - index) <= 2 && (users[0].y - index) >= 0 || ((index - users[0].y) <= 2 && index - users[0].y >= 0) ){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                } else {
                  if(users[0].x === hex_map.x[counter]){
                    if(((users[0].y - index) < 5) && ((users[0].y - index) > -5)){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) == 1){
                    if((users[0].y - index) < 4 && (users[0].y - index) > -1 || ((index - users[0].y) < 5 && index - users[0].y > 0) ){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) == 2){
                    if((users[0].y - index) < 4 && (users[0].y - index) > -1 || ((index - users[0].y) < 4 && index - users[0].y > -1) ){
                      hexagon += " user-visible"
                      movable = 1    
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }           
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) === 3){
                    if((users[0].y - index) <= 2 && (users[0].y - index) >= 0 || ((index - users[0].y) <= 3 && index - users[0].y >= 0) ){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                  if(Math.abs(users[0].x - hex_map.x[counter]) === 4){
                    if((users[0].y - index) <= 2 && (users[0].y - index) >= 0 || ((index - users[0].y) <= 2 && index - users[0].y >= 0) ){
                      hexagon += " user-visible"
                      movable = 1
                      if(users[0]){
                        for(let i=0;i<users.length;i++){
                          if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                            curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              for(let i=1;i<users.length;i++){
                if(users[i].x === hex_map.x[counter] && users[i].y === index && users[i].alive === 1){
                  curPos = { backgroundImage: "url("+users[i].img+")", backgroundSize: 'contain',
    backgroundRepeat: "no-repeat" }
                }
                if(((users[i].x - hex_map.x[counter]) < 3 && (users[i].x - hex_map.x[counter]) > -1) || ((hex_map.x[counter] - users[i].x) < 3 && (hex_map.x[counter] - users[i].x) > -1)){
                  if(users[i].x % 2 == 1){
                    if(users[i].x === hex_map.x[counter]){
                      if(((users[i].y - index) < 3) && ((users[i].y - index) > -3)){
                        if(users[0]){
                          if(users[0].x === hex_map.x[counter] && users[0].y === index){
                            curPos = { backgroundColor: users[0].color }
                          }
                        }
                        if(userIndex === i){
                          hexagon += " user-visible"
                          movable = 1
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                    if(Math.abs(users[i].x - hex_map.x[counter]) == 1){
                      if((users[i].y - index) < 3 && (users[i].y - index) > 0 || ((index - users[i].y) < 2 && index - users[i].y > -1) ){
                        if(users[0]){
                          if(users[0].x === hex_map.x[counter] && users[0].y === index){
                            curPos = { backgroundColor: users[0].color }
                          }
                        }
                        if(userIndex === i){
                          hexagon += " user-visible"
                          movable = 1
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                    if(Math.abs(users[i].x - hex_map.x[counter]) == 2){
                      if((users[i].y - index) < 2 && (users[i].y - index) > -1 || ((index - users[i].y) < 2 && index - users[i].y > -1) ){
                        if(users[0]){
                          if(users[0].x === hex_map.x[counter] && users[0].y === index){
                            curPos = { backgroundColor: users[0].color }
                          }
                        }
                        if(userIndex === i){
                          hexagon += " user-visible"
                          movable = 1
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                  } else {
                    if(users[i].x === hex_map.x[counter]){
                      if(((users[i].y - index) < 3) && ((users[i].y - index) > -3)){
                        if(users[0]){
                          if(users[0].x === hex_map.x[counter] && users[0].y === index){
                            curPos = { backgroundColor: users[0].color }
                          }
                        }
                        if(userIndex === i){
                          hexagon += " user-visible"
                          movable = 1
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                    if(Math.abs(users[i].x - hex_map.x[counter]) == 1){
                      if((users[i].y - index) < 2 && (users[i].y - index) > -1 || ((index - users[i].y) < 3 && index - users[i].y > 0) ){
                        if(users[0]){
                          if(users[0].x === hex_map.x[counter] && users[0].y === index){
                            curPos = { backgroundColor: users[0].color }
                          }
                        }
                        if(userIndex === i){
                          hexagon += " user-visible"
                          movable = 1
                        } else {
                          hexagon += " visible"
                        }
                      }
                    }
                    if(Math.abs(users[i].x - hex_map.x[counter]) == 2){
                      if((users[i].y - index) < 2 && (users[i].y - index) > -1 || ((index - users[i].y) < 2 && index - users[i].y > -1) ){
                        if(users[0]){
                          if(users[0].x === hex_map.x[counter] && users[0].y === index){
                            curPos = { backgroundColor: users[0].color }
                          }
                        }
                        if(userIndex === i){
                          hexagon += " user-visible"
                          movable = 1
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
                this.changePos(coord, movable)
              }}>
                <img style={{position: 'absolute', width: 79}} src={this.randomHex(hex_map.x[counter],index)}></img>
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
    a = 40
    b = 24
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
              return {marginTop: 40}
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

  changePos=(coord, movable)=>{
    if(this.props.store.currentMove === this.props.store.userIndex){
      if(movable === 1){
        let users = this.props.store.users, winZlo = 0

        users[this.props.store.userIndex].x = coord.x
        users[this.props.store.userIndex].y = coord.y
        if(this.props.store.userIndex === 0){
          for(let i=1;i<users.length;i++){
            if(users[0].x === users[i].x && users[0].y === users[i].y){
              this.props.store.users[i].alive = 0
              // this.props.store.userDied(i)
            }
            if(this.props.store.users[i].alive === 1){
              ++winZlo
            }
          }
          if(winZlo === 0){
            console.log("winZlo")
          }
        } else {
          if(coord.x === this.props.store.winX && coord.y === this.props.store.winY){
            alert('dobro win')
          }
        }
        if(this.props.store.userIndex <= 3){
          if(users[this.props.store.userIndex + 1].alive == 0){
            this.props.store.currentMove = 0
            this.props.store.userIndex = 0
          } else {
            this.props.store.currentMove = this.props.store.currentMove + 1
            this.props.store.userIndex = this.props.store.userIndex + 1
          }
        } else {
          this.props.store.currentMove = 0
          this.props.store.userIndex = 0
        }
      }
    }
  }

  render() {
    return this.mapRender()
  }
}

export default Map;

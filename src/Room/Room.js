import React, { Component } from 'react';

import { Route } from "react-router-dom";

import './Room.css'

import Join from "./Join"

import WaitRoom from "./WaitRoom"

class Room extends Component {
    componentDidMount() {
    }
    renderWindow () {
        return (
            <div class="room-window">
                <Route exact path={this.props.match.path}   component={() => <Join path_to = {this.props.match.path}/>}/>
                <Route exact path={this.props.match.path+"/go"}  component={() => <WaitRoom path_to = {this.props.match.path}/>} />
            </div>
        )
    }

  render() {
    return (
        <div className="room-container">
            {this.renderWindow()}
        </div>
    )
  }
}

export default Room;

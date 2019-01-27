import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Route } from "react-router-dom";

import './Room.css'

import Join from "./Join"
import UIMain from '../UI/UIMain.js';

import WaitRoom from "./WaitRoom"

@inject('store')
@observer class Room extends Component {
    componentDidMount() {
    }

    renderWindow () {
        return (
            <div class="room-window">
            <div className="header-logo"></div>
            <div className="room-window-background"></div>
                <Route exact path={this.props.match.path}   component={() => <Join path_to = {this.props.match.path}/>}/>
                {this.windowSwitch()}
            </div>
        )
    }

    windowSwitch=()=>{
        if(this.props.store.updater === 0){
            return <Route exact path={this.props.match.path+"/go"}  component={() => <WaitRoom path_to = {this.props.match.path}/>} />
        } else if(this.props.store.updater === 1) {
            return <Route path={this.props.match.path+"/go"} exact component={UIMain} />
        }
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

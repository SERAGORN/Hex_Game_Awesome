import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


import './Room.css'

class Join extends Component {

    renderWindow () {
        return (
        <div>
            <NavLink to={this.props.path_to+"/go"}>Войти в комнату</NavLink>
        </div>
        )
    }

  render() {
    return (
        <div className="room-container-join">
            {this.renderWindow()}
        </div>
    )
  }
}

export default Join;

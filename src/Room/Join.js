import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { observer, inject } from 'mobx-react';


import './Room.css'

@inject('store')
@observer class Join extends Component {
    state = {
        inputValue: ''
    }
    renderWindow () {
        return (
        <div>
            <input value={this.state.inputValue} onChange={(evt)=>
                this.setState({
                    inputValue: evt.target.value
                }, () => {
                    this.props.store.name = this.state.inputValue
                    })}/>
            <NavLink to={this.props.path_to+"/go"} onClick={() => {}}>Войти в комнату</NavLink>
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

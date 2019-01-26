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
            <input className="room-name-input" value={this.state.inputValue} onChange={(evt)=>this.props.store.users[0].name = evt.target.value}/>
            <div>
                <NavLink to={this.props.path_to+"/go"} onClick={() => this.joinLogic()}>Войти в комнату</NavLink>
            </div>
        </div>
        )
    }

    joinLogic=(evt)=>{

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

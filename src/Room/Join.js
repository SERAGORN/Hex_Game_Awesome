import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { observer, inject } from 'mobx-react';


import './Room.css'

@inject('store')
@observer class Join extends Component {
    state = {
        name_user: '',
        name_room_1: '',
        name_roow_2: ''
    }



    renderWindow () {
        return (
        <div>
            <div>
                <div>Nick Name</div>
                <input className="room-name-input" value={this.state.name} onChange={(evt)=>
                    this.setState({
                        name: evt.target.value
                    }, () => {
                        this.props.store.name = this.state.name
                        })}/>
            </div>
            <div>
                <div>Lobby Name</div>
                <input className="room-name-input" value={this.state.name_room_1} onChange={(evt)=>
                    this.setState({
                        name_room_1: evt.target.value
                    }, () => {
                        this.props.store.room_name = this.state.name_room_1
                        this.props.store.room_status = 'create_room'
                        })}/>
            </div>
            <div>
                <NavLink to={this.props.path_to+"/go"} onClick={() => {}}>Create Lobby</NavLink>
            </div>
            <div>Lobby Name</div>
            <input className="room-name-input" value={this.state.name_roow_2} onChange={(evt)=>
                this.setState({
                    name_roow_2: evt.target.value
                }, () => {
                    this.props.store.room_name = this.state.name_roow_2
                    this.props.store.room_status = 'join_room'
                    })}/>
            <div>
                <NavLink to={this.props.path_to+"/go"} onClick={() => this.joinLogic()}>Join Lobby</NavLink>
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

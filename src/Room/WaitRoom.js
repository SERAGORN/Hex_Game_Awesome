import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import './Room.css'

@inject('store')
@observer class WaitRoom extends Component {
    state = {
        inputValue: ""
    }

    componentDidMount() {
        this.props.store.socketConnect()
    }
    renderWindow () {
        return this.props.store.first_ob
    }

    renderMessage() {
        if (this.props.store.messages) {
            let messages = this.props.store.messages
                return (
                    <div>
                        {messages.map(row => {
                            return  (
                            <div>
                            {row.name+"-"+row.messa}
                            </div>
                            )
                        })}
                    </div>
                )
        }
    }

    renderUsers() {
        let users
        if (this.props.store.users_in_room.room){
          users = this.props.store.users_in_room.users
                return (
                    <div className = "player-in-lobby">
                        PLAYER IN LOBBY 
                        {users.map(row => {
                            return  (
                            <div>
                                {JSON.stringify(row.name)}
                            </div>
                            )
                        })}

                    </div>
                )
        }
    }

    renderMessageSend() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={(evt)=>
                this.setState({
                    inputValue: evt.target.value
                })}/>
                <div onClick={()=> this.props.store.sendMessage(this.state.inputValue)}>SEND</div>
            </div>
        )
    }

    startGame() {
        return (
            <div onClick={() => this.props.store.startGame()}>Start Game</div>
        )
    }

    

    render() {
        return (
            <div className="room-container-wait-room" style={{zIndex: 1}}>
                {this.props.store.first_ob+"<"+this.props.store.room_name+">"}
                {this.renderMessage()}
                {this.renderMessageSend()}
                {this.renderUsers()}
                {this.startGame()}
            </div>
        )
    }
}

export default WaitRoom;

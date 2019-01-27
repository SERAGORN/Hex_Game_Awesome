import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import './Room.css'
import head1 from '../assets/persons/1.png';
import head2 from '../assets/persons/2.png';
import head3 from '../assets/persons/3.png';
import head4 from '../assets/persons/4.png';

@inject('store')
@observer class WaitRoom extends Component {
    state = {
        inputValue: ""
    }

    componentDidMount() {
        this.props.store.listener()
    }
    renderWindow () {
        return this.props.store.first_ob
    }

    renderMessage() {
        if (this.props.store.messages) {
            let messages = this.props.store.messages
                return (
                    <div className="render-message">
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
        let i = 0
        let avatar
        if (this.props.store.users_in_room.room){
          users = this.props.store.users_in_room.users
                return (
                    <div className = "player-in-lobby">
                        PLAYER IN LOBBY 
                        {users.map(row => {
                            i++
                            if (i == 1){
                                avatar = head1
                            }else if (i == 2){
                                avatar = head2
                            }else if (i == 3){
                                avatar = head3
                            }else if (i == 4){
                                avatar = head4
                            }else {
                                avatar = head2
                            }
                            return  (
                            <div className="head-logo">
                                <img src={avatar} width="30px" height="30px"/>
                                <div style={{padding: "5px"}}>{JSON.stringify(row.name)}</div>
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
                <div onClick={()=> this.props.store.sendMessage(this.state.inputValue)} style={{padding: "10px"}}>SEND</div>
            </div>
        )
    }

    startGame() {
        return (
            <div onClick={() => this.props.store.startGame()} style={{color: "green", textShadow: "1px 1px 2px #feeded, 0 0 1em #f2dddd"}}>Start Game</div>
        )
    }

    

    render() {
        return (
            <div className="room-container-wait-room" style={{zIndex: 1}}>
                {this.props.store.first_ob+" <"+this.props.store.room_name+"> "}
                {this.renderMessage()}
                {this.renderMessageSend()}
                {this.renderUsers()}
                {this.startGame()}
            </div>
        )
    }
}

export default WaitRoom;

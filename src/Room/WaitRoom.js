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
        //this.props.store.socketConnect()
    }
    renderWindow () {
        return this.props.store.first_ob
    }

    renderMessage() {
        if (this.props.store.message) {
            return (
                <div>
                    {this.props.store.message.map(row => {
                        return  (
                        <div>
                            {row.message}
                        </div>
                        )
                    })}
                </div>
            )
        }
    }

    renderUsers() {
        if (this.props.store.users) {
            return (
                <div>
                    {this.props.store.users.map(row => {
                        return  (
                        <div>
                            {row.name}
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
            <NavLink to={""} onClick={() => {}}>Начать игру</NavLink>
        )
    }

    render() {
        return (
            <div className="room-container-wait-room">
                {this.props.store.first_ob}
                {this.renderMessage()}
                {this.renderMessageSend()}
                {this.renderUsers()}
                {this.startGame()}
            </div>
        )
    }
}

export default WaitRoom;

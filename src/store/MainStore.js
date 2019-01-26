import {observable, action} from 'mobx'
import io from 'socket.io-client'

export default class First {
    constructor(main) {
        this.main = main
    }

    @observable message = false
    @observable users = []

    @observable first_ob = "Лобби"

    @action socketConnect = () => {
        if (!this.socket) {
            this.socket = io("http://192.168.77.46:3010/")
            this.socket.emit('user_join',{
                name: this.users.name
            })
            this.socket.on('user_join', (msg)=> {
                if (!this.users) {
                    this.users = []
                } else {
                    this.users = msg
                }
            })
        } else {
            this.socket.on('chat_mess', (msg)=> {
                if (!this.message) {
                    this.message = []
                }
                this.message.push(msg)
            })
            
            this.socket.on('send_move',(data)=>{
                console.log(data)
            })
        }
    }

    @action sendMessage = (msg) => {
        console.log(msg)
        this.socket.emit("chat_mess" , {
            message: msg
        })
    }
    @action sendMove = (x,y) => {
        this.socket.emit("send_move" , {
            user: this.users[this.userIndex].name,
            x: x,
            y: y
        })
    }
}
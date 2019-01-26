import {observable, action} from 'mobx'
import io from 'socket.io-client'

export default class First {
    constructor(main) {
        this.main = main
    }
    @observable name = ""

    @observable message = false

    @observable users = false

    @observable first_ob = "Лобби"

    @action socketConnect = () => {
        if (!this.socket) {
            this.socket = io("http://192.168.77.46:3010")
            this.socket.emit('user_join',{
                name: this.name
            })
            this.socket.on('user_join', (msg)=> {
                if (!this.users) {
                    this.users = []
                }
                this.users = msg
                console.log(JSON.stringify(this.users))
            })
        }
        
        this.socket.on('chat_mess', (msg)=> {
            if (!this.message) {
                this.message = []
            }
            this.message.push(msg)
            console.log(JSON.stringify(this.message))
        })
        
        this.socket.on('send_move',(data)=>{
            console.log(data)
        })
    }

    @action sendMessage = (msg) => {
        console.log(msg)
        this.socket.emit("chat_mess" , {
            message: msg
        })
    }
    @action sendMove = (x,y) => {
        this.socket.emit("send_move" , {
            name: this.name,
            x: x,
            y: y
        })
    }
}
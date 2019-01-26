import {observable, action} from 'mobx'
import io from 'socket.io-client'

export default class First {
    constructor(main) {
        this.main = main
    }

    @observable currentMove = 0

    @observable message = false
    @observable users = []

    @observable room_status = ""

    @observable first_ob = "Лобби"
    @observable users_in_room = []

    @action socketConnect = () => {
            this.socket = io("http://192.168.77.88:3010/")
            // this.socket.emit('user_join',{
            //     name: this.name
            // })
            console.log(this.room_status)
            console.log(this.room_name)
    }

    @action createRoom = () => {
        if (this.room_status == 'create_room') {
            this.socket.emit(this.room_status, {
                "room": this.room_name,
                "name": this.name
            })
            this.socket.on(this.room_name, (msg) =>{
                console.log(JSON.stringify(msg))
                // this.socket.emit('join_room', {
                //     room: this.room_name,
                //     status: 'user_join',
                //     name: this.name
                // })
                this.users_in_room = msg;
            })
         }
    }    

    @action joinRooom = () => {
        if (this.room_status == 'join_room') {
            this.socket.emit('join_room', {
                "room": this.room_name,
                "name": this.name
            })
            this.socket.on(this.room_name, (msg) =>{
                console.log(JSON.stringify(msg))
                // this.socket.emit('join_room', {
                //     room: this.room_name,
                //     status: 'user_join',
                //     name: this.name
                // })
                this.users_in_room = msg;
            })
        }
    }
    @action sendMessage = (msg) => {
        console.log(msg)
        this.socket.emit("chat_mess" , {
            "message": msg,
            "name": this.name,
            "room": this.room_name
        })
        this.socket.on("chat_mess", (msg) =>{
            console.log(JSON.stringify(msg))
            // this.socket.emit('join_room', {
            //     room: this.room_name,
            //     status: 'user_join',
            //     name: this.name
            // })
        })
    }

    @action sendMove = (x,y) => {
        this.socket.emit("send_move" , {
            "user": this.users[this.userIndex].name,
            "x": x,
            "y": y
        })
    }
}
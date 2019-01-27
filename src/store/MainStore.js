import {observable, action} from 'mobx'
import io from 'socket.io-client'

export default class First {
    constructor(main) {
        this.main = main
    }

    @observable message = false
    @observable currentMove = 0
    @observable userIndex = 0
    @observable updater = 0
    @observable winner = null



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
    }

    @action startMove = (x,y,alive) => {
        this.socket.emit("send_move", {
            "room" : this.room_name,
            "status": "move",
            "name" : this.users[this.userIndex].name,
            "index" : this.userIndex,
            "x":  x,
            "y":  y,
            "alive": alive
        })
    }

    @action listener = () => {
        this.socket.on(this.room_name,(msg)=>{
            console.log(msg)
            console.log(this.users)
            if(msg.status == "start_game"){
                this.updater = 1
                this.currentMove = 1
            }
            if(msg.status == "move") {
                this.users[msg.index].x = msg.x
                this.users[msg.index].y = msg.y
            }
        })
    }

    @action createRoom = (name) => {
        if (this.room_status == 'create_room') {
            this.socket.emit(this.room_status, {
                "room": this.room_name,
                "name": name
            })
            this.socket.on(this.room_name, (msg) =>{
                console.log(msg)
                // this.socket.emit('join_room', {
                //     room: this.room_name,
                //     status: 'user_join',
                //     name: this.name
                // })
                if(msg.users){
                    for(let i=msg.users[msg.users.length - 1];i<msg.users.length;i++){
                        this.users.push(msg.users[i])
                    }
                }
                this.users_in_room = msg;
            })
         }
    }    

    @action joinRooom = (name) => {
        if (this.room_status == 'join_room') {
            this.socket.emit('join_room', {
                "room": this.room_name,
                "name": name
            })
            this.socket.on(this.room_name, (msg) =>{
                // this.socket.emit('join_room', {
                //     room: this.room_name,
                //     status: 'user_join',
                //     name: this.name
                // })
                if(msg.users){
                    for(let i=0;i<msg.users.length;i++){
                        this.users.push(msg.users[i])
                    }
                }
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
        this.socket.emit(this.room_name, {
            "name": this.users[this.userIndex].name,
            "index": this.userIndex,
            "x": x,
            "y": y,
            "status": "move",
            
        })
    }

    @action startGame = () => {
        this.socket.emit("start", {
            "room": this.room_name,
            "status": "start",
        })
    }
}
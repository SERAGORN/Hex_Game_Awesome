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
            this.socket = io("http://192.168.77.46:3010/")
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
            "index" : this.currentMove,
            "x":  x,
            "y":  y,
            "alive": alive
        })
    }

    @action listener = () => {
        this.socket.on(this.room_name,(msg)=>{
            console.log(msg)
            if(msg.status == "start_game"){
                this.updater = 1
                this.currentMove = 1
            }
            if(msg.status == "move") {
                this.users[msg.index].x = msg.x
                this.users[msg.index].y = msg.y
                // for(let i = this.currentMove;i<this.users.length;i++){
                //     if(this.currentMove < this.users.length - 1){
                //         if(this.users[i+1].alive == 1){
                //             this.currentMove++
                //         }
                //     } else {
                //         this.currentMove = 0
                //     }
                // }
                if(this.currentMove < this.users.length-1){
                    this.currentMove++
                } else {
                    this.currentMove = 0
                }
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
                if(msg.status !== "start_game"){
                    if(msg.status !== "move"){
                        console.log(msg)
                        // this.socket.emit('join_room', {
                        //     room: this.room_name,
                        //     status: 'user_join',
                        //     name: this.name
                        // })
                        this.userIndex = 0
                        if(msg.users){
                            console.log(JSON.stringify(this.users))
                            let kek
                            console.log(msg.users[0])
                            kek = JSON.parse(JSON.stringify(this.users))
                            kek.push(msg.users[0])
                            this.users = kek
                        } else {
                            let lel
                            for(let i=1;i<msg.data.users.length;i++){
                                if(!this.users[i]){
                                    lel = JSON.parse(JSON.stringify(this.users))
                                    console.log(lel)
                                    lel.push(msg.data.users[i])
                                    this.users = lel
                                    console.log(this.users)
                                }
                            }
                        }
                        this.users_in_room = msg;
                    }
                }
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
                if(msg.status !== "start_game"){
                    if(msg.status !== "move"){
                        console.log(msg)
                        if(msg.data.users){
                            for(let i=0;i<msg.data.users.length;i++){
                                if(!this.users[i]){
                                    this.users.push(msg.data.users[i])
                                }
                            }
                        }
                        if(!this.userIndex){
                            this.userIndex = msg.index
                        }
                        this.users_in_room = msg;
                    }
                }
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

    // @action sendMove = (x,y) => {
    //     this.socket.emit(this.room_name, {
    //         "name": this.users[this.userIndex].name,
    //         "index": this.userIndex,
    //         "x": x,
    //         "y": y,
    //         "status": "move",
            
    //     })
    // }

    @action startGame = () => {
        this.socket.emit("start", {
            "room": this.room_name,
            "status": "start_game",
        })
    }
}
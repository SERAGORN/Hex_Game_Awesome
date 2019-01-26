import {observable, action} from 'mobx'

export default class First {
    constructor(main) {
        this.main = main
    }
    @observable first_ob = "Hello MOBX"
    actionFirst () {
        //this.root.rootFunc()
    }
    // @action first_to_root = () => {
    //     this.main.second.second()
    // }
    goRoot() {
        console.log("FIRST")
        this.main.rootFunc()
        this.main.second.goConsole()
    }
}
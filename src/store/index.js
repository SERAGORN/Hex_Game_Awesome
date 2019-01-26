import First from './MainStore'
import Second from './SecondStore'

export default class Root {
    constructor() {
        this.first = new First(this)
        this.second = new Second(this)
    }
    rootFunc() {
    }
    returnRoutes() {
        return {
            store: this.first,
            second_store: this.second
        }
    }
}
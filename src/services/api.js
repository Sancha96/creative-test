import data from "../data/entities.json";

class ApiService {
    delay = 2000
    timeout

    init() { }
    get_flats() {
        return new Promise(resolve => {
            this.timeout = setTimeout(() => {
                resolve(data.response)
            }, this.delay)
        })
        // return this.state.then(state => new Promise((resolve, reject) => 
        //     resolve()
        // ));
    }
    like() {

    }
    dislike() {

    }
}

export default new ApiService()
import data from "../data/entities.json";

class ApiService {
    delay = 2000;
    timeout;

    get_flats() {
        return new Promise(resolve => {
            this.timeout = setTimeout(() => {
                resolve(data.response)
            }, this.delay)
        })
    }
}

export default new ApiService()
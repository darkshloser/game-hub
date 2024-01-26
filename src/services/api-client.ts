import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '121f38844d374ffbb7fbf492d3c8d51e'
    }
})


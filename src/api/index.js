import axios from "axios"
// var cors = require('cors')
// app.use(cors())
export const fetchData = async (num) => {
    console.log("number>>", num);
    try {
        let url = `https://api.unsplash.com/photos?page=${num}`
        let token = 'Client-ID 0YWxA8OJVKgG4wMC7HGRa0LbJhL2KniwM1IyOKVPP2E';
        const res = await axios.get(url, {
            headers: {
                "Authorization": token
            },
        })
        // console.log(res.data);
        const result = res.data;
        // console.log(result);
        return result
    } catch (er) {
        console.log(er);
    }
}


export const searchApi = async (num, inp) => {
    // console.log("number>>>>", num);
    // console.log("input>>", inp);
    try {
        let url = `https://api.unsplash.com/search/photos?page=${num}&query=${inp}`;
        const token = ' Client-ID 0YWxA8OJVKgG4wMC7HGRa0LbJhL2KniwM1IyOKVPP2E';
        const res = await axios.get(url, {
            headers: {
                "Authorization": token
            }
        })
        const data = res.data.results
        // console.log(data);
        return data;
    } catch (er) {
        console.log(er);
    }
}
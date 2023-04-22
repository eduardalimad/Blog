import axios from "axios"

const http = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?',
    headers: {
        Accept:  "application/json, text/plain, */*"
    }
})

export default http
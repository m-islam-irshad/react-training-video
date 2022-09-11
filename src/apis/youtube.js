import axios from "axios"

const KEY = "AIzaSyATLEPVk2D4-K42dX0x58aeLcynD4NjCk4"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }

});



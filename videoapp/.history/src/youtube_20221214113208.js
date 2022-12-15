import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/yuotube/v3",
})
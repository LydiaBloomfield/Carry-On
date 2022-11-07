import axios from "axios";

export default axios.create({
    // url of our backend server
    baseURL: "http://localhost:5000/api/v1",
    headers: {
        "Content-type": "application/json"
    }
})
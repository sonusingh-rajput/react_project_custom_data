import axios from "axios";

const apiLink = axios.create({
baseURL:"https://fakestoreapi.com"
})

export default apiLink;
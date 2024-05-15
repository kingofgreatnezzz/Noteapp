import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = () =>{
    return axios.get(`${BASE_URL}/posts`)
}

export const getPost = () => {
    return axios.get(`${BASE_URL}/posts/${id}`)
}
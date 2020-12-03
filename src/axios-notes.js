import axios from "axios";

const instance = axios.create({
    baseURL: 'https://todo-react-99668.firebaseio.com/'
});

export default instance;

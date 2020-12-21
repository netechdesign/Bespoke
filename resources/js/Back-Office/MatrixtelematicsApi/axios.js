import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const instance = axios.create({
    baseURL:'https://restapi.matrixtelematics.com',
})

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://7e15-125-195-62-96.jp.ngrok.io/api',
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

export default instance;
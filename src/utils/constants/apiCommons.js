import axios from "axios";

const API_KEY = process.env.MDB_API_KEY;
const API_URL = process.env.MDB_API_URL;

const api = axios.create({
    baseURL: API_URL,
    params: {language: 'en-US'},
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
})

export { api };
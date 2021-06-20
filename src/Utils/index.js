import axios from 'axios';



export const apiInstance = axios.create({
    baseURL: 'https://us-central1-montana-rep-app.cloudfunctions.net/api1'
});
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = `https://jsonplaceholder.typicode.com`;
axios.defaults.headers.common['Authorization'] = 'token';
axios.defaults.headers.post['Content-type'] = 'application/json'

axios.interceptors.request.use(request => {
    console.log(request)
    // edit request config previous to return it
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    console.log(response)
    // edit response config previous to return it
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

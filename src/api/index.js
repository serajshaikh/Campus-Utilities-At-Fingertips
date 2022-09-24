import axios from 'axios';

const API = axios.create({ baseURL:"http://localhost:5000" });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
 
    return req;
 });




export const createPost = (newPost) => API.post('/maintenance',newPost);
export const fetchPosts = () => API.get('/maintenance');
export const fetchTransport = () => API.get('/transport');

export const createTransport = (newTransport) => API.post('/transport',newTransport);
export const createPayment = (newPayment) => API.post('/payment',newPayment);

export const signin = (formData) => API.post('/user/signin',formData);
export const signup = (formData) => API.post('/user/signup',formData);
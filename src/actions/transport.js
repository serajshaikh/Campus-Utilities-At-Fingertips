import { CREATETRANSPORT,FETCHTRASPORT } from '../constants/actionTypes';
import * as api from '../api/index';

export const getTransport = () => async(dispatch) => {
    try {
        const {data} = await api.fetchTransport();
        dispatch({type:FETCHTRASPORT,payload:data}); //store in reducer
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (data) => async(dispatch) => {
    try {
        const {item} = await api.createTransport(data);
        dispatch({type:CREATETRANSPORT,payload:item});
    } catch (error) {
        console.log(error);
    }
} 
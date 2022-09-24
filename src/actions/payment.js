import { CREATEPAYMENT } from '../constants/actionTypes';
import * as api from '../api/index';



export const createPost = (data) => async(dispatch) => { //here props name is same as the compoment props
      //console.log("Maintenance");
      //console.log(data);
    try {
        const {item} = await api.createPayment(data);
        dispatch({ type:CREATEPAYMENT,payload:item });
    } catch (error) {
        console.log(error);
    }
}
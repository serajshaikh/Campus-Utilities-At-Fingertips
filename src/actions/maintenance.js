import { CREATE,FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api/index';


export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type:FETCH_ALL,payload:data}); //store in reducer
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (data) => async(dispatch) => { //here props name is same as the compoment props
      //console.log("Maintenance");
      //console.log(data);
    try {
        const {item} = await api.createPost(data);
        dispatch({ type:CREATE,payload:item });
    } catch (error) {
        console.log(error);
    }
}

import { CREATE,FETCH_ALL } from '../constants/actionTypes';

export default (postss=[],action) => {
    switch (action.type) {

        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return[...postss,action.payload];
        default:
           return postss;
    }
}
import { CREATETRANSPORT,FETCHTRASPORT } from '../constants/actionTypes';

export default (posts=[],action) => {
    switch (action.type) {
        case FETCHTRASPORT:
            return action.payload;
        case CREATETRANSPORT:
            return[...posts,action.payload];
        default:
           return posts;
    }
}
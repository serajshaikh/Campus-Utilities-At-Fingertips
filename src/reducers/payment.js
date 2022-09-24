import { CREATEPAYMENT } from '../constants/actionTypes';

export default (postsss=[],action) => {
    switch (action.type) {

        case CREATEPAYMENT :
            return[...postsss,action.payload];
        default:
           return postsss;
    }
}
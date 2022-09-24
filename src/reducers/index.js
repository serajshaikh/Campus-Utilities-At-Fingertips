import { combineReducers } from 'redux';
import auth from './auth';
import maintenance from './maintenance';
import transport from './transport';
import payment from './payment';

export default combineReducers({
    auth,
    maintenance,
    transport,
    payment
})


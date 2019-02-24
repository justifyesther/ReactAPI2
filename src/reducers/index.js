import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
// import SelectPopokReducer from './SelectPopokReducer';

export default combineReducers({
    user: () => 'Justify Ester Pasaribu',
    auth: AuthReducer, //sebuah function 
    // selectedPopok: SelectPopokReducer
});
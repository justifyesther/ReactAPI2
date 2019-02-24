import { 
    USER_LOGIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    AUTH_LOADING,
} from '../actions/Types';

const INITIAL_STATE = { username: '', email: '', role:'', status:'', token:'',error: '', loading: false};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS :
            return { ...INITIAL_STATE, ...action.payload};
        case AUTH_SYSTEM_ERROR :
            return { ...INITIAL_STATE, error: action.payload}
        case AUTH_LOADING :
            return { ...state, loading: true }
        default :
            return state;
    }
}
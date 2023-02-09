
import {UPDATE_ACCOUNT} from "../constants/constant";

const loginData = [{
    'account': '',
    'passWord': ''
}]
const login = (state = loginData, action) => {
    switch (action.type) {
        case UPDATE_ACCOUNT:
            return Object.assign({},  { 'account': action.value});
        default:
            return state;
    }
}
export default login;
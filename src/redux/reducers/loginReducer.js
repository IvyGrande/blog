import {UPDATE_ACCOUNT} from "../constants/constant";

const loginData = {
    account: '',
    isAuthor: false
}

const loginReducer = (state = loginData, action) => {
    switch (action.type) {
        case UPDATE_ACCOUNT:
            return {
                ...state,
                account: action.name,
                isAuthor: true
            }
        default:
            return state;
    }
}
export default loginReducer;
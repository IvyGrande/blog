import {UPDATE_ACCOUNT} from "../constants/constant";

const loginData = {
    username: '',
    isAuthor: false
}

const loginReducer = (state = loginData, action) => {
    console.log("reducer",action)
    switch (action.type) {
        case UPDATE_ACCOUNT:
            console.log('name', action.name)
            return {
                ...state,
                username: action.name,
                isAuthor: true
            }
        default:
            return state;
    }
}
export default loginReducer;
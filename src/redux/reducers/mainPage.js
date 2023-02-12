import {OPEN_LOGIN, OPEN_PUBLISH} from "../constants/constant";

const mainPage = (state = false, action) =>{
    switch (action.type){
        case OPEN_PUBLISH :
            return state = !state;
        default :
            return state;
    }
}

const loginState=false;
export const openLoginReducer=(state=loginState,action)=>{
    console.log("openLogin",state)
    switch (action.type){
        case OPEN_LOGIN:
            return state = true;
        default:
            return state;
    }
}
import {OPEN_PUBLISH} from "../constants/constant";

const mainPage = (state = false, action) =>{
    switch (action.type){
        case OPEN_PUBLISH :
            return state = !state;
        default :
            return state;
    }
}
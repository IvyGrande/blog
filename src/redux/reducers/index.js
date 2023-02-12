import { combineReducers } from 'redux'
import loginReducer from "./loginReducer";
import {openLoginReducer} from "./mainPage";

const rootReducer = combineReducers({
    loginReducer,
    openLoginReducer
})

export default rootReducer;



import { combineReducers } from 'redux'
import loginReducer from "./loginReducer/loginReducer";
import {editState, openPageReducer, StoreSelected} from "./pageReducer/articleReducer";
import submitReducer from "./submitReducer/submit";

const rootReducer = combineReducers({
    loginReducer,
    openPageReducer,
    submitReducer,
    StoreSelected,
    editState
})

export default rootReducer;



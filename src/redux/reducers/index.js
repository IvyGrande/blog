import { combineReducers } from 'redux'
import loginReducer from "./loginReducer";
import { articleReducer } from "./articleReducer";
import articleSelectedReducer from "./chosenReducer";
// import { commentReducer } from "./commentReducercer";


const rootReducer = combineReducers({
    loginReducer,
    articleReducer,
    articleSelectedReducer
  }
)

export default rootReducer;



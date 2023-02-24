import { combineReducers } from 'redux'
import loginReducer from "./loginReducer";
import { articleReducer } from "./articleReducer";
import articleSelectedReducer from "./chosenReducer";

const rootReducer = combineReducers({
    loginReducer,
    articleReducer,
    articleSelectedReducer
  }
);

export default rootReducer;



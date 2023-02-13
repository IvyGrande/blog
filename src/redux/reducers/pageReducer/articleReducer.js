import { EDIT_STATE, OPEN_COMPOSE, OPEN_HOME, OPEN_LOGIN, SELECT_CARD} from "../../constants/constant";
// import submitReducer from "./submit";

const chosenCard = {}
export const StoreSelected = (state = chosenCard, action) => {
    switch (action.type) {
        case SELECT_CARD :
            return action.cardSelected;
        default :
            return state;
    }
}

const initPageState = {login: false, home: true, compose: false};
export const openPageReducer = (state = initPageState, action) => {
    // console.log("openLogin", state)
    switch (action.type) {
        case OPEN_LOGIN:
            return {
                login: true,
                home: false,
                compose: false
            };
        case OPEN_HOME:
            return {
                login: false,
                home: true,
                compose: false
            };
        case OPEN_COMPOSE:
            return {
                login: false,
                home: false,
                compose: true
            };
        default:
            return state;
    }
}
const initEditState=false;
export const editState=(state=initEditState,action)=>{
    switch (action.type){
        case EDIT_STATE:
            return state= true;
        default:
            return state;
    }
}
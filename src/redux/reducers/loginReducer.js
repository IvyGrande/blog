import { UPDATE_ACCOUNT } from "../constants/constant";

const initState = {
  username: '', isAuthor: false
}

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_ACCOUNT:
      return {
        ...state, username: action.name, isAuthor: true
      }
    default:
      return state;
  }
}

export default loginReducer;
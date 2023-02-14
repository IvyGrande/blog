import { SELECT_CARD } from "../constants/constant";

const initState = {
  articleSelected:{}
}

const articleSelectedReducer = (state = initState, action) => {
  console.log("select",state)
  switch (action.type) {
    case SELECT_CARD :
      return {
        ...state,
        articleSelected: action.cardSelected
      }
    default :
      return state;
  }
}

export default articleSelectedReducer;
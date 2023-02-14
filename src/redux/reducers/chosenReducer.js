import { CANCEL_SELECT, SELECT_CARD } from "../constants/constant";

const initState = {
  articleSelected:{
    id: "",
    title: "",
    content: ""
  }
}

const articleSelectedReducer = (state = initState, action) => {
  console.log("select",state)
  switch (action.type) {
    case SELECT_CARD :
      return {
        ...state,
        articleSelected: action.cardSelected
      }
    case CANCEL_SELECT:
      return {
        ...state,
        articleSelected:{
          id: "",
          title: "",
          content: ""
        }
      }
    default :
      return state;
  }
}

export default articleSelectedReducer;
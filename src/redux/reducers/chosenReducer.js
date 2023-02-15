import { CANCEL_SELECT, SELECT_CARD } from "../constants/constant";

const initState = {
  articleSelected:{
    id: "",
    title: "",
    content: "",
    review:[]
  }
}

const articleSelectedReducer = (state = initState, action) => {
  console.log("select",action)
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
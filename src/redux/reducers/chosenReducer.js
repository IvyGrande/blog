import { CANCEL_SELECT, SELECT_CARD } from "../../constants/constant";

const initState = {
  articleSelected: {
    id: "",
    title: "",
    content: "",
    commentList: []
  }
};

const articleSelectedReducer = (state = initState, action) => {
  switch (action.type) {

    case SELECT_CARD :
      return {
        ...state,
        articleSelected: action.cardSelected
      };

    case CANCEL_SELECT:
      return {
        ...state,
        articleSelected: {
          ...state.articleSelected,
          id: '',
          title: '',
          content: ''
        }
      };

    default :
      return state;
  }
};

export default articleSelectedReducer;
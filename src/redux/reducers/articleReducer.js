import { DELETE, SUBMIT_ARTICLE } from "../constants/constant";
import Article_List from "../../Data/Article_List";
// import articleSelectedReducer from "./chosenReducer";

const initState = {
  articleList: Article_List
}
export const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case SUBMIT_ARTICLE:
      console.log(action);
      const editedArticle = state.articleList.map((item) => item.id === action.newData.id ? action.newData : item)
      const newArticle = [...state.articleList, action.newData]
      console.log("new", action.newData.id)
      console.log("new", action.newData)
      return {
        ...state,
        articleList: state.articleList.map((item) => item.id === action.newData.id)?editedArticle:newArticle
      };

    case DELETE:
      return state.filter((item) => item.id !== action.id);
    // case EDIT_CARD:
    //   console.log('red', articleSelectedReducer.state)
    //   const editedArticle = state.articleList.map((e) =>
    //     e.id === action.id ? articleSelectedReducer.state : e
    //   )
    //   console.log(editedArticle)
    // item => item.id === action.id ? articleSelected : item);
    // return {
    //   ...state,
    //   articleList: editedArticle
    // }
    default:
      return state;
  }
}
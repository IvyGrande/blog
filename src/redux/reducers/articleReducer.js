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
      return {
        ...state,
        articleList: state.articleList.some((item) => item.id === action.newData.id)?editedArticle:newArticle
      };

    case DELETE:
      return {
        ...state,
        articleList:state.articleList.filter((item) => item.id !== action.id)
      }

    default:
      return state;
  }
}
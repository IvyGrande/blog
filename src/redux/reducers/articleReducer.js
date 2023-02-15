import { DELETE, SUBMIT_ARTICLE, UPDATE_COMMENT } from "../constants/constant";
import Article_List from "../../Data/Article_List";
import article_List from "../../Data/Article_List";
// import articleSelectedReducer from "./chosenReducer";

const initState = {
  articleList: Article_List,
}
export const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case SUBMIT_ARTICLE:
      // console.log(action);
      const editedArticle = state.articleList.map((item) => item.id === action.newData.id ? action.newData : item)
      const newArticle = [...state.articleList, action.newData]
      return {
        ...state,
        articleList: state.articleList.some((item) => item.id === action.newData.id) ? editedArticle : newArticle
      };

    case DELETE:
      return {
        ...state,
        articleList: state.articleList.filter((item) => item.id !== action.id)
      }

    case UPDATE_COMMENT:
      // console.log("reducer", action.item);
      // console.log(action.item)
      // const newCommentArticle = [...state.articleList.commentList, action.item]
      const upDateReview = state.articleList.map((item) => item.id === action.selectedId ?
        {...item, commentList:[...item.commentList,action.item] }: item)
    // {...item, [...item.commentList,action.item]} : item)
      // console.log("ok",state.articleList.map((item) => item.id === action.selectedId)
      // console.log("ok",upDateReview)

      return {
        ...state,
        articleList: upDateReview
      }

    default:
      return state;
  }
}
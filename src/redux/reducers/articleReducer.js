import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  ADD_COMMENT_TO_SPECIFIC_ARTICLE,
  DELETE_COMMENT_FROM_SPECIFIC_ARTICLE
} from "../constants/constant";
import Article_List from "../../Data/article_List";

const initState = {
  articleList: Article_List,
}

export const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      const editedArticle = state.articleList.map((item) => item.id === action.newData.id ? action.newData : item)
      const newArticle = [...state.articleList, action.newData]
      return {
        ...state,
        articleList: state.articleList.some((item) => item.id === action.newData.id) ? editedArticle : newArticle
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        articleList: state.articleList.filter((item) => item.id !== action.id)
      }

    case ADD_COMMENT_TO_SPECIFIC_ARTICLE:
      const upDateReview = state.articleList.map((i) => {
          return i.id === action.selectedId ?
            {...i, commentList: [...i.commentList, action.item]}
            : i
        }
      )
      return {
        ...state,
        articleList: upDateReview
      }

    case DELETE_COMMENT_FROM_SPECIFIC_ARTICLE:
      console.log("====", action)
      const deletedReviewArticle = state.articleList.map((i) => {
          console.log("i", i.id === action.selectedId ? i.commentList : false)
          // const chosenArticle=i.id === action.selectedId&& i
          return i.id === action.selectedId ?
            {...i, commentList: i.commentList.filter((item) => item.reviewId !== action.reviewedId)} :
            i
        }
      )
      console.log("delete", deletedReviewArticle)
      return {
        ...state,
        articleList: deletedReviewArticle
      }

    default:
      return state;
  }
}
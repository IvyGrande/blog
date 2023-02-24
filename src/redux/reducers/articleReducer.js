import {
  ADD_NEW_ARTICLE,
  DELETE_ARTICLE,
  ADD_COMMENT_TO_SPECIFIC_ARTICLE,
  DELETE_COMMENT_FROM_SPECIFIC_ARTICLE, EDIT_SELECTED_ARTICLE
} from "../../constants/constant";
import Article_List from "../state";

const initState = {
  articleList: Article_List,
};

export const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_ARTICLE:
      return {
        ...state,
        articleList: [...state.articleList, action.newData]
      };

    case EDIT_SELECTED_ARTICLE:
    return {
      ...state,
      articleList:state.articleList.map((item) => item.id === action.editedArticle.id ? action.editedArticle : item)
    };

    case DELETE_ARTICLE:
      return {
        ...state,
        articleList: state.articleList.filter((item) => item.id !== action.id)
      };

    case ADD_COMMENT_TO_SPECIFIC_ARTICLE:
      const upDateReview = state.articleList.map((i) => {
          return i.id === action.selectedId
            ? {...i, commentList: [...i.commentList, action.item]}
            : i
        }
      );
      return {
        ...state,
        articleList: upDateReview
      }

    case DELETE_COMMENT_FROM_SPECIFIC_ARTICLE:
      const deletedReviewArticle = state.articleList.map((i) => {
          return i.id === action.selectedId
            ? {...i, commentList: i.commentList.filter((item) => item.reviewId !== action.reviewedId)}
            : i
        }
      );
      return {
        ...state,
        articleList: deletedReviewArticle
      }

    default:
      return state;
  }
};

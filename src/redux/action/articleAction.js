import {
  CANCEL_SELECT,
  SELECT_CARD,
  ADD_NEW_ARTICLE,
  DELETE_ARTICLE,
  ADD_COMMENT_TO_SPECIFIC_ARTICLE, DELETE_COMMENT_FROM_SPECIFIC_ARTICLE, EDIT_SELECTED_ARTICLE
} from "../../constants/constant";

export const addNewArticle = (newData) => {
  return {
    type: ADD_NEW_ARTICLE,
    newData
  };
};
export const editSelectedArticle = (editedArticle) => {
  return {
    type: EDIT_SELECTED_ARTICLE,
    editedArticle
  };
};
export const deleteCard = (id) => {
  return {
    type: DELETE_ARTICLE,
    id
  };
};
export const selectCard = (cardSelected) => {
  return {
    type: SELECT_CARD,
    cardSelected
  };
};
export const cancelSelected = (cancelItem) => {
  return {
    type: CANCEL_SELECT,
    cancelItem
  };
};
export const addComment = (selectedId, item) => {
  return {
    type: ADD_COMMENT_TO_SPECIFIC_ARTICLE,
    selectedId,
    item
  };
};
export const deleteComment = (selectedId, reviewedId) => {
  return {
    type: DELETE_COMMENT_FROM_SPECIFIC_ARTICLE,
    selectedId,
    reviewedId
  };
};

import {
  CANCEL_SELECT,
  SELECT_CARD,
  ADD_OR_EDIT_ARTICLE,
  DELETE_ARTICLE,
  ADD_COMMENT_TO_SPECIFIC_ARTICLE, DELETE_COMMENT_FROM_SPECIFIC_ARTICLE
} from "../../constants/constant";

export const updateCard = (newData) => {
  return {
    type: ADD_OR_EDIT_ARTICLE,
    newData
  }
}
export const selectCard = (cardSelected) => {
  return {
    type: SELECT_CARD,
    cardSelected
  }
}
export const cancelSelected = (cancelItem) => {
  return {
    type: CANCEL_SELECT,
    cancelItem
  }
}
export const deleteCard = (id) => {
  return {
    type: DELETE_ARTICLE,
    id
  }
}
export const deleteComment = (selectedId, reviewedId) => {
  return {
    type: DELETE_COMMENT_FROM_SPECIFIC_ARTICLE,
    selectedId,
    reviewedId
  }
}
export const addComment = (selectedId, item) => {
  return {
    type: ADD_COMMENT_TO_SPECIFIC_ARTICLE,
    selectedId,
    item
  }
}

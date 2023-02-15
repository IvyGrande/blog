import { CANCEL_SELECT, DELETE, SELECT_CARD, SUBMIT_ARTICLE, UPDATE_COMMENT } from "../../constants/constant";

export const updateCard = (newData) => {
  return {
    type: SUBMIT_ARTICLE,
    newData
  }
}
export const selectCard = (cardSelected) => {
  return {
    type: SELECT_CARD,
    cardSelected
  }
}
export const cancelSelected =(cancelItem)=>{
  return{
    type:CANCEL_SELECT,
    cancelItem
  }
}
export const deleteCard = (id) => {
  return {
    type: DELETE,
    id
  }
}
export const addComment = (selectedId, item) => {
  console.log("action", selectedId, item)
  return {
    type: UPDATE_COMMENT,
    selectedId,
    item
  }
}

// export const editAccount = (id) => {
//   console.log("actionEdit", id)
//   return {
//     type: EDIT_CARD,
//     id
//   }
// }
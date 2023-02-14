import { CANCEL_SELECT, DELETE, SELECT_CARD, SUBMIT_ARTICLE } from "../../constants/constant";

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
export const cancelSelected =()=>{
  return{
    type:CANCEL_SELECT
  }
}
export const deleteCard = (id) => {
  return {
    type: DELETE,
    id
  }
}

// export const editAccount = (id) => {
//   console.log("actionEdit", id)
//   return {
//     type: EDIT_CARD,
//     id
//   }
// }
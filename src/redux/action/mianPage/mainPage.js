import {
    DELETE, EDIT, EDIT_STATE,
    SELECT_CARD,
    SUBMIT_ARTICLE
} from "../constants/constant";

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
export const deleteCard = (id) => {
    console.log("action", id)
    return {
        type: DELETE,
        id
    }
}
export const editCardAction = (id) => {
    console.log("actionEdit", id)
    return {
        type: EDIT_STATE,
        id
    }
}
export const editAccount = (id) => {
    console.log("actionEdit", id)

    return {
        type: EDIT,
        id
    }
}
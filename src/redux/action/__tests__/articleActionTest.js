import * as actions from "../article/articleAction";
import {
  ADD_OR_EDIT_ARTICLE, ADD_COMMENT_TO_SPECIFIC_ARTICLE,
  CANCEL_SELECT,
  DELETE_ARTICLE,
  DELETE_COMMENT_FROM_SPECIFIC_ARTICLE,
  SELECT_CARD
} from "../../constants/constant";

describe('actions', () => {
  it('should create an action to get a new article card', () => {
    const newData = {}
    const expectedAction = {
      type: ADD_OR_EDIT_ARTICLE,
      newData
    }
    expect(actions.updateCard(newData)).toEqual(expectedAction)
  });

  it('should create an action to get the selected card', () => {
    const cardSelected = {}
    const expectedAction = {
      type: SELECT_CARD,
      cardSelected
    }
    expect(actions.selectCard(cardSelected)).toEqual(expectedAction)
  });

  it('should create an action to get a new artcle card', () => {
    const cancelItem = {}
    const expectedAction = {
      type: CANCEL_SELECT,
      cancelItem
    }
    expect(actions.cancelSelected(cancelItem)).toEqual(expectedAction)
  });

  it('should create an action to delete the selected card', () => {
    const id = 1
    const expectedAction = {
      type: DELETE_ARTICLE,
      id
    }
    expect(actions.deleteCard(id)).toEqual(expectedAction)
  });

  it('should create an action to delete the chosen review in the selected card', () => {
    const selectedId = 1
    const reviewedId = ''
    const expectedAction = {
      type: DELETE_COMMENT_FROM_SPECIFIC_ARTICLE,
      selectedId,
      reviewedId
    }
    expect(actions.deleteComment(selectedId, reviewedId)).toEqual(expectedAction)
  });

  it('should create an action to add a comment in the selected card', () => {
    const selectedId = ''
    const item = []
    const expectedAction = {
      type: ADD_COMMENT_TO_SPECIFIC_ARTICLE,
      selectedId,
      item
    }
    expect(actions.addComment(selectedId, item)).toEqual(expectedAction)
  });
})
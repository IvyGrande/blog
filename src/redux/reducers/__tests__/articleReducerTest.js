import { articleReducer } from "../articleReducer";
import {
  ADD_NEW_ARTICLE,
  ADD_COMMENT_TO_SPECIFIC_ARTICLE,
  DELETE_ARTICLE,
  DELETE_COMMENT_FROM_SPECIFIC_ARTICLE
} from "../../../constants/constant";
import Article_List from "../../state";

describe('article reducer', () => {
  it('should return the initial state', () => {
    expect(
      articleReducer(undefined, {})
    ).toEqual(
      {
        articleList: Article_List
      }
    )
  })

  it('should handle ADD_OR_EDIT_ARTICLE', () => {
    expect(
      articleReducer(undefined, {
        type: ADD_NEW_ARTICLE,
        newData: {
          id: "21",
          title: "study",
          content: "hello,world",
          commentList: []
        }
      })
    ).toEqual(
      {
        articleList: [
          ...Article_List,
          {
            id: "21",
            title: "study",
            content: "hello,world",
            commentList: []
          }
        ]
      }
    )
  })

  it('should handle DELETE_ARTICLE', () => {
    expect(
      articleReducer({articleList: [{id: 1}, {id: 2}]}, {
        type: DELETE_ARTICLE,
        id: 1
      })
    ).toEqual(
      {
        articleList: [
          {id: 2}
        ]
      }
    )
  })

  it('should handle ADD_COMMENT_TO_SPECIFIC_ARTICLE', () => {
    expect(
      articleReducer({articleList: [{id: 1}, {id: 2, commentList: []}]}, {
        type: ADD_COMMENT_TO_SPECIFIC_ARTICLE,
        selectedId: 2,
        item: {id: 12, review: "ok"}
      })
    ).toEqual(
      {
        articleList: [
          {id: 1},
          {id: 2, commentList: [{id: 12, review: "ok"}]}
        ]
      }
    )
  })

  it('should handle DELETE_COMMENT_FROM_SPECIFIC_ARTICLE', () => {
    expect(
      articleReducer({
        articleList: [
          {id: 1},
          {id: 2, commentList: [{id: 12, review: "ok"}]}
        ]
      }, {
        type: DELETE_COMMENT_FROM_SPECIFIC_ARTICLE,
        selectedId: 2,
        reviewId:12
      })
    ).toEqual(
      {
        articleList: [
          {id: 1},
          {id: 2, commentList: []}
        ]
      }
    )
  })
})
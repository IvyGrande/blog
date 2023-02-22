import { CANCEL_SELECT, SELECT_CARD } from "../../../constants/constant";
import articleSelectedReducer from "../chosenReducer";

describe('select card reducer', () => {
  it('should return the initial state', () => {
    expect(
      articleSelectedReducer(undefined, {})
    ).toEqual(
      {
        articleSelected: {
          id: "",
          title: "",
          content: "",
          commentList: []
        }
      }
    )
  })

  it('should handle SELECT_CARD', () => {
    expect(
      articleSelectedReducer({}, {
        type: SELECT_CARD,
        cardSelected: {
          id: "1",
          title: "study",
          content: "hello,world",
          commentList: []
        }
      })
    ).toEqual(
      {
        articleSelected: {
          id: "1",
          title: "study",
          content: "hello,world",
          commentList: []
        }
      }
    )
  })

  it('should handle CANCEL_SELECT', () => {
    expect(
      articleSelectedReducer({}, {
        type: CANCEL_SELECT,
        cardSelected: {
          id: "1",
          title: "study",
          content: "hello,world",
          commentList: []
        }
      })
    ).toEqual(
      {
        articleSelected: {
          id: "",
          title: "",
          content: ""
        }
      }
    )
  })
})
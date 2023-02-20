import loginReducer from "../loginReducer";
import { UPDATE_ACCOUNT } from "../../constants/constant";

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(
      loginReducer(undefined, {})
    ).toEqual(
      {
        username: '',
        isAuthor: false
      }
    )
  })

  it('should handle UPDATE_ACCOUNT', () => {
    expect(
      loginReducer({}, {
        type: UPDATE_ACCOUNT,
        name: 'lucy'
      })
    ).toEqual(
      {
        username: 'lucy',
        isAuthor: true
      }
    )
  })
})
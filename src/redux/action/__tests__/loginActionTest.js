import * as actions from "../login/loginAction";
import { UPDATE_ACCOUNT } from "../../constants/constant";

describe('actions', () => {
  it('should create an action to store account', () => {
    const name = 'username'
    const expectedAction = {
      type: UPDATE_ACCOUNT,
      name
    }
    expect(actions.updateAccount(name)).toEqual(expectedAction)
  })
})
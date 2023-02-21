import { UPDATE_ACCOUNT } from "../../constants/constant";

export const updateAccount = (name) => {
  return {
    type: UPDATE_ACCOUNT,
    name
  }
}

import { UPDATE_ACCOUNT } from "../../constants/constant";

export const updateAccount = (name) => {
  console.log("action", name)
  return {
    type: UPDATE_ACCOUNT,
    name
  }
}

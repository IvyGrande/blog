import {UPDATE_ACCOUNT} from "../constants/constant";

export function updateAccount(name) {
    console.log(name)
    return {
        type: UPDATE_ACCOUNT,
        name
    }
}

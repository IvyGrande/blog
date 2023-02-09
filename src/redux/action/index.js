import {OPEN_PUBLISH} from "../constants/constant";


export function login() {
    return {
        type: 'login',
    }
}

export const showPublishBtn = () =>{
    return {
        type:OPEN_PUBLISH
    }
}

export function updateAccount(value) {
    return {
        type: 'UPDATE_ACCOUNT',
        value
    }
}


export function edit(){
    return {
        type: 'edit_card'
    }
}

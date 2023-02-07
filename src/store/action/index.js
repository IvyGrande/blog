export function login() {
    return {
        type: 'login',
    }
}
export function updateAccount(value) {
    return {
        type: 'UPDATE_ACCOUNT',
        value
    }
}
export function updatePassword(value) {
    return {
        type: 'UPDATE_PASSWORD',
        value
    }
}

export function edit(){
    return {
        type: 'edit_card'
    }
}

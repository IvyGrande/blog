

const loginData = {
    'account': 'admin',
    'passWord':'123456'
}
const reducer = (state = loginData, action) => {
    switch (action.type) {
        case 'UPDATE_ACCOUNT':
            return Object.assign({}, state, { 'account': action.value});
        case 'UPDATE_PASSWORD':
            return Object.assign({}, state, { 'passWord': action.value });
        default:
            return state;
    }
}
export default reducer;

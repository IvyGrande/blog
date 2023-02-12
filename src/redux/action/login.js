import {UPDATE_ACCOUNT} from "../constants/constant";
// import axios from "axios";



export const updateAccount= (name) => {
    console.log("action",name)
    // axios.post('/api/register')
    // return dispatch={
    //     axios.post('/api/users')
        return{type: UPDATE_ACCOUNT,
        name}
}

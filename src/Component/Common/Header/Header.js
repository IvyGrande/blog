import React from "react";
import './styles/Header.css'
import {Button} from "@mui/material";
import {connect} from "react-redux";
import {openCompose, openLogin} from "../../../redux/action/mianPage/mainPage";

const Header = (props) => {

    const loginClick = () => {
        window.location.href = "/login"
    }
    console.log("head", props.isAuthor)

    const composeClick = () => {
    }

    return (
        <div className="header">
            <h1>Hello,{(props.isAuthor ? props.name : "visitor")}!</h1>
            <div className="login">
                {props.name}
                <div>
                    {!props.isAuthor && <Button variant="contained" onClick={loginClick}>Login</Button>}
                    {props.isAuthor && <Button variant="contained" onClick={composeClick}>Compose</Button>}
                </div>
            </div>
        </div>)
};


// const mapStateToProps = (state) => {
//     return {
//         isAuthor: state.loginReducer.isAuthor,
//         name: state.loginReducer.userName,
//         LoginState: state.openLoginReducer
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         isLoginOpen:()=>dispatch(openLogin()),
//         isComposeOpen:()=>dispatch(openCompose())
//     }
// }

export default connect(null, null)(Header)
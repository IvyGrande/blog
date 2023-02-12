import React, {useState} from "react";
import './styles/Header.css'
import {Button} from "@mui/material";
import {connect} from "react-redux";
// import {openLogin} from "../../../redux/action/MainPage";
// import {openLoginReducer} from "../../../redux/reducers/mainPage";


const Header = (props) => {
    const [showLoginPage, setShowLoginPage] = useState(true);
    const [showComposePage, setShowComposePage] = useState(true);
    const loginClick = () => {
        console.log("header", props.isAuthor);
        // props.isLoginOpen();
        setShowLoginPage(false);
        props.addLogin(showLoginPage);
        console.log("login", showLoginPage);
        // window.location.href = "/loginReducer"
    }
    console.log("head", props.isAuthor)

    const composeClick = () => {
        setShowComposePage(false)
        props.composeState(showComposePage)
    }

    return (
        <div className="header">
            <h1>Hello,{(showLoginPage ? props.name : "visitor")}!</h1>
            <div className="login">
                {props.name}
                <div>
                    {/*<Button variant="contained" onClick={loginClick}>Login</Button>*/}
                    {/*{showLoginPage&&<Button variant="contained" onClick={composeClick}>Compose</Button>}*/}
                    {!props.isAuthor && <Button variant="contained" onClick={loginClick}>Login</Button>}
                    {props.isAuthor && <Button variant="contained" onClick={composeClick}>Compose</Button>}
                </div>
            </div>
        </div>)
};


const mapStateToProps = (state) => {
    return {
        isAuthor: state.loginReducer.isAuthor,
        name: state.loginReducer.userName,
        LoginState: state.openLoginReducer
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         isLoginOpen:()=>dispatch(openLogin)
//     }
// }

export default connect(mapStateToProps)(Header)
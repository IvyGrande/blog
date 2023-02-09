import React from "react";
import '../pages.css'
import {Button} from "@mui/material";
import {connect} from "react-redux";

const loginClick = () => {
    console.log("1")
    window.location.href="/login"
}
export const Header = () => {

    return (
        <div className="header">
            <h1>Hello,visitor!</h1>
            <div className="login">
                <Button variant="contained" onClick={loginClick}>Login</Button>
            </div>
        </div>
    )
};

function mapDispatchToProps() {
    return (
        loginClick()
    )
}

connect(null,mapDispatchToProps)(Header)
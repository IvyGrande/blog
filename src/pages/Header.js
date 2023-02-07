import React from "react";
import './pages.css'
import {Button} from "@mui/material";

export const Header = () => {
    return (
        <div className="header">
            <h1>Hello,visitor!</h1>
            <div className="login">
                <Button variant="contained">Login</Button>
            </div>
        </div>
    )
}
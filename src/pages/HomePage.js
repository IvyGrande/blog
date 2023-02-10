import React from "react";
import './_css_/pages.css'
import {Header} from "./MainPart/Header";
import {NavBar} from "./MainPart/NavBar";
import {MainPart} from "./MainPart/MainPart";

export const HomePage = () => {
    return (
        <div className="homepage">
            <Header/>
            <div className="main">
                <NavBar/>
                <MainPart/>
            </div>
        </div>
    )
}
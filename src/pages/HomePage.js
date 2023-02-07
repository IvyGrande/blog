import React from "react";
import './pages.css'
import {Header} from "./modal/Header";
import {NavBar} from "./modal/NavBar";
import {MainPart} from "./modal/MainPart";

export const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
<div className="main">
    <NavBar />
    <MainPart />
</div>
        </div>
    )
}
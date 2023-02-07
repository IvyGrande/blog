import React from "react";
import './pages.css'
import {Header} from "./Header";
import {NavBar} from "./NavBar";
import {MainPart} from "./MainPart";

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
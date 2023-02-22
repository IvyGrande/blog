import React from "react";
import './styles/MainPage.css'
import CardTable from "./Content/ArticleInfoList/CardTable";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Header/>
      <div className="main">
        <NavBar/>
        <CardTable/>
      </div>
    </div>
  )
}

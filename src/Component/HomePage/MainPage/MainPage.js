import React from "react";
import './styles/MainPage.css'
import Header from "../../Common/Header/Header";
import NavBar from "../../Common/NavBar/NavBar";
import CardTable from "./CardTable/CardTable";

export const MainPage = () => {
  return (<>
      <div className="homepage">
        <Header/>
        <div className="main">
          <NavBar/>
          <CardTable/>
        </div>
      </div>
    </>
  )
}

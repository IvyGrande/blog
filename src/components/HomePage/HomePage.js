import React from "react";
import './styles/MainPage.css'
import CardTable from "./Content/ArticleInfoList/CardTable";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import PersonalCenter from "./Content/PersonalCenter/PersonalCenter";
import HotList from "./Content/HotList/HotList";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Header/>
      <div className="main">
        <NavBar/>
      <Routes>
        <Route path='/' element={<CardTable/>}></Route>
        <Route path='/hot' element={<HotList />}></Route>
        <Route path='/mine' element={<PersonalCenter />}></Route>
      </Routes>
      </div>
    </div>
  )
}

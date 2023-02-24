import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import ArticleCard from "./Content/ArticleInfoList/ArticleCard";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import PersonalCenter from "./Content/PersonalCenter/PersonalCenter";
import HotList from "./Content/HotList/HotList";
import './styles/MainPage.css'

export const HomePage = (props) => {
  const {cardList}=props;

  const CardModal = cardList.map(
    item => {
      return (
        <ArticleCard
          key={item.id}
          id={item.id}
          list={item}
        />
      );
    }
  );

  return (
    <div className="homepage">
      <Header/>
      <div className="main">
        <NavBar/>
        <Routes>
          <Route path='/' element={
            <div>
              {CardModal}
            </div>
          }
          >
          </Route>
          <Route path='/hot' element={<HotList/>}></Route>
          <Route path='/mine' element={<PersonalCenter/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cardList: state.articleReducer.articleList
  };
};

export default connect(mapStateToProps)(HomePage);

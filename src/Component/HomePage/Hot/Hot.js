import React from "react";
import Header from "../../Common/Header/Header";
import NavBar from "../../Common/NavBar/NavBar";

export default class Hot extends React.Component {
  render() {
    return (
      <div>
        <div className="homepage">
          <Header/>
          <div className="main">
            <NavBar/>
            <div>HOT</div>
          </div>
        </div>
      </div>
    )
  }
}
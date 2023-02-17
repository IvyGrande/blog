import React from "react";
import Header from "../../Header/Header";
import NavBar from "../../NavBar/NavBar";

export default class Editor extends React.Component {
  render() {
    return (
      <div>
        <div className="homepage">
          <Header/>
          <div className="main">
            <NavBar/>
            <div>Editor</div>
          </div>
        </div>
      </div>
    )
  }
}
import React from "react";
import './styles/Header.css'
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();
  const loginClick = () => {
    navigate("/login");
  }
  const composeClick = () => {
    navigate("/compose");
  }

  return (
    <div className="header">
      <h1>Hello,{(props.isAuthor ? props.name : "visitor")}!</h1>
      <div className="login">
        {!props.isAuthor &&
          <Button variant="contained" onClick={loginClick} id="test">Login</Button>
        }
        {props.isAuthor && <Button variant="contained" onClick={composeClick}>Compose</Button>}
      </div>
    </div>)
};

const mapStateToProps = (state) => {
  return {
    isAuthor: state.loginReducer.isAuthor,
    name: state.loginReducer.username
  }
}

export default connect(mapStateToProps, null)(Header)
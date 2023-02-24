import React from "react";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import './styles/Header.css'

export const Header = (props) => {
  const {isAuthor,username} = props;
  const navigate = useNavigate();

  const composeClick = () => {
    navigate("/compose");
  };

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <h1>Hello,{(isAuthor ? username : "visitor")}!</h1>
      {isAuthor
        ? <Button variant="contained" onClick={composeClick}>Compose</Button>
        : <Button variant="contained" onClick={loginClick}>Login</Button>
      }
    </div>);
};

const mapStateToProps = (state) => {
  const {isAuthor, username} = state.loginReducer;

  return {
    isAuthor,
    username,
  };
};

export default connect(mapStateToProps, null)(Header);

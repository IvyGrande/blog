import React from "react";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import './styles/Header.css'

export const Header = (props) => {
  const {isAuthor,username} = props;
  const navigate = useNavigate();

  const handleClick_navToComposePage = () => {
    navigate("/compose");
  };

  const handleClick_navToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <h1>Hello,{(isAuthor ? username : "visitor")}!</h1>
      {isAuthor
        ? <Button variant="contained" onClick={handleClick_navToComposePage}>Compose</Button>
        : <Button variant="contained" onClick={handleClick_navToLoginPage}>Login</Button>
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

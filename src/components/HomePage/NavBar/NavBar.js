import React from "react";
import { ListItemButton } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import './styles/NavBar.css'

export const NavBar = (props) => {
  const {isAuthor} = props;
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <ListItemButton className="button" onClick={() => navigate("/")}>
        <h4>主页</h4>
      </ListItemButton>
      <ListItemButton className="button" onClick={() => navigate("/hot")}>
        <h4>热点</h4>
      </ListItemButton>
      {isAuthor &&
        <ListItemButton onClick={() => navigate("/mine")}>
          <h4>我的</h4>
        </ListItemButton>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthor: state.loginReducer.isAuthor
  };
};

export default connect(mapStateToProps)(NavBar);
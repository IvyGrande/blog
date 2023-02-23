import React from "react";
import './styles/NavBar.css'
import { List, ListItemButton } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const NavBar = (props) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/*<List*/}
      {/*  component="nav"*/}
      {/*  aria-labelledby="nested-list-subheader"*/}
      {/*>*/}
        <ListItemButton className="button" onClick={() => navigate("/")}>
          <h4>主页</h4>
        </ListItemButton>
        <ListItemButton className="button" onClick={() => navigate("/hot")}>
          <h4>热点</h4>
        </ListItemButton>
        {props.isAuthor &&
          <ListItemButton onClick={() => navigate("/mine")} className="button">
            <h4>我的</h4>
          </ListItemButton>}
      {/*</List>*/}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthor: state.loginReducer.isAuthor
  }
}

export default connect(mapStateToProps)(NavBar)
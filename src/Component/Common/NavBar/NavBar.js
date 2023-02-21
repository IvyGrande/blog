import React from "react";
import './styles/NavBar.css'
import { List, ListItemButton, ListItemText } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const NavBar = (props) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton className="button" onClick={() => navigate("/")}>
          <ListItemText primary="主页"/>
        </ListItemButton>
        <ListItemButton className="button" onClick={() => navigate("/hot")}>
          <ListItemText primary="热点"/>
        </ListItemButton>
        {props.isAuthor &&
          <ListItemButton onClick={() => navigate("/mine")} className="button">
            <ListItemText primary="我的"/>
          </ListItemButton>}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthor: state.loginReducer.isAuthor
  }
}

export default connect(mapStateToProps)(NavBar)
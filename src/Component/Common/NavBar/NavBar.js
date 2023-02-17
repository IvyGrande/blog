import React from "react";
import './styles/NavBar.css'
import { Link, List, ListItemButton, ListItemText } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton className="nav"onClick={()=>navigate("/")}>
          <ListItemText primary="主页"/>
        </ListItemButton>
          <ListItemButton className="nav"onClick={()=>navigate("/hot")}>
            <ListItemText primary="热点"/>
          </ListItemButton>
        {props.isAuthor &&
          <ListItemButton onClick={()=>navigate("/mine")} className="nav">
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
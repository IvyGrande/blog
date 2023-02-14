import React from "react";
import './styles/NavBar.css'
import { Link, List, ListItemButton, ListItemText } from "@mui/material";
import { connect } from "react-redux";

const NavBar = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton className="nav">
          <Link to="/"> <ListItemText primary="主页"/></Link>
        </ListItemButton>
        <Link to={"/hot"}>
          <ListItemButton className="nav">
            <ListItemText primary="热点"/>
          </ListItemButton>
        </Link>
        {props.isAuthor &&
          <ListItemButton onClick={handleClick} className="nav">
            <ListItemText primary="我的"/>
            {/*{open ? <ExpandLess /> : <ExpandMore />}*/}
          </ListItemButton>}
      </List>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    isAuthor: state.loginReducer.isAuthor
  }
}

export default connect(mapStateToProps)(NavBar)
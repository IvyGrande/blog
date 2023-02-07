import React from "react";
import "./pages.css"
import { List, ListItemButton, ListItemText} from "@mui/material";

// export const NavBar = () =>{
//     return (
//         <div className="navbar">
//             <div className="nav">主页</div>
//             <div className="nav">热点</div>
//             <div className="nav">我的</div>
//         </div>
//     )
// }


export const NavBar = () => {
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
            <ListItemText primary="主页" />
        </ListItemButton>
        <ListItemButton className="nav">
            <ListItemText primary="热点" />
        </ListItemButton>
        <ListItemButton onClick={handleClick} className="nav">
            <ListItemText primary="我的" />
            {/*{open ? <ExpandLess /> : <ExpandMore />}*/}
        </ListItemButton>
    </List>
</div>
    );
}
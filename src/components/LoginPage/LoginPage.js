import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { Input } from 'antd';
import { useNavigate } from "react-router-dom";

import { updateAccount } from "../../redux/action/loginAction";
import "./styles/loginPage.css"

const LoginPage = (props) => {
  const { updateAccount} = props
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const getUsername = (e) => {
    setUserName(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickLoginBtn = () => {
    if (!userName) {
      alert('Please input userName!');
    } else if (!password) {
      alert('Please input password!');
    } else {
      updateAccount(userName);
      navigate("/");
    }
  };

  return (
    <div className="loginBody">
      <div className="loginCard">
        <h1>LOGIN</h1>
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <Input type="username"
                   className="form-control"
                   id="inputEmail3"
                   onChange={getUsername}
                   placeholder="Username"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Password</label>
          <div className="form-control">
            <Input.Password placeholder="password" onChange={getPassword}/>
          </div>
        </div>
        <Button variant="outlined" onClick={handleClickLoginBtn}>sign in</Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccount: (e) => dispatch(updateAccount(e))
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);

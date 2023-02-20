import React, { useState } from "react";
import "./styles/login.css"
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { updateAccount } from "../../redux/action/login/loginAction";
import { Input } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();
  const handleChangeAccount = (e) => {
    setUserName(e.target.value);
  }
  const userLogin = () => {
    props.getUser(userName);
    navigate("/");
  }

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
                   onChange={handleChangeAccount}
                   placeholder="Username"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Password</label>
          <div className="form-control">
            <Input.Password placeholder="password"/>
          </div>
        </div>
        <div className="loginBtn">
          <Button variant="outlined" onClick={userLogin}>sign in</Button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (e) => dispatch(updateAccount(e))
  }
}

export default connect(null, mapDispatchToProps)(Login)
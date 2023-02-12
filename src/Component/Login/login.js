import React from "react";
import "./styles/login.css"
import {connect} from "react-redux";
import {Button} from "@mui/material";
import {updateAccount} from "../../redux/action/login";
import { Input } from 'antd';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeAccount = this.handleChangeAccount.bind(this);
        this.userLogin = this.userLogin.bind(this)
        this.state = {
            userName: ''
        }
    }

    handleChangeAccount(event) {
        this.state.userName = event.target.value;
    }

    userLogin = () => {
        // e.preventDefault()
        //request post
        console.log(this.state.userName)
        this.props.getUser(this.state.userName)
        this.props.closeLogin(false)
        // window.location.href="/"


    }

    render() {
        return (<div className="loginBody">
                <div className="loginCard">
                    <h1>LOGIN</h1>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Username</label>
                        <div className="col-sm-10">
                            <input type="username"
                                   className="form-control"
                                   id="inputEmail3"
                                   onChange={this.handleChangeAccount}
                                   placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <Input.Password placeholder="input password" />
                    </div>
                    <div className="loginBtn">
                        <Button variant="outlined" onClick={this.userLogin}>sign in</Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (e) => dispatch(updateAccount(e))
    }
}

export default connect(null, mapDispatchToProps)(Login)
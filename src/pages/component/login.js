import React from "react";
import "../_css_/component.css"
import Stack from '@mui/material/Stack';
import {Button, Input} from "@mui/material";
import {connect} from "react-redux";
import * as loginActions from "../../redux/action/login"
import {bindActionCreators} from "redux";
import store from "../../redux/store";
import {updateAccount} from "../../redux/action/login";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeAccount = this.handleChangeAccount.bind(this);
        this.userLogin = this.userLogin.bind(this);
        this.state = {
            userName: ''
        }
    }

    handleChangeAccount(event) {
        this.state.userName = event.target.value;
    }

    userLogin() {
        const {a} = this.props;
        console.log(a);
        console.log("1")
        // window.location.href = "/"
        this.props.updateAccount(this.state.userName);
        console.log(store.getState('account'),"===");
    }

    render() {
        return (
            <div className="loginBody">
                <div className="loginCard">
                    <h1>LOGIN</h1>
                    <div className="inbox">
                        <Stack spacing={2} sx={{width: 300}}>
                            {this.props.a}
                            <Input placeholder="账号" onChange={this.handleChangeAccount}/>
                            <Input placeholder="密码" />
                        </Stack>
                    </div>
                    <div className="loginBtn">
                        <Button variant="outlined" onClick={this.userLogin}>Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...loginActions
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
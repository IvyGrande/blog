import React from "react";
import "./component.css"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {Button} from "@mui/material";
// import {connect} from "react-redux";
// import * as loginActions from "../../redux/action/login"
// import {bindActionCreators} from "redux";

const userLogin = () => {
    console.log("1")
    window.location.href = "/"
    // this.props.loginActions.updateAccount()
}

function handleAccount() {

}

export class Login extends React.Component {
    render() {
        return (<div className="loginBody">

            <div className="loginCard">
                <h1>LOGIN</h1>
                <div className="inbox">
                    <Stack spacing={2} sx={{width: 300}}>
                        <Autocomplete
                            id="free-solo-demo"
                            freeSolo
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) =>
                                <TextField {...params} label="UserName"
                                           onChange={handleAccount}
                                />}
                        />
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="PassWord"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </div>

                <div className="loginBtn">
                    <Button variant="outlined" onClick={userLogin}>Login</Button>
                </div>

            </div>
        </div>);
    }
}

const top100Films = [];
//
// const mapStateToProps=(state)=>{
//     return{state}
// }
// const mapDispatchToProps =(dispatch)=>{
//     return{
//         loginActions:()=>bindActionCreators(loginActions,dispatch)
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Login)
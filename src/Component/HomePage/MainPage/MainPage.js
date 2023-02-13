import React from "react";
import './styles/MainPage.css'
import Header from "../../Common/Header/Header";
import {NavBar} from "../../Common/NavBar/NavBar";
import Login from "../../Login/Login";
import {connect} from "react-redux";
import Compose from "../../Common/Compose/Compose";
import CardTable from "./CardTable/CardTable";

const MainPage = (props) => {

    return (<div>
            {<div className="homepage">
                <Header/>
                <div className="main">
                    <NavBar/>
                    <CardTable/>
                </div>
            </div>}
            {/*{props.loginState && <Login />}*/}
            {/*{props.showCompose && <Compose/>}*/}

        </div>

    )

}

// function mapStateToProps(state) {
// console.log("state",state.openPageReducer)
//     return {
//         loginState: state.openPageReducer.login,
//         showHomePage:state.openPageReducer.home,
//         showCompose:state.openPageReducer.compose
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        // getState: () => dispatch()
    }
}


export default connect(null, mapDispatchToProps)(MainPage)
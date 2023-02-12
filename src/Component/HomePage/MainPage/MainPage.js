import React, {useState} from "react";
import './styles/MainPage.css'
import Header from "../../Common/Header/Header";
import {NavBar} from "../../Common/NavBar/NavBar";
import Content from "../../Common/Table/Table";
import Login from "../../Login/login";
import {connect} from "react-redux";
import {Compose} from "../Compose/Compose";

const MainPage = () => {
    const [showHomePage, setShowHomePage] = useState(true);
    const [showLogin,setShowLogin]= useState(false);
    const [showCompose,setShowCompose]= useState(false);
    const getLoginState = (e) => {
        setShowHomePage(!e);
        setShowLogin(e);
        setShowCompose(!e);
    };
    const getComposeState =(e)=>{
        setShowHomePage(!e);
        setShowLogin(!e);
        setShowCompose(e);
    }
    console.log("show", showLogin)
    return (<div>
            {/*<div className="homepage">*/}
            {/*                <Header/>*/}
            {/*                <div className="main">*/}
            {/*                    <NavBar/>*/}
            {/*                    <Content/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*<Login/>*/}
            {showHomePage && <div className="homepage">
                <Header
                    addLogin={getLoginState}
                    composeState={getComposeState}
                />
                <div className="main">
                    <NavBar/>
                    <Content/>
                </div>
            </div>}
            {showLogin && <Login closeLogin={getLoginState}/>}

            {showCompose&&            <Compose/>
            }        </div>

    )

}

function mapStateToProps(state) {

    return {
        loginState: state.openLoginReducer
    }
}

export default connect(mapStateToProps)(MainPage)
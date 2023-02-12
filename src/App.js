import {Route, Routes} from "react-router-dom";
import MainPage from "./Component/HomePage/MainPage/MainPage";
import Login from "./Component/Login/login";


function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/loginReducer" element={<Login/>}/>
        </Routes>
    );
}

export default App;

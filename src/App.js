import {Route, Routes} from "react-router-dom";
import MainPage from "./Component/HomePage/MainPage/MainPage";
import Login from "./Component/Login/Login";
import Hot from "./Component/HomePage/Hot/Hot";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/hot" element={<Hot/>}/>
        </Routes>
    );
}

export default App;

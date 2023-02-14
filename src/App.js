import { Route, Routes } from "react-router-dom";
import { MainPage } from "./Component/HomePage/MainPage/MainPage";
import Login from "./Component/Login/Login";
import Hot from "./Component/HomePage/Hot/Hot";
import Compose from "./Component/HomePage/Compose/Compose";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/compose" element={<Compose/>}/>
      <Route path="/hot" element={<Hot/>}/>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { MainPage } from "./Component/HomePage/MainPage/MainPage";
import Login from "./Component/Login/Login";
import Hot from "./Component/HomePage/Hot/Hot";
import Compose from "./Component/Compose/Compose";
import Editor from "./Component/HomePage/Editor/Editor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/compose" element={<Compose/>}/>
      <Route path="/hot" element={<Hot/>}/>
      <Route path="/mine" element={<Editor/>}/>
    </Routes>
  );
}

export default App;

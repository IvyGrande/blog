import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import HotList from "./components/HomePage/Content/HotList/HotList";
import Compose from "./components/ArticleContent/ArticleContent";
import PersonalCenter from "./components/HomePage/Content/PersonalCenter/PersonalCenter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}>
        <Route path="hot" element={<HotList/>}/>
        <Route path="mine" element={<PersonalCenter/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/compose" element={<Compose/>}/>
      <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
  );
}

export default App;

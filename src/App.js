import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Hot from "./components/HomePage/Content/HotList/Hot";
import Compose from "./components/ArticleContent/ArticleContent";
import Editor from "./components/HomePage/Content/PersonalCenter/Editor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}>
        {/*<Route index element={</>}/>*/}
        <Route path="/hot" element={<Hot/>}/>
        <Route path="/mine" element={<Editor/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/compose" element={<Compose/>}/>

    </Routes>
  );
}

export default App;

import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import Login from "./pages/component/login";




function App() {
  return (
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/loginReducer" element={<Login />}/>
          </Routes>
  );
}

export default App;

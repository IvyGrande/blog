import {Route, Routes} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import {HomePage} from "./pages/HomePage";
import {Login} from "../src/pages/component/login";



function App() {
  return (
      <Provider store={store}>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<Login />}/>
          </Routes>
      </Provider>
  );
}

export default App;

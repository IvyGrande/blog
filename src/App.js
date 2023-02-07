import {Route, Routes} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import {HomePage} from "./pages/HomePage";

function App() {
  return (
      <Provider store={store}>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
          </Routes>
      </Provider>
  );
}

export default App;

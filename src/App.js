
import store from "./store";
import {Provider} from "react-redux";
import {HomePage} from "./pages/HomePage";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <HomePage />
          </div>
      </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import { AppBar } from "./AppBar";
import store from "./store";
import "./styles/index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="fixed top-0 left-1/2 z-10 h-16 w-full max-w-screen-2xl -translate-x-1/2">
        <AppBar />
      </div>
    </Provider>
  );
}

export default App;

import { AppBar } from "./AppBar";
import "./styles/index.css";

function App() {
  return (
    <div>
      <div className="fixed top-0 left-1/2 z-10 h-16 w-full max-w-screen-2xl -translate-x-1/2">
        <AppBar />
      </div>
    </div>
  );
}

export default App;

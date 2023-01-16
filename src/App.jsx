import { useEffect } from "react";
import "./App.css";
import { Homepage } from "./Pages/Homepage";

function App() {
  useEffect(() => {
    document.title = "Avneesh Grover";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
      </header>
    </div>
  );
}

export default App;

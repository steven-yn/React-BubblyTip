import { useState } from "react";
import reactLogo from "./react.svg";
import viteLogo from "./vite.svg";
import "./App.css";
import useBubblyTip from "../hooks/useBubblyTip";
import BubblyTip from "../components/BubblyTip";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + React-Bubblytip</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>React-BubblyTip Testing App</p>
      </div>
      <p className="read-the-docs">Click on the Bubblytip</p>
      <Temp />
    </div>
  );
}

const Temp = () => {
  const [isView, msgPush] = useBubblyTip();

  const onClick = () => {
    msgPush((push) => !push);
  };

  return (
    <div className="Wrap" style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="Container"
        style={{ position: "relative", width: "200px" }}
      >
        <button onClick={onClick} style={{ width: "200px" }}>
          push bubbly
        </button>
        <BubblyTip push={isView}>Here is!</BubblyTip>
      </div>
    </div>
  );
};

export default App;

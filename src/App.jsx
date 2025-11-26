import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const circle = (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="blue"
        stroke="black"
        stroke-width="3"
      />
    </svg>
  );
  const pos = (leftPos, topPos) => (
    <div
      style={{
        position: "absolute",
        top: topPos,
        left: leftPos,
      }}
    >
      {circle}
    </div>
  );
  var frame;
  for (let i = 0; i < 800; i += 100) {
    let canvas = <div> {pos(i % 400, i >= 400 ? 100 : 0)} </div>;
    frame = (
      <div>
        <div>{frame}</div> <div> {canvas}</div>
      </div>
    );
  }
  return (
    <>
      <div>{frame}</div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

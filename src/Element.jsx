import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function Element() {
  const [count, setCount] = useState(0);
  const circle = (rad)=>(
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx= "100"
        cy= "100"
        r={rad}
        fill="blue"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
  const pos = (leftPos, topPos, rad) => (
    <div
      style={{
        position: "absolute",
        top: topPos,
        left: leftPos,
      }}
    >
      {circle(rad)}
    </div>
  );
  var frame;
  var Z=50;
  let canvas;
  for (let i = 0; i < 100*count; i += 100) {
    for (let j = 0; j < 100*count; j += 100) {
     if (i >= 600 || j>=600){
          Z = Z/2;
      canvas = <div> {pos((i-300)*0.25, (j-300)*0.25, 12.5)} </div>;
      }
      else if (i >= 300 || j>=300){
          Z = Z/2;
      canvas = <div> {pos((i-300)*0.5, (j-300)*0.5, 25)} </div>;
      }
       else{
      canvas = <div> {pos(i, j, 50)} </div>;

      }
      frame = (
        <div>
          <div>{frame}</div> <div> {canvas}</div>
        </div>
      );
    }
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

export default Element;

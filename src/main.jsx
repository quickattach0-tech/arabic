import { HashRouter, Routes, Route, Navigate  } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Menu from './Menu.jsx';
import './index.css';
import Element from "./Element.jsx";

createRoot(document.getElementById('root')).render(
  
   <HashRouter>
    <Menu />
      <Routes >
     <Route path="/" element={<Navigate to="/state" />} />
     <Route path="/state" element={<Element />} />
      <Route path="pool" element={<App />} />
      <Route path="*" element={<div>not found</div>}/>
      <Route path="/core" element={<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Volcano Eruption Animation</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            margin: 0;\n            height: 100vh;\n            background: linear-gradient(to top, #0f0c29, #302b63, #24243e);\n            overflow: hidden;\n            display: flex;\n            justify-content: center;\n            align-items: flex-end;\n        }\n\n        .volcano {\n            position: relative;\n            width: 400px;\n            height: 500px;\n        }\n\n        .mountain {\n            width: 0;\n            height: 0;\n            border-left: 200px solid transparent;\n            border-right: 200px solid transparent;\n            border-bottom: 500px solid #4a2c2a;\n            position: absolute;\n            bottom: 0;\n        }\n\n        .crater {\n            position: absolute;\n            top: 50px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 150px;\n            height: 80px;\n            background: #2e1a1a;\n            border-radius: 50%;\n            box-shadow: inset 0 20px 40px #000;\n        }\n\n        .lava {\n            position: absolute;\n            top: 30px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 100px;\n            height: 100px;\n            background: radial-gradient(#ff6600, #ff0000);\n            border-radius: 50%;\n            animation: bubble 4s infinite;\n            box-shadow: 0 0 50px #ff6600;\n        }\n\n        @keyframes bubble {\n            0% { transform: translateX(-50%) scale(1); }\n            50% { transform: translateX(-50%) scale(1.2); }\n            100% { transform: translateX(-50%) scale(1); }\n        }\n\n        .smoke {\n            position: absolute;\n            bottom: 400px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 200px;\n            height: 200px;\n            background: rgba(100, 100, 100, 0.5);\n            border-radius: 50%;\n            animation: smoke 10s infinite;\n        }\n\n        @keyframes smoke {\n            0% { transform: translateX(-50%) translateY(0) scale(0.5); opacity: 1; }\n            100% { transform: translateX(-50%) translateY(-800px) scale(5); opacity: 0; }\n        }\n\n        .lava-flow {\n            position: absolute;\n            top: 100px;\n            width: 50px;\n            height: 600px;\n            background: linear-gradient(to bottom, #ff6600, #ff0000);\n            animation: flow 8s infinite;\n            box-shadow: 0 0 30px #ff0000;\n        }\n\n        .lava-flow.left {\n            left: 100px;\n            transform: rotate(-20deg);\n        }\n\n        .lava-flow.right {\n            right: 100px;\n            transform: rotate(20deg);\n        }\n\n        @keyframes flow {\n            0% { height: 0; }\n            100% { height: 600px; }\n        }\n\n        .lava-drop {\n            position: absolute;\n            top: 100px;\n            background: radial-gradient(#ff9900, #ff0000);\n            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\n            opacity: 0.8;\n            animation: drop linear infinite;\n        }\n\n        @keyframes drop {\n            0% { transform: translateY(0); }\n            100% { transform: translateY(100vh); }\n        }\n\n        .ash {\n            position: absolute;\n            width: 10px;\n            height: 10px;\n            background: #333;\n            border-radius: 50%;\n            animation: ash-fall 15s linear infinite;\n        }\n\n        @keyframes ash-fall {\n            0% { transform: translateY(-100px) translateX(0); opacity: 1; }\n            100% { transform: translateY(100vh) translateX(200px); opacity: 0; }\n        }\n    "
    }}
  />
  <div className="volcano">
    <div className="mountain" />
    <div className="crater" />
    <div className="lava" />
    <div className="smoke" />
    <div
      className="smoke"
      style={{ animationDelay: "2s", width: 250, height: 250 }}
    />
    <div
      className="smoke"
      style={{ animationDelay: "4s", width: 150, height: 150 }}
    />
    <div className="lava-flow left" />
    <div className="lava-flow right" />
    {/* Randomized lava drops for eruption effect */}
    <div
      className="lava-drop"
      style={{
        left: "66%",
        animationDelay: "4.36s",
        animationDuration: "10.23s",
        width: 16,
        height: 16
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "48%",
        animationDelay: "0.30s",
        animationDuration: "9.60s",
        width: 22,
        height: 22
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "38%",
        animationDelay: "2.15s",
        animationDuration: "8.57s",
        width: 16,
        height: 16
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "13%",
        animationDelay: "3.76s",
        animationDuration: "14.64s",
        width: 17,
        height: 17
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "45%",
        animationDelay: "1.62s",
        animationDuration: "11.20s",
        width: 28,
        height: 28
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "24%",
        animationDelay: "2.98s",
        animationDuration: "12.87s",
        width: 32,
        height: 32
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "32%",
        animationDelay: "2.63s",
        animationDuration: "8.58s",
        width: 37,
        height: 37
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "83%",
        animationDelay: "3.55s",
        animationDuration: "11.40s",
        width: 31,
        height: 31
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "8%",
        animationDelay: "2.21s",
        animationDuration: "12.86s",
        width: 38,
        height: 38
      }}
    />
    <div
      className="lava-drop"
      style={{
        left: "25%",
        animationDelay: "4.55s",
        animationDuration: "13.21s",
        width: 15,
        height: 15
      }}
    />
    {/* Add more drops as needed for denser eruption */}
    {/* Ash particles */}
    <div
      className="ash"
      style={{ left: "30%", animationDelay: "0s", animationDuration: "20s" }}
    />
    <div
      className="ash"
      style={{ left: "50%", animationDelay: "3s", animationDuration: "15s" }}
    />
    <div
      className="ash"
      style={{ left: "70%", animationDelay: "6s", animationDuration: "25s" }}
    />
  </div>
</>
} />
        {/* Other routes can be defined here */}
      </Routes>
      </HashRouter>
);

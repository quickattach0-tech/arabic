import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Element from "./Element.jsx"
createRoot(document.getElementById('root')).render(
  
 <BrowserRouter>
 <App/>
    <Routes>
      <Route index element={<App />} />
      <Route path="/el" element={<Element />} />
    </Routes>
  </BrowserRouter>
);

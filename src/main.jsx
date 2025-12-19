import { BrowserRouter, Routes, Route, Link } from "react-router";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Element from "./Element.jsx"
createRoot(document.getElementById('root')).render(
  
 <BrowserRouter>
    <Routes>
      
      <Route path="arabic/core" element={<App />} />
      <Route path="arabic/el" element={<Element />} />
      <Route path="*" element={<div>not found</div>}/>
      <Route path="arabic/" element={<> <Link to="core">-core</Link> <div>--data </div> <div>---pool </div></>}/>
    </Routes>
  </BrowserRouter>
);

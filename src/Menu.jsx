import {useNavigate} from 'react-router';
import { useState } from "react";
  
function Menu(){
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate(); // Called inside the provider context
  return(
  <div>
    <div>
      <button onClick={() => setFlag(!flag)}>💱 Menu </button>
    </div>
    {flag&&<div>
    <div>
      <button onClick={() => navigate("/state")}>🍭 State</button>
    </div>
    <div>
      <button onClick={() => navigate("/pool")}>🎲 Pool</button>
    </div>
    <div>
      <button onClick={() => navigate("/core")}>🌋 Core</button>
    </div>
    </div>}
    </div>
);
}
export default Menu;
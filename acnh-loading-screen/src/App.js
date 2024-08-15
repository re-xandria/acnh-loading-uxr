import { useState, useRef } from "react";
import "./Components/Button.js";
import "./Components/Scene.js";
import "./App.scss";
import Button from "./Components/Button.js";
import Scene from "./Components/Scene.js";

export default function App() {
  const [renderScene1, setRenderScene1] = useState(true);
  const scene1 = "Loading Screen A";
  const scene2 = "Loading Screen B";

  const toggleMenu = (button) => {
    button.classList.toggle("change")
    document.querySelector(".buttonA").classList.toggle("change")
    document.querySelector(".buttonB").classList.toggle("change")
  }
  
  return (
    <div>
      <div className="button-container">
        <div className="menu-button change" onClick={(e) => toggleMenu(e.currentTarget)}>
          <div className="bar1 change"></div>
          <div className="bar2 change"></div>
          <div className="bar3 change"></div>
        </div>
        <Button className="buttonA" onClick={() => setRenderScene1(true)} scene={scene1} />
        <Button className="buttonB" onClick={() => setRenderScene1(false)} scene={scene2} />
      </div>
      <Scene className='scene' renderScene1={renderScene1}  />
    </div>
  );
}


import { useState } from "react";
import "./Components/Button.js";
import "./Components/Scene.js";
import "./App.scss";
import Button from "./Components/Button.js";
import Scene from "./Components/Scene.js";

export default function App() {
  const [renderScene1, setRenderScene1] = useState(true);

  const scene1 = "Loading Screen A";
  const scene2 = "Loading Screen B";

  return (
    <div>
      {/* Make reusable button component that handles onClick and changes scenes*/}
      <Button onClick={() => setRenderScene1(true)} scene={scene1} />
      <Button onClick={() => setRenderScene1(false)} scene={scene2} />
      <Scene renderScene1={renderScene1} />
    </div>
  );
}


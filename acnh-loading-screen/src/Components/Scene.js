import Spline from "@splinetool/react-spline";
import { useState, useEffect, useRef } from "react";

const Scene = ({ renderScene1 }) => {
  const [text, setText] = useState(
    "Tips and information that will help you on your adventure will appear here!"
  );
  const [id, setId] = useState(Math.floor(Math.random() * 100));
  const [isLoadedA, setIsLoadedA] = useState(false);
  const [isLoadedB, setIsLoadedB] = useState(false);
  const [objectToAnimate, setObjectToAnimate] = useState(null);

  //use math.random to return a random id, cannot be the same as the current id
  //function needs to be called on every mouse down event
  //the animation plays every 5s, if lmb pressed before animation finished wait for animation to finish then change text
  //the text cannot change mid-animation
  //the spline animation needs to always play on lmb press, even if outside the spline player window

  //both scenes need to wait for spline obj to load before displaying text
  const getTip = () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/tips", requestOptions)
      .then((res) => res.json())
      .then((res) => setText(res[id].text))
      .catch((error) => console.log("Error retrieving text:", error));
  };

  const handleAnimationEvent = (e) => {
    console.log(e, "Animation ended");
    setId(Math.floor(Math.random() * 100));
    getTip();
  };

  useEffect(() => {
    setIsLoadedA(false);
    setIsLoadedB(false);
  }, [renderScene1]);

  const handleLoadedA = () => {
    setIsLoadedA(true);
  };

  const handleLoadedB = (spline) => {
    setIsLoadedB(true);
    setObjectToAnimate(
      spline.findObjectById("05a4c250-ca69-41b7-8c65-e301b3b11e6f")
    );
  };

  // Handler for screen click
  const handleScreenClick = () => {
    if (objectToAnimate) {
      console.log(objectToAnimate);

      // Trigger animation in Spline
      objectToAnimate.emitEvent("mouseDown");
      console.log("going");
    }
  };

  return (
    <div className="scene">
      {renderScene1 ? (
        <div className="SA">
          <Spline
            scene="https://prod.spline.design/Z0NNAiT7tCuqSR5Q/scene.splinecode"
            onLoad={handleLoadedA}
          ></Spline>
          {isLoadedA && (
            <div className="loadingA">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          )}
        </div>
      ) : (
        <div className="SB">
          <Spline
            className="SB-obj"
            scene="https://prod.spline.design/xsGg0p2xv04ACpvW/scene.splinecode"
            onLoad={handleLoadedB}
          ></Spline>
          {isLoadedB && (
            <div>
              <button type="button" onClick={handleScreenClick}>
                Trigger Spline Animation
              </button>
              <p onAnimationIteration={handleAnimationEvent} className="tips">
                {text}
              </p>
              <div className="loadingB">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Scene;

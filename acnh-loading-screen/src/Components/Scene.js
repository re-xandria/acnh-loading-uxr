import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";

const Scene = ({ renderScene1 }) => {
  const [text, setText] = useState(
    "Tips and information that will help you on your adventure will appear here!"
  );
  const [id, setId] = useState(Math.floor(Math.random() * 100));

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

  useEffect(() => {
    // Initial fetch
    getTip();

    // Set interval to fetch tips every 4 seconds
    const intervalId = setInterval(() => {
      setId(Math.floor(Math.random() * 100));
      console.log(id)
      getTip();
    }, 3000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, [id]);

  return (
    <div className="scene">
      {renderScene1 ? (
        <div className="SA">
          <Spline scene="https://prod.spline.design/Z0NNAiT7tCuqSR5Q/scene.splinecode"></Spline>
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
        </div>
      ) : (
        <div className="SB">
          <Spline
            className="SB-obj"
            scene="https://prod.spline.design/xsGg0p2xv04ACpvW/scene.splinecode"
          ></Spline>
          <p className="tips">{text}</p>
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
  );
};

export default Scene;

import Spline from "@splinetool/react-spline";
import { useState } from "react";

const Scene = ({ renderScene1 }) => {
  return (
    // each scene will have a loading icon in the bottom right
    // scene b will have text component
    <div>
      {renderScene1 ? (
        <div className="SA">
          <Spline scene="https://prod.spline.design/Z0NNAiT7tCuqSR5Q/scene.splinecode"></Spline>
        </div>
      ) : (
        <div className="SB">
          <Spline scene="https://prod.spline.design/xsGg0p2xv04ACpvW/scene.splinecode"></Spline>
        </div>
      )}
    </div>
  );
};

export default Scene;

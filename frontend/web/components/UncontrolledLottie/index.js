import React from "react";
import Lottie from "react-lottie";

function UncontrolledLottie({width, height, animationData}) {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  return (
    <Lottie options={defaultOptions} height={height} width={width} />
  );
}

export default UncontrolledLottie;

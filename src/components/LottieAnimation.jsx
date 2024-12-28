import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/animation-IMG/Laptop-Animation.json";

const LottieAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "300px", width: "300px" }}
    />
  );
};

export default LottieAnimation;

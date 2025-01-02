import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/animation-IMG/Laptop-Animation.json";
import "../styles/pages/Home.scss"

const HomeLottieAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      className="home-lottie-animation-player"
      // style={{ height: "600px", width: "600px" }}
    />
  );
};

export default HomeLottieAnimation;

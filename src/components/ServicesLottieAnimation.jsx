import React from "react";
import "../styles/pages/Services.scss";


import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/animation-IMG/services-animation-img.json";

const ServicesLottieAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      className="anime-image-services-hero"
      // style={{ height: "600px", width: "600px" }}
    />
  );
};

export default ServicesLottieAnimation;

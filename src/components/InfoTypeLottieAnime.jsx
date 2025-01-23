import React from "react";
import "../styles/pages/Services.scss";


import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/animation-IMG/adaptation-animation.json";

const InfoTypeLottieAnime = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      className="display-adaptation-lottie-animation"
      // style={{ height: "600px", width: "600px" }}
    />
  );
};

export default InfoTypeLottieAnime;

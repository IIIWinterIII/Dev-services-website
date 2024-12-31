import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/animation-IMG/contact-img-animation.json";

const ContactLottieAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "400px", width: "400px" }}
    />
  );
};

export default ContactLottieAnimation;

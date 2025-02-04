import React from "react";
import "../styles/pages/Home.scss"

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const HomeLottieAnimation = () => {
  return (
    <DotLottieReact
      autoplay
      loop
      src="https://lottie.host/ab6daaae-2c07-4f4b-bda1-745b89550746/0llPtAh679.lottie"
      className="home-lottie-animation-player"
    />
  );
};

export default HomeLottieAnimation;

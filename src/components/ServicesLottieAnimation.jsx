import React from "react";
import "../styles/pages/Services.scss";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const ServicesLottieAnimation = () => {
  return (
    <DotLottieReact
      autoplay
      loop
      src="https://lottie.host/66a7206a-4765-459c-8f7f-a6030c530098/zocfn0YIQm.lottie"
      className="anime-image-services-hero"
      // style={{ height: "600px", width: "600px" }}
    />
  );
};

export default ServicesLottieAnimation;

import React from "react";
import "../styles/pages/Home.scss";

import LottieAnimation from "../components/LottieAnimation.jsx";
import ChangingTextBlock from "../components/ChangingTextBlock.jsx";
import ServicesBlock from "../components/ServicesBlock.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-container">
      <div className="hero-home">
        <div className="text-box-left">
          <h1 className="title">Создание сайтов под ключ</h1>
          {/* <ChangingTextBlock /> */}
        </div>
        <div className="img-anime-block">
          <LottieAnimation />
        </div>
      </div>
      <div className="box-arrow-bottom">
        <FontAwesomeIcon className="icon-chevron" icon={faChevronDown} />
      </div>
      <ServicesBlock />
    </section>
  );
}

export default Home;

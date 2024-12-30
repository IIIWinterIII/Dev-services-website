import React from "react";
import "../styles/pages/Home.scss";

import HomeLottieAnimation from "../components/HomeLottieAnimation.jsx";
import ChangingTextBlock from "../components/ChangingTextBlock.jsx";
import ServicesBlock from "../components/ServicesBlock.jsx";
import Accordion from "../components/Accordion.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faChevronDown,
  faCode,
  faDraftingCompass,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <section className="home-container">
      <div className="hero-home">
        <div className="text-box-left">
          <h1 className="title">Создание сайтов под ключ</h1>
          <ChangingTextBlock />
        </div>
        <div className="img-anime-block">
          <HomeLottieAnimation />
        </div>
      </div>
      <div className="box-arrow-bottom">
        <FontAwesomeIcon className="icon-chevron" icon={faChevronDown} />
      </div>
      <ServicesBlock />

      {/* Этапы создания */}
      <div className="stages-container">
        <h1 className="stages-container-title">Этапы создания сайта</h1>
        <div className="stages-creation">
          <div className="box-stages">
            <div className="text-section">
              <h1 className="stage-title">Постановка целей</h1>
              <p className="stage-description">
                Определение задач и типа сайта
              </p>
            </div>
            <FontAwesomeIcon
              icon={faBullseye}
              className="icon-right-box-stage"
            />
          </div>
          <div className="box-stages">
            <div className="text-section">
              <h1 className="stage-title">Подготовка макета</h1>
              <p className="stage-description">Создание структуры и дизайна</p>
            </div>
            <FontAwesomeIcon
              icon={faDraftingCompass}
              className="icon-right-box-stage"
            />
          </div>
          <div className="box-stages">
            <div className="text-section">
              <h1 className="stage-title">Разработка проекта</h1>
              <p className="stage-description">
                Реализация функционала и тестирование
              </p>
            </div>
            <FontAwesomeIcon icon={faCode} className="icon-right-box-stage" />
          </div>
          <div className="box-stages">
            <div className="text-section">
              <h1 className="stage-title">Запуск</h1>
              <p className="stage-description">Публикация готового сайта</p>
            </div>
            <FontAwesomeIcon icon={faRocket} className="icon-right-box-stage" />
          </div>
        </div>
      </div>
      
        <Accordion />
    </section>
  );
}

export default Home;

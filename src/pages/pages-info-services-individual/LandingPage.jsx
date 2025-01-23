import React from "react";

import "../../styles/pages/pages-info-services-individual/LandingPage.scss";

import InfoTypeLottieAnime from "../../components/InfoTypeLottieAnime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  return (
    <section className="landing-container-info">
      <div className="hero-section-landing">
        <div className="text-hero-block">
          <h1 className="title-hero">Разработка Landing Page</h1>
          <p className="subtitle-hero">
            Создание лендингов для успешного продвижения вашего бизнеса и идей
          </p>
          <a href="#form" className="contact-mail-btn-hero">
            Обсудить проект
          </a>
        </div>
        <div className="img-anime-block">
          <InfoTypeLottieAnime />
        </div>
      </div>

      <div className="keis-preview">
        <h1 className="title-keis-preview">Примеры Landing Page</h1>

        <div className="block-with-website-templates">
          <div className="box-with-examples">
            <div className="img-wrapper">
              <img
                className="img-preview"
                src={`${process.env.PUBLIC_URL}/assets/images/construction.png`}
                alt="construction"
              />
              <a
                className="button-more-details"
                href="https://iiiwinteriii.github.io/Construction/"
              >
                <span className="text">Посмотреть</span>
                <FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
              </a>
              <p></p>
            </div>
          </div>

          <div className="box-with-examples">
            <div className="img-wrapper">
              <img
                className="img-preview"
                src={`${process.env.PUBLIC_URL}/assets/images/coffee.png`}
                alt="coffee"
              />
              <a
                className="button-more-details"
                href="https://iiiwinteriii.github.io/Coffee/"
              >
                <span className="text">Посмотреть</span>
                <FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
              </a>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

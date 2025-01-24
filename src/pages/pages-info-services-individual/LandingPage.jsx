import React from "react";

import "../../styles/pages/pages-info-services-individual/LandingPage.scss";

import InfoTypeLottieAnime from "../../components/InfoTypeLottieAnime";

import TabsBtnPages from "../../components/TabsBtnPages";

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

     <TabsBtnPages />
    </section>
  );
}

export default LandingPage;

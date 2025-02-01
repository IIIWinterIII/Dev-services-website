import React from "react";

import "../../styles/pages/pages-info-services-individual/LandingPage.scss";

import InfoTypeLottieAnime from "../../components/InfoTypeLottieAnime";

import TabsBtnPages from "../../components/TabsBtnPages";
import { useLocation } from "react-router-dom";
import dataTypePages from "../../siteTypeDataForOnePage";

function LandingPage() {
  const { pathname } = useLocation();
  const dataType = dataTypePages[pathname] || dataTypePages["/services/landing-page"]
console.log(pathname);
  return (
    <>
    <section className="container-info">
      <div className="hero-section-landing">
        <div className="text-hero-block">
          <h1 className="title-hero">{dataType["title-hero"]}</h1>
          <p className="subtitle-hero">
            {dataType["subtitle-hero"]}
          </p>
          <a href="#form" className="contact-mail-btn-hero">
            Обсудить проект
          </a>
        </div>
        <div className="img-anime-block">
          <InfoTypeLottieAnime />
        </div>
      </div>

      <div className="landing-info">
        <div className="landing-description">
          <h2>
            <span>{dataType["h2-span-landing-description"]}</span>{dataType["h2-landing-description"]}
          </h2>
        </div>

        <div className="landing-benefits">
          <h3>{dataType["top-landing-benefits"]}</h3>
          {dataType["top-li-span-landing-benefits-list"].map((item, index) => (
          <ul className="landing-benefits-list" key={index}>
            <li>
              <span>{item}</span>{dataType["top-li-landing-benefits-list"][index]}
            </li>
          </ul>
          ))}
        </div>

        {dataType["bottom-li-landing-benefits-list"] ? <div className="landing-benefits">
          <h3>{dataType["h3-landing-benefits"]}</h3>
          <div>
            <p className="landing-benefits-list-p">{dataType["landing-benefits-list-p"]}</p>
            {dataType["bottom-li-span-landing-benefits-list"].map((item, index) => (
          <ul className="landing-benefits-list" key={index}>
            <li>
              <span>{item}</span>{dataType["bottom-li-landing-benefits-list"][index]}
            </li>
          </ul>
          ))}
          </div>
        </div> : null}
      </div>

      <TabsBtnPages />

      <div className="price-page">
        <div className="landing-benefits">
          <h3>Узнайте стоимость вашего проекта</h3>
          <p className="landing-benefits-list-p">
            Цена рассчитывается индивидуально и зависит от:
          </p>
          <ul className="landing-benefits-list">
            <li>Сложности дизайна (шаблонный или уникальный).</li>
            <li>Функционала (калькуляторы, формы, интеграции).</li>
            <li>Объёма контента (тексты, фото, видео).</li>
          </ul>
        </div>
      </div>
    </section>
    </>

  );
}

export default LandingPage;

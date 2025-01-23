import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/pages/Services.scss";

// anime img
import ServicesLottieAnimation from "../components/ServicesLottieAnimation.jsx";

// Таблица
import SiteTypesTable from "../components/SiteTypesTable.jsx";

import servicesDataForServicesPage from "../serviceDataForServicePage.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  const { hash } = useLocation();

  

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offset = 120;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);
  return (
    <section className="services-container">
      <div className="hero-services">
        <div className="left-text-seciton">
          <h1 className="title">Услуги по разработке сайтов</h1>
          <p className="subtitle">
            Создаю сайты, которые помогают вашему бизнесу расти.
          </p>
          <a href="#form" className="contact-mail-btn-hero">
            Связаться
          </a>
        </div>
        <div className="img-anime-block">
          <ServicesLottieAnimation />
        </div>
      </div>

      {/* TYPES */}
      <div className="types-services-block">
        <h1 className="type-title-container">Типы сайтов</h1>
        <div className="box-section">
          {servicesDataForServicesPage.map(
            (
              {
                icon,
                name,
                subtitle,
                featuresTitle,
                features,
                path,
                pathInPagesInfo,
                nameBtn,
              },
              index
            ) => (
              <div className="box-with-data-type" key={index} id={`${path}`}>
                <FontAwesomeIcon icon={icon} className="icon-top-type-box" />
                <h2 className="title-type-box">{name}</h2>
                <p className="subtitle-type-box">{subtitle}</p>
                <p className="features-title">{featuresTitle}</p>
                <ul>
                  {features.map((item, index) => (
                    <li className="features-list" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                {/* <p className="pros-title">{prosTitle}</p>
                <ul>
                  {pros.map((item, index) => (
                    <li className="pros-list" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="cons-title">{consTitle}</p>
                <ul>
                  {cons.map((item, index) => (
                    <li className="cons-list" key={index}>
                      {item}
                    </li>
                  ))}
                </ul> */}
                <Link key={index} to={pathInPagesInfo}>
                  {nameBtn}
                </Link>
              </div>
            )
          )}
        </div>
      </div>
      <SiteTypesTable />
    </section>
  );
}

export default Services;

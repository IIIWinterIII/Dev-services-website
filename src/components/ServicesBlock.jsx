import React from "react";
import "../styles/components/ServicesBlock.scss";
import servicesDataForBlock from "../servicesDataForBlock";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

function ServicesBlock() {
  return (
    <div className="services-block-container">
      <h1 className="title-container">Разработка веб-сайтов для бизнеса</h1>
      <div className="box-container">
        {servicesDataForBlock.map(
          (
            {
              icon,
              name,
              subtitle,
              featuresTitle,
              features,
              path,
              remPrice,
              actPrice,
            },
            index
          ) => (
            <div className="box-services" key={index}>
              <FontAwesomeIcon icon={icon} className="icon-top-box" />
              <h2 className="box-title">{name}</h2>
              <p className="box-subtitle">{subtitle}</p>
              {/* <p className="featuresTitle">{featuresTitle}</p> */}
              {/* <ul>
                {features.map((item, index) => (
                  <li className="features" key={index}>
                    {item}
                  </li>
                ))}
              </ul> */}
              <div className="price-block">
                <p className="price">от</p>
                <p className="rem-price">{remPrice}</p>
                <p className="act-price">{actPrice}</p>

                <div className="block-fa">
                  <FontAwesomeIcon
                    className="fa-circle-question"
                    icon={faCircleQuestion}
                  />
                </div>
              </div>
              <div className="btn-link-container">
                <Link to={`/services#${path}`} className="link-bottom-box">
                  <button className="btn-bottom-box">Подробнее </button>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ServicesBlock;

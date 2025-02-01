import React from "react";
import "../styles/components/ServicesBlock.scss";
import servicesDataForBlock from "../servicesDataForBlock";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesBlock() {
  return (
    <div className="services-block-container">
      <h1 className="title-container">Разработка веб-сайтов для бизнеса</h1>
      <div className="box-container">
        {servicesDataForBlock.map(
          ({ icon, name, subtitle, featuresTitle, features, path }, index) => (
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

import "../styles/components/TabsBtnPages.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import websiteTemplatesLP from "../websiteTemplatesLP.js";

function TabsBtnPages() {
  const templates = websiteTemplatesLP.filter(
    (item) => item["title-keis-preview"] === "Шаблоны"
  );

  const mockups = websiteTemplatesLP.filter(
    (item) => item["title-keis-preview"] === "Макеты"
  );

  return (
    <div className="keis-preview">
      <h1 className="title-keis-preview">Шаблоны</h1>

      <div className="block-with-website-templates">
        {templates.map((item, index) => (
          <div className="box-with-examples" key={index}>
            <div className="img-wrapper">
              <img
                className="img-preview"
                src={`${process.env.PUBLIC_URL}${item["img-preview"]}`}
                alt={item.alt}
              />
              <div className="description-and-button">
                <h2 className="title-website">{item["title-website"]}</h2>
                <p className="subtitle-website">{item["subtitle-website"]}</p>
                <a className="button-more-details" href={item.href}>
                  <span className="text">Посмотреть</span>
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={faArrowRight}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="title-keis-preview">Макеты</h1>

      <div className="block-with-website-templates">
        {mockups.map((item, index) => (
          <div className="box-with-examples" key={index}>
            <div className="img-wrapper">
              <img
                className="img-preview"
                src={`${process.env.PUBLIC_URL}${item["img-preview"]}`}
                alt={item.alt}
              />
              <div className="description-and-button">
              <h2 className="title-website">{item["title-website"]}</h2>
                <p className="subtitle-website">{item["subtitle-website"]}</p>
                <a className="button-more-details" href={item.href}>
                  <span className="text">Посмотреть</span>
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={faArrowRight}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabsBtnPages;

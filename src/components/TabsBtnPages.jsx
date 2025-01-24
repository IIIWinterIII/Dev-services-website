import "../styles/components/TabsBtnPages.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function TabsBtnPages() {
  return (
    <div className="keis-preview">
      <h1 className="title-keis-preview">Шаблоны</h1>

      <div className="block-with-website-templates">
        <div className="box-with-examples">
          <div className="img-wrapper">
            <img
              className="img-preview"
              src={`${process.env.PUBLIC_URL}/assets/images/construction.png`}
              alt="construction"
            />
            <div className="description-and-button">
              <p className="subtitle-website">
                Одностраничный шаблон для строительной компании с современным
                дизайном, содержащий информацию об услугах, портфолио, отзывы
                клиентов и форму обратной связи.
              </p>
              <a
                className="button-more-details"
                href="https://iiiwinteriii.github.io/Construction/"
              >
                <span className="text">Посмотреть</span>
                <FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>

        <div className="box-with-examples">
          <div className="img-wrapper">
            <img
              className="img-preview"
              src={`${process.env.PUBLIC_URL}/assets/images/coffee.png`}
              alt="coffee"
            />
            <div className="description-and-button">
              <p className="subtitle-website">
              Одностраничный шаблон для кофейни с уютным дизайном, включающий меню, акции, отзывы посетителей и форму для бронирования.
              </p>
              <a
                className="button-more-details"
                href="https://iiiwinteriii.github.io/Coffee/"
              >
                <span className="text">Посмотреть</span>
                <FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabsBtnPages;

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

      <div className="landing-info">
  <div className="landing-description">
    <h2>
      <span>Лендинг</span> — это одностраничный сайт, разработанный для
      выполнения конкретной цели: привлечения клиентов, продвижения услуг
      или увеличения продаж. Основная задача лендинга — максимально быстро
      и эффективно донести до пользователя важную информацию и побудить
      его совершить целевое действие (покупка, заявка, подписка).
    </h2>
  </div>

  <div className="landing-benefits">
    <h3>Почему стоит выбрать лендинг?</h3>
    <ul className="landing-benefits-list">
      <li>
        <span>Высокая конверсия.</span> Все элементы лендинга созданы для
        достижения максимального результата.
      </li>
      <li>
        <span>Удобство для клиентов.</span> Простота и понятность
        позволяют посетителям сразу найти нужное.
      </li>
      <li>
        <span>Гибкость.</span> Подходит для запуска рекламы, тестирования
        гипотез или привлечения аудитории.
      </li>
      <li>
        <span>Экономичность.</span> Быстрая разработка и минимальные
        затраты.
      </li>
    </ul>
  </div>

  <div className="landing-benefits">
    <h3>Лендинги под любые задачи</h3>
    <div>
      <p className="landing-benefits-list-p">Лендинги подходят для:</p>
      <ul className="landing-benefits-list">
        <li>
          <span>Малого бизнеса.</span> Привлечение новых клиентов или
          продвижение услуг.
        </li>
        <li>
          <span>Продуктов и товаров.</span> Продажа одного товара или
          небольшой группы.
        </li>
        <li>
          <span>Услуг.</span> Продвижение салонов красоты, ремонтных
          бригад, доставки.
        </li>
        <li>
          <span>Мероприятий.</span> Организация конференций, вебинаров или
          презентаций.
        </li>
      </ul>
    </div>
  </div>
</div>

      <TabsBtnPages />
    </section>
  );
}

export default LandingPage;

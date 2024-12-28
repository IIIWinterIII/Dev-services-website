import React from "react";
import "../styles/pages/Home.scss";
import LottieAnimation from "../components/LottieAnimation.jsx"

// const subheadingsArr = [
//   "Интуитивно понятен любому пользователю",
//   "Подходит для любого устройства",
//   "Для достижения ваших целей",
//   "Идеально для вашего бизнеса",
// ];

function Home() {
  return (
    <section className="home-container">
      <div className="hero-home">
        <div className="text-box-left">
          <h1 className="title">Создание сайтов под ключ</h1>
          <p className="subtitle">Меняющийся текст</p>
        </div>
        <div className="img-anime-block">
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
}

export default Home;

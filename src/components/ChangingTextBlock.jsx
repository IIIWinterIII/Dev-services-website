import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChangingTextBlock = () => {
  const phrases = [
    "Интуитивно понятен любому пользователю",
    "Подходит для любого устройства",
    "Для достижения ваших целей",
    "Идеально для вашего бизнеса",
  ];

  const lists = [
    "Дизайн и функционал разработаны так, чтобы любой пользователь мог легко разобраться с интерфейсом без необходимости в инструкциях",
    "Сайт адаптирован для работы на компьютерах, планшетах и мобильных телефонах, обеспечивая удобный доступ с любого экрана",
    "Функционал и структура сайта спроектированы так, чтобы поддерживать и ускорять выполнение ваших бизнес-задач",
    "Решение настроено с учетом ваших специфических потребностей, создавая уникальный и эффективный инструмент для вашего бренда",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="text-block" style={{ height: "250px", marginTop: "10px" }}>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ height: "100px" }}
        >
          {phrases[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <div
        className="text-block-bottom"
        style={{ height: "100px", marginTop: "10px" }}
      >
        <AnimatePresence>
          <motion.a
            key={currentIndex}
            className="subtitle-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {lists[currentIndex]}
          </motion.a>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChangingTextBlock;

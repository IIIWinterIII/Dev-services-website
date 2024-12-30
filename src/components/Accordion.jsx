import React, { useRef, useState } from "react";
// style
import "../styles/components/Accordion.scss";
// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getHeight = (index) => {
    return activeIndex === index
      ? contentRef.current[index]?.scrollHeight + "px"
      : "0px";
  };

  const faqs = [
    {
      question: "Сколько стоит создание сайта?",
      answer:
        "Стоимость разработки сайта зависит от количества страниц, сложности запросов, необходимого функционала и бизнес-целей проекта.",
    },
    {
      question: "Какие этапы включает создание сайта?",
      answer:
        "Создание сайта включает: постановку целей, проектирование макета, разработку, тестирование и запуск.",
    },
    {
      question: "Предоставляете ли вы услуги по поддержке сайта?",
      answer:
        "Да, я предлагаю поддержку, обновление контента и устранение технических проблем.",
    },
    {
      question: "Какие технологии вы используете для разработки?",
      answer:
        "Я работаю с современными технологиями: HTML, CSS, JavaScript, React, а также создаю PWA.",
    },
    {
      question: "Подходит ли ваш сайт для мобильных устройств?",
      answer:
        "Да, все сайты адаптированы для корректного отображения на любых устройствах.",
    },
    {
      question: "Какую информацию нужно предоставить для начала работы?",
      answer:
        "Достаточно описания задач, примеров сайтов, которые вам нравятся, и структуры, если она уже продумана.",
    },
    {
      question: "Что делать, если сайт перестал работать?",
      answer:
        "Свяжитесь со мной, я оперативно проведу диагностику и устраню проблему.",
    },
  ];

  return (
    <div className="accordion-container">
      <h1 className="accordion-title">Вопрос-ответ</h1>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`btn ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <FontAwesomeIcon
                className={`icon ${activeIndex === index ? "rotate" : ""}`}
                icon={faChevronDown}
              />
            </button>
            <div
              ref={(el) => (contentRef.current[index] = el)}
              className="answer"
              style={{
                height: getHeight(index),
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

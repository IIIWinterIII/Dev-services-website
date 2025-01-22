import React, { useState } from "react";

import "../styles/components/ContactForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "Создание сайта",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(""); // Очистить статус перед отправкой

    try {
      const response = await fetch("https://getform.io/f/avrrqrva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Заявка успешно отправлена!");
        setTimeout(() => setStatusMessage(""), 5000);

        setFormData({ name: "", email: "", goal: "Создание сайта" });
      } else {
        setStatusMessage("Ошибка отправки. Попробуйте снова.");
        setTimeout(() => setStatusMessage(""), 5000);
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setStatusMessage("Ошибка соединения. Проверьте интернет.");
    }
  };

  return (
    <div className="container-form" id="form">
      <form onSubmit={handleSubmit}>
        <h1 className="title-form">Заказать создание сайта</h1>
        <div className="input-border">
          <FontAwesomeIcon icon={faUser} className="icon-input" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            required
          />
        </div>
        <div className="input-border">
          <FontAwesomeIcon icon={faEnvelope} className="icon-input" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>

        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
        >
          <option value="Создание сайта">Создание сайта</option>
          <option value="Доработка сайта">Доработка сайта</option>
          <option value="Консультация">Консультация</option>
        </select>

        <button type="submit">Отправить</button>
        <p className="privacy-policy">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
      </form>
      {statusMessage && <p className="message-result-form">{statusMessage}</p>}
    </div>
  );
}

export default ContactForm;

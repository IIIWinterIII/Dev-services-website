import React from "react";

import "../styles/pages/Contact.scss";

import ContactLottieAnimation from "../components/ContactLottieAnimation.jsx";

import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <section className="contact-container">
      <h1 className="title-contact-container">Контакты</h1>
      <div className="hero-contact">
        <div className="contact-section">
          <div className="box-with-contact-mail">
            <h3 className="title-contact-mail">
              E-mail
              <FontAwesomeIcon
                className="icon-contact-mail"
                icon={faEnvelope}
              />
            </h3>
            <a href="-" className="mail-a">
              qwerty@gmail.com
            </a>
            <p className="email-text">
              * Электронная почта — для официальной переписки, отправки
              документов и детализированных запросов
            </p>
          </div>

          <div className="section-t-w-box">
            <div className="box-with-contact-t-w">
              <h3 className="title-contact">Telegram</h3>
              <a href="-">
                <FontAwesomeIcon className="icon-contact" icon={faTelegram} />
              </a>
            </div>

            <div className="box-with-contact-t-w">
              <h3 className="title-contact">WhatsApp</h3>
              <a href="-">
                <FontAwesomeIcon className="icon-contact" icon={faWhatsapp} />
              </a>
            </div>
            <p className="text-w-t">
              * Telegram и WhatsApp — для быстрых сообщений. Ответ в течение 1–2
              часов
            </p>
          </div>
        </div>
        <div className="anime-img">
        <ContactLottieAnimation />
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";

import "../styles/pages/Contact.scss";

import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <section className="contact-container">
      <div className="box-with-contact">
        <h3 className="title-contact">
          E-mail
          <FontAwesomeIcon className="icon-contact" icon={faEnvelope} />
        </h3>

        <a href="-" className="mail-a">
          qwerty@gmail.com
        </a>
      </div>

      <div className="box-with-contact">
        <h3 className="title-contact">Telegram</h3>
        <a href="-">
          <FontAwesomeIcon className="icon-contact" icon={faTelegram} />
        </a>
      </div>

      <div className="box-with-contact">
        <h3 className="title-contact">WhatsApp</h3>
        <a href="-">
          <FontAwesomeIcon className="icon-contact" icon={faWhatsapp} />
        </a>
      </div>
    </section>
  );
}

export default Contact;

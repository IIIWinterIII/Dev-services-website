import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import routes from "../routes.js";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import contacts from "../contacts.js";

function Footer() {
  return (
    <footer>
      <div className="logo-icon-messager-container">
        <Link to="/" className="link-on-logo">
          <div className="logo">
            <FontAwesomeIcon icon={faCode} className="icon-logo" />
            <p className="text-logo">N.K.</p>
          </div>
        </Link>

        <div className="messages-icon-footer">
          <a href={contacts.telegram}>
            <FontAwesomeIcon className="icon-contact" icon={faTelegram} />
          </a>

          <a href={contacts.whatsapp}>
            <FontAwesomeIcon className="icon-contact" icon={faWhatsapp} />
          </a>
        </div>
      </div>

      <p className="copyright-footer">
        © <span className="copyright-span">2025, N.K.</span> Все права защищены.
      </p>

      <div className="link-section-footer">
        <ul>
          {routes.map(({ path, name, component: Component }, index) => (
            <li key={index}>
              <Link to={path} component={<Component />} className="link-footer">
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mail-icon-container-footer">
        <a href={`mailto:${contacts.mail}`} className="mail-a-footer">
          <FontAwesomeIcon icon={faEnvelope} className="icon-mail-footer" />
          {contacts.mail}
        </a>
      </div>
    </footer>
  );
}

export default Footer;

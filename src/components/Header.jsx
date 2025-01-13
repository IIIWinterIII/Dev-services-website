import "../styles/components/Header.scss";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import contacts from "../contacts.js"
import routes from "../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Link to="/" className="link-on-logo">
        <div className="logo">
          <FontAwesomeIcon icon={faCode} className="icon-logo" />
          <p className="text-logo">N.K.</p>
        </div>
      </Link>

      <nav className={`navigation ${isOpen ? "open" : ""}`}>
        <ul>
          {routes.map(({ path, name, component: Component }, index) => (
            <li key={index}>
              <Link
                to={path}
                component={<Component />}
                onClick={toggleMenu}
                className={`link ${path === pathname ? "active" : ""}`}
              >
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="contacts-button">
        <a href={`mailto:${contacts.mail}`} className="con-mail">
          <FontAwesomeIcon className="icon mail" icon={faEnvelope} />
          <span className="email-text">{contacts.mail}</span>
        </a>
        <a href={contacts.telegram} className="con-t-w">
          <FontAwesomeIcon className="icon t" icon={faTelegram} />
        </a>
        <a href={contacts.whatsapp} className="con-t-w">
          <FontAwesomeIcon className="icon w" icon={faWhatsapp} />
        </a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          className={`arrow ${isOpen ? "rotate" : ""}`}
        />
      </button>
    </header>
  );
}

export default Header;

import "../styles/components/Header.scss";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const { pathname } = useLocation();
  
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          {routes.map(({ path, name, component: Component }, index) => (
            <li key={index}>
              <Link to={path} component={<Component />} className={`link ${path === pathname ? "active" : ''}`}>
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="contacts-button">
        <a href="-" className="con-mail">
          <FontAwesomeIcon className="icon mail" icon={faEnvelope} />
          <span className="email-text">qwerty@gmail.com</span>
        </a>
        <a href="-" className="con-t-w">
          <FontAwesomeIcon className="icon t" icon={faTelegram} />
        </a>
        <a href="-" className="con-t-w">
          <FontAwesomeIcon className="icon w" icon={faWhatsapp} />
        </a>
      </div>
    </header>
  );
}

export default Header;

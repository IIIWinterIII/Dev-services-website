import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import "../styles/components/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          {routes.map(({ path, name, component: Component }, index) => (
            <li key={index}>
              <Link to={path} component={<Component />} className="link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="contacts-button">
        <a>
          <FontAwesomeIcon className="icon" icon={faPaperPlane} />
        </a>
        <a>
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
      </div>
    </header>
  );
}

export default Header;

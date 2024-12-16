import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";

function Header() {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          {routes.map(({ path, name, component: Component }, index) => (
            <li key={index}>
              <Link to={path} component={<Component />}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

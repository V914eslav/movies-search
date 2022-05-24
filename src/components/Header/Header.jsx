import React from "react";

import cn from "classnames";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav className={cn("green", "darken-1", styles.nav)}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            React Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

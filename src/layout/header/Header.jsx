import React from "react";
import { Link } from "react-router-dom";
import LogoKasa from "../../assets/logos/LogoKasa";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <LogoKasa className={styles.nav__logo} fillColor="#FF6060"/>
      <ul>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

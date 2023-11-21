import React from "react";
import { NavLink } from "react-router-dom";
import LogoKasa from "../../assets/logos/LogoKasa";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <LogoKasa className={styles.nav__logo} fillColor="#FF6060" />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.links} ${styles.active}` : styles.links
            }
          >
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.links} ${styles.active}` : styles.links
            }
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

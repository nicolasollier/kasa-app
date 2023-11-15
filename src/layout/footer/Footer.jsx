import React from "react";
import styles from "./Footer.module.sass";
import LogoKasa from "../../assets/logos/LogoKasa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LogoKasa className={styles.footer__logo} />
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

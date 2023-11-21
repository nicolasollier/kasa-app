import styles from "./NotFound.module.sass";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <h1>404</h1>
      <p>Oups! La page que <br className={styles.linebreak} /> vous demandez n'existe pas.</p>

      <NavLink>Retourner sur la page d’accueil</NavLink>
    </div>
  );
};

export default NotFound;

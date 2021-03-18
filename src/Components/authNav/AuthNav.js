import styles from "./authNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Регистрация
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;

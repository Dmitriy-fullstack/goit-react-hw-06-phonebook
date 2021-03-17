import styles from "./authNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Регистрация
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;

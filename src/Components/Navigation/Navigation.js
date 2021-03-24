import { NavLink } from "react-router-dom";
import styles from "../authNav/authNav.module.css";
import authSelectors from "../../redux/auth/authSelectors";
import { connect } from "react-redux";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Контакты
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);

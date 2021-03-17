import styles from "./userMenu.module.css";
import authSelectors from "../../redux/auth/authSelectors";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperation";

function UserMenu({ name, onLogOut }) {
  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

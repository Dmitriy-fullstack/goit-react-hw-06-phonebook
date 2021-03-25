import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperation";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off" style={styles.form}>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Let`s go!</button>
      </form>
    </div>
  );
}

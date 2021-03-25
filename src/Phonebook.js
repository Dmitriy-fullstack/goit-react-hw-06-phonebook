import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import ContactsPage from "./view/Contacts/ContactsPage";
import HomePage from "./view/Home/HomePage";
import LoginPage from "./view/Login/LoginPage";
import RegisterPage from "./view/Register/RegisterPage";
import AppBar from "./Components/AppBar/AppBar";
import authOperations from "./redux/auth/authOperation";
import Container from "./Components/Container/Container";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute
          path="/register"
          restricted
          redirectTo="/"
          component={RegisterPage}
        />
        <PublicRoute
          path="/login"
          restricted
          redirectTo="/"
          component={LoginPage}
        />
        <PrivateRoute
          path="/contacts"
          component={ContactsPage}
          redirectTo="/login"
        />
      </Switch>
    </Container>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
// });

// export default connect(null, mapDispatchToProps)(Phonebook);

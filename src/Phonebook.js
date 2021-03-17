import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import ContactsPage from "./view/Contacts/ContactsPage";
import HomePage from "./view/Home/HomePage";
import LoginPage from "./view/Login/LoginPage";
import RegisterPage from "./view/Register/RegisterPage";
import AppBar from "./Components/AppBar/AppBar";
import authOperations from "./redux/auth/authOperation";
import Container from "./Components/Container/Container";

class Phonebook extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(Phonebook);

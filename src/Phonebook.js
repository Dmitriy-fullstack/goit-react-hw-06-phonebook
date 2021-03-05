import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import style from "./phonebook.module.css";
import { connect } from "react-redux";
import operations from "../src/redux/phoneBookOperation";
import selectors from "./redux/phoneBookSelectors";

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className={style.wrapper}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={style}
          unmountOnExit
        >
          <h1 className={style.title}>Phonebook</h1>
        </CSSTransition>
        <div className={style.formSearch}>
          <ContactForm />
        </div>
        <CSSTransition
          in={contacts.length > 0}
          timeout={250}
          classNames={style}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <CSSTransition
          in={contacts.length > 0}
          timeout={250}
          classNames={style}
          unmountOnExit
        >
          <h2>Contacts</h2>
        </CSSTransition>
        {this.props.isLoadingContacts && <h1>...Please wait, loading</h1>}
        <CSSTransition
          in={contacts.length > 0}
          timeout={250}
          classNames={style}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
        <CSSTransition
          in={contacts.length <= 0}
          timeout={250}
          classNames={style}
          unmountOnExit
        >
          <p className={style.warning}>Enter data, please</p>
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getAllContacts,
  isLoadingContacts: selectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);

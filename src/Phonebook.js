import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import style from "./phonebook.module.css";
import { connect } from "react-redux";

class Phonebook extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = contacts ? JSON.parse(contacts) : [];
  //   this.setState({ contacts: parsedContacts });
  // }

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
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, null)(Phonebook);

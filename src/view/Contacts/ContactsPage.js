import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../Components/Filter/Filter";
import style from "../../phonebook.module.css";
import Container from "../../Components/Container/Container";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
import contactsOperations from "../../redux/phoneBookOperation";
import contactsSelectors from "../../redux/phoneBookSelectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const contacts = useSelector(contactsSelectors.getAllContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
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
        {isLoadingContacts && <h1>...Please wait, loading</h1>}
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
    </Container>
  );
}

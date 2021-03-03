import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "./contactList.module.css";
import { connect } from "react-redux";
import actions from "../../redux/phoneBookActions";

function ContactList({ contacts, onContactDelete }) {
  return (
    <TransitionGroup component="ul" className={style.list}>
      {contacts.map((contact) => {
        const { name, number, id } = contact;
        return (
          <CSSTransition key={id} timeout={250} classNames={style}>
            <li className={style.listItem}>
              <p className={style.listItemName}>
                {name}: {number}
              </p>
              <button
                className={style.deleteButton}
                type="button"
                onClick={() => onContactDelete(id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func,
};

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = (dispatch) => ({
  onContactDelete: (id) => {
    dispatch(actions.removeContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./contactForm.module.css";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/phoneBookActions";
import Message from "../Message/Message";
import swal from "sweetalert";
import { CSSTransition } from "react-transition-group";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    error: false,
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts } = this.props;
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 2500);

      return;
    }
    if (this.state.name === "") {
      swal("Enter concact name, please!");
      return;
    }
    if (this.state.number === "") {
      swal("Enter concact phone, please!");
      return;
    }

    this.props.onSubmit(this.state.name, this.state.number);
    this.handleClearState();
  };

  handleClearState = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.labelName} htmlFor={this.nameInputId}>
            Name:
          </label>
          <input
            className={style.inputName}
            type="text"
            name="name"
            value={this.state.name}
            id={this.nameInputId}
            onChange={this.handleChange}
          />

          <label className={style.labelName} htmlFor={this.numberInputId}>
            Telephone number:
          </label>
          <input
            className={style.inputName}
            type="text"
            name="number"
            value={this.state.number}
            id={this.numberInputId}
            onChange={this.handleChange}
          />

          <button className={style.buttonAdd} type="submit">
            Add contact
          </button>
        </form>
        <CSSTransition
          in={this.state.error === true}
          timeout={250}
          classNames={style}
          unmountOnExit
        >
          <Message />
        </CSSTransition>
      </div>
    );
  }
}
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(phoneBookActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

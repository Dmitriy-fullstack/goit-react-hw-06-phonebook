import { Component } from "react";
import PropTypes from "prop-types";
import style from "./filter.module.css";
import shortid from "shortid";
import { connect } from "react-redux";
import * as phoneBookActions from "../../redux/phoneBookActions";

class Filter extends Component {
  // state = {
  //   filter: "",
  // };

  filterInputId = shortid.generate();

  render() {
    return (
      <div className={style.wrapper}>
        <label htmlFor={this.filterInputId}>Find contacts by name:</label>
        <input
          className={style.filter}
          type="text"
          id={this.filterInputId}
          name="filter"
          value={this.props.value}
          onChange={(e) => this.props.onChangeFilter(e.target.value)}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
  items: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (value) => dispatch(phoneBookActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

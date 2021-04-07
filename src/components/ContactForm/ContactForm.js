import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactOperations from '../../redux/contacts/contacts-operations';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    if (!name) {
      return;
    }

    const existingContact = this.props.state.contacts.items.find(
      contact => contact.name === name,
    );

    if (existingContact) {
      alert(`${existingContact.name} is already in contacts.`);
      return;
    }

    this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

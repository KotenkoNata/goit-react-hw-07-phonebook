import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  contactOperations,
  contactsSelectors,
} from '../../redux/contacts/index';

import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteContact, isLoading } = this.props;

    const loaderConfig = {
      type: 'ThreeDots',
      color: '#303f9f',
      height: 50,
      width: 50,
      className: styles.loader,
    };

    return (
      <>
        {isLoading && <Loader {...loaderConfig} />}
        <ul className={styles.contactList}>
          {contacts.length ? (
            contacts.map(({ id, name, number }) => (
              <li className={styles.contactItem} key={id}>
                {name} : {number}
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className={styles.notification}>No contact found</li>
          )}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

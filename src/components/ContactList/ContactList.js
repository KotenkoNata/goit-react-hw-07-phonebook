import React from 'react';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts/contacts-operations';

import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
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
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

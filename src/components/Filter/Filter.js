import React from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';

import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.filter}>
      Find contacts by name{' '}
      <input type="text" filter={filter} onChange={onChange} />
    </label>
  );
};

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

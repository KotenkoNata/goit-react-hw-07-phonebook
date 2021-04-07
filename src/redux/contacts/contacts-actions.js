import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('fetchContactRequest');
const fetchContactSuccess = createAction('fetchContactSuccess');
const fetchContactError = createAction('fetchContactError');

const addContactRequest = createAction('addContactRequest');
const addContactSuccess = createAction('addContactSuccess');
const addContactError = createAction('addContactError');

const deleteContactRequest = createAction('deleteContactRequest');
const deleteContactSuccess = createAction('deleteContactSuccess');
const deleteContactError = createAction('deleteContactError');

const changeFilter = createAction('contacts/Filter');

const exports = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};

export default exports;

import { createAction } from '@reduxjs/toolkit';

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
};

export default exports;

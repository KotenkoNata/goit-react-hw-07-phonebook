import axios from 'axios';

import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

export default {
  addContact,
  deleteContact,
  fetchContacts,
};

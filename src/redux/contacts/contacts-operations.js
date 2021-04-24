import axios from 'axios';
import action from './contacts-action';
const BASE_URL = 'http://localhost:4040/';
axios.defaults.baseURL = BASE_URL;

const fetchContacts = () => async dispatch => {
  dispatch(action.fetchContactRequest());
  try {
    const response = await axios.get('/contacts');
    dispatch(action.fetchContactSuccess(response.data));
  } catch (error) {
    dispatch(action.fetchContactError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(action.addContactRequest());
  try {
    const response = await axios.post('/contacts', contact);
    dispatch(action.addContactSuccess(response.data));
  } catch (error) {
    dispatch(action.addContactError(error));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(action.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(action.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(action.deleteContactError(error));
  }
};

const operation = {
  addContact,
  deleteContact,
  fetchContacts,
};

export default operation;

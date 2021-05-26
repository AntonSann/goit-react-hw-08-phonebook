import axios from 'axios';
import {
  fetchContactRequest, 
  fetchContactSuccess, 
  fetchContactError, 
  addContactRequest, 
  addContactSuccess, 
  addContactError, 
  deleteContactRequest, 
  deleteContactSuccess, 
  deleteContactError,
} from './contacts-actions';

//axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest);

  axios
    .get('/contacts')
    .then(({data}) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error.message)));
}
 
const addContact = data => dispatch => {
  const contact = {
    name: data.name,
    number: data.number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export default {
  fetchContacts, 
  addContact, 
  deleteContact
};
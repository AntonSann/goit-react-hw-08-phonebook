import { connect } from 'react-redux';
import {contactsOperations, contactsSelectors} from '../../Redux/Contacts/';
import ContactList from './ContactList';

const mapStateToProps = (state) => ({
contacts: contactsSelectors.getVisibleContacts(state),
}); 

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  });


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
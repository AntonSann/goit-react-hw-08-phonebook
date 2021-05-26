import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import ContactList from '../Components/ContactList/ContactList.container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import {contactsOperations, contactsSelectors} from '../Redux/Contacts/';

class ContactsView extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <div>
      <ContactForm />
      <div>
        <Filter />
      {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
      </div>
        <ContactList />
      </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
    isLoadingContacts: contactsSelectors.getLoading(state),
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
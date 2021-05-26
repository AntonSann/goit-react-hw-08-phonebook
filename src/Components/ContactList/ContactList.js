import React from 'react';
import ContactListStyle from "./ContactList.module.css";
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li
        key={id}>
        <Contact
        name={name}
        number={number}
        onDelete={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;



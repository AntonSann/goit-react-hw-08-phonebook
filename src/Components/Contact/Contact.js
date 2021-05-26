import React from 'react';

const Contact = ({ name, number, onDelete }) => (
  <>
  <span>{name + ": " + number}</span>
        <button
            type="button"
            onClick={onDelete}
          >
            Delete
        </button>
  </>
);

export default Contact;
import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please Enter First Name and Last Name' });
    } else {
      console.log(firstName, lastName);
    }
    setFirstName('');
    setLastName('');
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#"
            onClick={onSubmit}
            className="btn blue waves-effect waves-light"
          >
            Add Technician
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddTechModal;

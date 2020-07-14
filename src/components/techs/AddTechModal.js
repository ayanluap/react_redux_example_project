import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please Enter First Name and Last Name' });
    } else {
      addTech({
        firstName,
        lastName,
      });

      M.toast({ html: `${firstName} ${lastName} added to Technicians list` });
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
            className="btn blue waves-effect waves-light modal-close"
          >
            Add Technician
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);

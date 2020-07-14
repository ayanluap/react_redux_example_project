import React, { useState } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter Message and Tech' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `New Log added by ${tech}` });
    }
    setMessage('');
    setTech('');
    setAttention(false);
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="modal-header">Enter System Log Info</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              id="message1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message1">Enter Message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              className="browser-default"
            >
              <option value="" disabled>
                Select A Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  name="attention"
                  className="filled-in"
                  checked={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention?</span>
              </label>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#"
            onClick={onSubmit}
            type="submit"
            className="modal-close btn blue waves-effect waves-light "
          >
            Done
          </a>
        </div>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect(null, { addLog })(AddLogModal);

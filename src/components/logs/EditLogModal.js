import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter Message and Tech' });
    } else {
      const updatedLog = {
        id: current.id,
        message: message,
        attention: attention,
        date: new Date(),
      };

      updateLog(updatedLog);
      M.toast({ html: `Log updated by ${tech}` });

      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="modal-header">Enter System Log Info</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
              <option value="Ayan Paul">Ayan Paul</option>
              <option value="Sanjay Majhi">Sanjay Majhi</option>
              <option value="Sanju Sarker">Sanju Sarkar</option>
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

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

const mapStatetoProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStatetoProps, { updateLog })(EditLogModal);

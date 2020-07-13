import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delLog, setCurrent } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, delLog, setCurrent }) => {
  const { message, attention, tech, id, date } = log;

  const onDelete = () => {
    delLog(id);
    M.toast({ html: 'Log Deleted' });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention && 'red-text'}`}
          onClick={() => setCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID {id}</span> Last updated by{' '}
          <span className="black-text">{tech}</span> on{' '}
          <Moment format={`DD-MMM-YYYY, h:mm a`}>{date}</Moment>
        </span>
        <a href="#" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  delLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { delLog, setCurrent })(LogItem);

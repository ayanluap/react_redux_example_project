import React from 'react';
import { connect } from 'react-redux';
import { delTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, delTech }) => {
  const { firstName, lastName, id } = tech;

  const onDelete = () => {
    delTech(id);

    M.toast({
      html: `${firstName} ${lastName} is removed from Technicians List`,
    });
  };

  return (
    <li className="collection-item">
      {firstName} {lastName}
      <a href="#" className="secondary-content" onClick={onDelete}>
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  delTech: PropTypes.func.isRequired,
};

export default connect(null, { delTech })(TechItem);

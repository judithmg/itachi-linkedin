import React from 'react';

const Invitation = ({ invitation }) => (
  <div className="invitation__container">
    <div className="invitation__left">
      <img src={`./images/${invitation.name.split(/(\s+)/)[0].toLowerCase()}.png`} className="invitation__img" alt="connection" />
      <div>
        <p className="invitation__name">{invitation.name}</p>
        <p className="invitation__position">
          <span>
            {invitation.position}
            {' '}
            at
            {' '}
          </span>
          {invitation.where}
        </p>
      </div>
    </div>
    <div className="invitation__buttons">
      <button type="button">&#xf00c;</button>
      <button type="button">&#xf00d;</button>
    </div>
  </div>
);

export default Invitation;

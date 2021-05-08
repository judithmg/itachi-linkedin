import React from 'react';

const Invitation = ({ invitation }) => (
  <div className="invitation__container">
    <img src={`./images/${invitation.name.split(/(\s+)/)[0].toLowerCase()}.png`} className="invitation__img" alt="connection" />
    <div>
      <p className="invitation__name">{invitation.name}</p>
      <p className="invitation__position">
        {`${invitation.position} at ${invitation.where}`}
      </p>
    </div>
  </div>
);

export default Invitation;

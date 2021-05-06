import React from 'react';

const Invitation = ({ invitation }) => (
  <div className="invitation__container">
    <img src={`${invitation.name}.png`} alt="invitation" />
    <div>
      <p className="invitation__name">{invitation.name}</p>
      <p className="invitation__position">
        {`${invitation.position} at ${invitation.place}`}
      </p>
    </div>
  </div>
);

export default Invitation;

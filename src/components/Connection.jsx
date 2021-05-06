import React from 'react';

const Connection = ({ name, position, place }) => (
  <div className="connection__container">
    <img src={`${name}.png`} alt="connection" />
    <div>
      <p className="connection__name">{name}</p>
      <p className="connection__position">
        {`${position} at ${place}`}
      </p>
    </div>
  </div>
);

export default Connection;

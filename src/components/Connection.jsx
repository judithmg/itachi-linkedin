import React from 'react';

const Connection = ({ connection }) => (
  <div className="connection__container">
    <img src={`${connection.name}.png`} alt="connection" />
    <div>
      <p className="connection__name">{connection.name}</p>
      <p className="connection__position">
        {`${connection.position} at ${connection.place}`}
      </p>
    </div>
  </div>
);

export default Connection;

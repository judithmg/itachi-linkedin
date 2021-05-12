import React from 'react';

const Connection = ({ connection }) => (
  <div className="connection__container">
    <img src={`./images/${connection.name.split(/(\s+)/)[0].toLowerCase()}.png`} className="connection__img" alt="connection" />
    <div>
      <h3 className="connection__name">{connection.name}</h3>
      <p className="connection__position">
        {`${connection.position} at `}
        <span>
          {connection.where}
        </span>
      </p>
    </div>
  </div>
);

export default Connection;

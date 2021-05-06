import React from 'react';
import Connection from './Connection';
import connections from '../data/connections';

const Connections = () => (
  <section className="connections__container">
    <div className="connections__header">
      <h2>Connections</h2>
      <button type="button">View All</button>
    </div>
    {connections.map((connection) => <Connection connection={connection} />)}
  </section>
);

export default Connections;

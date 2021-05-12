import React from 'react';
import Connection from './Connection';
import connections from '../data/connections';
import '../styles/Connections.scss';

const Connections = () => (
  <section className="connections__container middle-center">
    <div className="connections__header">
      <h2>Connections</h2>
      <button className="btn__view-all" type="button">View All</button>
    </div>
    <div className="connections__connection">
      {connections.map((connection) => <Connection connection={connection} />)}
    </div>
  </section>
);

export default Connections;

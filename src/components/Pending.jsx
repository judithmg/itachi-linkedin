import React from 'react';
import invitations from '../data/invitations';
import Invitation from './Invitation';
import '../styles/Pending.scss';

const Pending = () => (
  <section className="pending__container">
    <h2>
      Pending Invitation
    </h2>
    {invitations.map((invitation) => <Invitation invitation={invitation} />)}
    <button className="btn__view-all" type="button">View All</button>
  </section>
);

export default Pending;

import React from 'react';
import '../styles/SideNav.scss';

const SideNav = () => (
  <section className="sidenav__container">
    <img src="./images/itachi-icon.jpg" alt="itachi ico" />
    <h2>Itachi Uchiha</h2>
    <h3>
      <span>Nukenin </span>
      at Akatsuki
    </h3>
    <ul>
      <li>Home</li>
      <li>My Network</li>
      <li>Jobs</li>
      <li>Messaging</li>
      <li>Notifications</li>
    </ul>
  </section>
);

export default SideNav;

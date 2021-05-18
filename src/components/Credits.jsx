import React from 'react';
import '../styles/Credits.scss';

const Credits = () => (
  <section className="credits__container">
    <h2>About</h2>
    <p>
      Created by
      {' '}
      <span>Judith Martínez</span>
    </p>
    <p>
      Special thanks to
      {' '}
      <span>Luvy</span>
    </p>
    <p>
      Original design by
      {' '}
      <span>Daniel Snow</span>
      , used with permission
    </p>
  </section>
);

export default Credits;

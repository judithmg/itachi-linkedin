import React from 'react';
import '../styles/Credits.scss';

const Credits = () => (
  <section className="credits__container">
    <h2>About</h2>
    <p>
      👩‍💻 Created by
      {' '}
      <a href="https://github.com/judithmg">Judith Martínez</a>
    </p>
    <p>
      🚀 Special thanks to
      {' '}
      <a href="https://github.com/Lluis-Quintana">Luvy</a>
    </p>
    <p>
      🎨 Original design by
      {' '}
      <a href="https://danielsnows.com.br/">Daniel Snow</a>
      , cloned with permission
    </p>
  </section>
);

export default Credits;

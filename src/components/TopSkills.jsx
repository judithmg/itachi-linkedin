import React from 'react';
import '../styles/TopSkills.scss';

const TopSkills = () => (
  <section className="topskills__container">
    <div>
      <h2>
        Top
        {' '}
        <span>Skills</span>
      </h2>
      <button className="btn__view-all" type="button">View All</button>
    </div>
    <div className="topskills__skills">
      <div className="topskills__skill">
        <p className="topskills__star">&#xf002;&#xf002;&#xf002;&#xf002;&#xf002;</p>
        <p className="topskills__title">Perfect Susanoo</p>
        <button className="topskills__play" type="button">Play</button>
      </div>
      <div className="topskills__skill">
        <p className="topskills__star">&#xf002;&#xf002;&#xf002;&#xf002;&#xf002;</p>
        <p className="topskills__title">Amaterasu</p>
        <button className="topskills__play" type="button">Play</button>
      </div>
      <div className="topskills__skill">
        <p className="topskills__star">&#xf002;&#xf002;&#xf002;&#xf002;&#xf002;</p>
        <p className="topskills__title">Tsukiyomi</p>
        <button className="topskills__play" type="button">Play</button>
      </div>
    </div>
  </section>
);

export default TopSkills;

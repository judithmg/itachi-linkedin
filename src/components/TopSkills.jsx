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
        <p className="topskills__star">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005; </p>
        <p className="topskills__title">Perfect Susanoo</p>
        <button type="button">
          <span>&#xf04b;</span>
          Play
        </button>
        <div className="topskills__overlay" />
      </div>
      <div className="topskills__skill">
        <p className="topskills__star">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005; </p>
        <p className="topskills__title">Amaterasu</p>
        <button type="button">
          <span>&#xf04b;</span>
          Play
        </button>
        <div className="topskills__overlay" />
      </div>
      <div className="topskills__skill">
        <p className="topskills__star">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005; </p>
        <p className="topskills__title">tsukuyomi</p>
        <button type="button">
          <span>&#xf04b;</span>
          Play
        </button>
        <div className="topskills__overlay" />
      </div>
    </div>
  </section>
);

export default TopSkills;

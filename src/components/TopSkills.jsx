import React from 'react';
import '../styles/TopSkills.scss';

const TopSkills = () => (
  <section className="topskills__container middle-left">
    <div>
      <h2>
        Top
        {' '}
        <span>Skills</span>
      </h2>
    </div>
    <div className="topskills__skills">
      <div className="topskills__skill">
        <p className="topskills__star">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005; </p>
        <p className="topskills__title">Perfect Susanoo</p>
        <p className="topskills__info">He with the ability to help by all means. It is the strongest ability available to those who have awakened the Mangekyō Sharingan in both eyes.</p>
        <button type="button">
          <span>&#xf04b;</span>
          Play
        </button>
        <div className="topskills__overlay" />
      </div>
      <div className="topskills__skills--row">
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
    </div>
  </section>
);

export default TopSkills;

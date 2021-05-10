import React from 'react';
import search from '../data/recentSearch';
import '../styles/RecentSearch.scss';

const RecentSearch = () => (
  <section className="recent__container">
    <h2>
      Recent
      {' '}
      <span>Search</span>
    </h2>
    {search.map((recent) => (
      <button type="button" className="recent__btn">
        <span>#</span>
        {recent}
      </button>
    ))}
  </section>
);

export default RecentSearch;

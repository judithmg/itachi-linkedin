import React from 'react';
import jobs from '../data/jobs';
import Job from './Job';
import '../styles/Jobs.scss';

const Jobs = () => (
  <section className="pending__container">
    <h2>
      Jobs for You
    </h2>
    {jobs.map((job) => <Job job={job} />)}

    <button className="btn__view-all" type="button">View All</button>
  </section>
);

export default Jobs;

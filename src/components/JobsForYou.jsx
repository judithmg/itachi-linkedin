import React from 'react';
import jobs from '../constants/jobs';
import Job from './Job';
import '../styles/Jobs.scss';

const Jobs = () => (
  <section className="jobsforyou__container">
    <h2>
      Jobs for You
    </h2>
    {jobs.map((job, index) => <Job job={job} index={index} />)}
  </section>
);

export default Jobs;

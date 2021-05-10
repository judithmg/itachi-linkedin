import React from 'react';

const Job = ({ job, index }) => (
  <div className="job__container">
    <img src={`./images/job${index}.png`} className="job__img" alt="job img" />
    <div>
      <p className="job__title">{job.title}</p>
      <p className="job__readers">
        {job.readers}
        {' '}
        readers
      </p>
    </div>

  </div>
);

export default Job;

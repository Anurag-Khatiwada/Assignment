import React from 'react';
import './Carers.css';
import { jobs } from '../../data';
import JobCard from '../../components/JobCard/JobCard';

const Carers = () => {
  return (
    <div className="carers">
      <div className="left-section">
        <img src="./open-img.jpg" alt="tema" className='bg-image' />
        <div className="blur-overlay"></div>
        <div className="left-content">
          <h2>
            Open <span>Positions</span>
          </h2>
          <p>
            Join a culture that supports growth, encourages bold ideas, and
            rewards curiosity.
          </p>
        </div>
      </div>
      <div className="right-section">
        {
          jobs.map((job,i)=>(
            <JobCard key={i} job={job} purple={i===0}/>
          ))
        }
      </div>
    </div>
  );
};

export default Carers;

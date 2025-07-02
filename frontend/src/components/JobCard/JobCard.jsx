import React from 'react'
import './JobCard.css'
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";


const JobCard = ({job,purple}) => {
  return (
    <div className={`job-card ${purple ? "purple": ""}`}>
      <h3>{job.title}</h3>
      <ul>
        {
            job.details.map((detail,i)=>(
                <li key={i}>{detail}</li>
            ))
        }
      </ul>
      <div className="tags">
        {
            job.tags.map((tag,i)=>(
                <span className='tag' key={i}>
                    {
                        i===0 ? <CiLocationOn/> : <FaBriefcase/>
                    }
                    {tag}
                </span>
            ))
        }
      </div>
      <button className='apply-btn'>Apply Now</button>
    </div>
  )
}

export default JobCard

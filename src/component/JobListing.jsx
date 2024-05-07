import React from 'react'
import hourGlass from '../assets/hourglass.png'
import checkmark from '../assets/check.png'
const JobListing = () => {
    return (
        <div className='listing-main'>
            <div className='posted-date'><span><img className='posted-date-img' src={hourGlass} /></span> Posted 10 days ago</div>
            <div className='listing-info'>
                <div className='company-logo'></div>
                <div className='company-details-container'>
                    <div className='company-name'>Company Name</div>
                    <div className='job-title-container'>
                        <div className='job-title'>Fullstack Engineer</div>
                        <img className='checkmark' src={checkmark} />
                    </div>
                    <div className='job-location'>Location</div>
                </div>
            </div>
            <div className='estimated-salary'>Estimated Salary: {'\u20B9'}15-40 LPA</div>
            <div>Job Description:</div>
        </div>
    )
}

export default JobListing
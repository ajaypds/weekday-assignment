import React, { useState } from 'react'
import hourGlass from '../assets/hourglass.png'
import checkmark from '../assets/check.png'
import flash from '../assets/flash.png'
import { useSelector } from 'react-redux'


const JobListing = ({ job }) => {

    const [viewDescription, setViewDescription] = useState(false)
    const offset = useSelector((x) => x.job.viewJobDescription)

    return (
        <div className='listing-main'>
            <div className='posted-date'><span><img className='posted-date-img' src={hourGlass} /></span> Posted 10 days ago</div>
            <div className='listing-info'>
                <div className='company-logo'><img src={job?.logoUrl} /></div>
                <div className='company-details-container'>
                    <div className='company-name'>{job?.companyName}</div>
                    <div className='job-title-container'>
                        <div className='job-title'>{job?.jobRole}</div>
                        <img className='checkmark' src={checkmark} />
                    </div>
                    <div className='job-location'>{job.location}</div>
                </div>
            </div>
            <div className='estimated-salary'>Estimated Salary: {'\u20B9'}{job?.minJdSalary} - {job?.maxJdSalary} LPA</div>
            <div>Job Description:</div>

            <div className={`job-description-container ${viewDescription ? 'show-description' : 'hide-description'}`}>
                <div className='job-description-content'>
                    {job?.jobDetailsFromCompany}
                </div>
                <div className={`job-description-overlay  ${viewDescription ? 'hide-overlay' : 'show-overlay'}`}></div>
            </div>
            <div className='view-job' onClick={() => setViewDescription(!viewDescription)}>{viewDescription ? 'Hide Description' : 'View Description'}</div>
            <div>Minimum Experience</div>
            <div>{job?.minExp} years</div>
            <div className='apply-button'><img className='flash-img' src={flash} /> Easy Apply</div>
        </div>
    )
}

export default JobListing
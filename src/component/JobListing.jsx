import React from 'react'
import hourGlass from '../assets/hourglass.png'
import checkmark from '../assets/check.png'
import flash from '../assets/flash.png'


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
            <div className='job-description-container'>
                <div className='job-description'>This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.</div>
                <div className='view-job-button' >
                    View Job
                </div>
            </div>
            <div>Minimum Experience</div>
            <div>2 years</div>
            <div className='apply-button'><img className='flash-img' src={flash} /> Easy Apply</div>
        </div>
    )
}

export default JobListing
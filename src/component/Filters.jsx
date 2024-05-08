import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedFilter } from '../store/jobSlice'

const Filters = () => {

    const jobFilter = useSelector((x) => x.job.filter)
    const dispatch = useDispatch()
    const initialFilterState = {
        minExp: '',
        company: '',
        location: '',
        remote: '',
        role: '',
        minBasePay: ''
    }

    const [filterOptions, setFilterOptions] = useState(initialFilterState)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFilterOptions((x) => {
            return { ...x, [name]: value }
        })

        // updating option in redux state
        setTimeout(() => {
            dispatch(setSelectedFilter({ ...filterOptions, [name]: value }))
        }, 100);
    }

    return (
        <div className='filter-container filter-cols'>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel >Min Experience</InputLabel>
                    <Select
                        name="minExp"
                        value={filterOptions.minExp}
                        label="Min Experience"
                        placeholder="Min Experience"
                        onChange={handleChange}
                    >
                        {(jobFilter && jobFilter.minExp.length > 0) && jobFilter.minExp.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel >Company</InputLabel>
                    <Select
                        name="company"
                        value={filterOptions.company}
                        label="Company"
                        placeholder="Company"
                        onChange={handleChange}
                    >
                        {(jobFilter && jobFilter.company.length > 0) && jobFilter.company.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel >Location</InputLabel>
                    <Select
                        name="location"
                        value={filterOptions.location}
                        label="Location"
                        placeholder="Location"
                        onChange={handleChange}
                    >
                        {(jobFilter && jobFilter.location.length > 0) && jobFilter.location.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}><Typography sx={{ textTransform: 'capitalize' }}>{option}</Typography></MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel >Remote</InputLabel>
                    <Select
                        name="remote"
                        value={filterOptions.remote}
                        label="Remote"
                        placeholder="Remote"
                        onChange={handleChange}
                    >
                        {(jobFilter && jobFilter.remote.length > 0) && jobFilter.remote.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>

            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel >Role</InputLabel>
                    <Select
                        name="role"
                        value={filterOptions.role}
                        label="Role"
                        placeholder="Role"
                        onChange={handleChange}
                    >
                        {(jobFilter && jobFilter.role.length > 0) && jobFilter.role.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option} ><Typography sx={{ textTransform: 'capitalize' }}>{option}</Typography></MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel >Min Base Pay</InputLabel>
                    <Select
                        name="minBasePay"
                        placeholder='Min Base Pay'
                        value={filterOptions.minBasePay}
                        label="Min Base Pay"
                        onChange={handleChange}
                    >
                        {(jobFilter && jobFilter.minBasePay.length > 0) && jobFilter.minBasePay.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Filters
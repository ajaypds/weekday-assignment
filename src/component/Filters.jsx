import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Filters = () => {
    const [minBasePay, setMinBasePay] = useState('')
    const jobFilter = useSelector((x) => x.job.filter)

    return (
        <div className='filter-container filter-cols'>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Min Experience</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Min Experience"
                        placeholder="Min Experience"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Company</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Company"
                        placeholder="Company"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Location"
                        placeholder="Location"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Remote</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Remote"
                        placeholder="Remote"
                    // onChange={handleChange}
                    >
                        <MenuItem value='remote'>Remote</MenuItem>
                        <MenuItem value='onsite'>Onsite</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Role"
                        placeholder="Role"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Min Base Pay</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder='Min Base Pay'
                        value={minBasePay}
                        label="Min Base Pay"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Filters
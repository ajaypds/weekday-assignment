import React, { useEffect, useState } from 'react'
import JobListing from './component/JobListing'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, setFilterOptionData } from './store/jobSlice'
import Filters from './component/Filters'

const App = () => {
  const [length, setLength] = useState(15)
  const data = useSelector((x) => x.job.data)
  const offset = useSelector((x) => x.job.pageOffset)
  const loading = useSelector((x) => x.job.loading)
  const selectedFilter = useSelector((x) => x.job.selectedFilter)
  const [scrolledToEnd, setScrolledToEnd] = useState(0)
  const dispatch = useDispatch()

  const updateScroll = () => {
    setScrolledToEnd((...prevState) => prevState + 1)
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
      return
    }
    updateScroll()
  }

  useEffect(() => {
    offset !== 0 && dispatch(fetchData(offset))
  }, [scrolledToEnd])

  useEffect(() => {
    dispatch(setFilterOptionData())
  }, [loading])

  useEffect(() => {
    dispatch(fetchData(offset))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className='app-root'>
      {/* {JSON.stringify(data)} */}
      <div className='listing-container'>
        <div className='filter-section'>
          {(data && data.length > 0) && <Filters />}
        </div>
        <div className='listing-grid grid-cols'>

          {(data && data.length > 0) && data
            .filter((x) => {
              return selectedFilter.minExp !== '' ? x.minExp >= selectedFilter.minExp : x
            })
            .filter((x) => {
              return selectedFilter.company !== '' ? x.companyName === selectedFilter.company : x
            })
            .filter((x) => {
              return selectedFilter.location !== '' ? x.location === selectedFilter.location : x
            })
            .filter((x) => {
              return selectedFilter.role !== '' ? x.jobRole === selectedFilter.role : x
            })
            .filter((x) => {
              return selectedFilter.remote !== '' && selectedFilter.remote === 'Remote' ? x.location === 'remote' : x
            })
            .filter((x) => {
              return selectedFilter.minBasePay !== '' ? x.minJdSalary ? x.minJdSalary >= selectedFilter.minBasePay : x.maxJdSalary >= selectedFilter.minBasePay : x
            })
            .map((job, index) => {
              return (
                <JobListing key={index} job={job} />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default App
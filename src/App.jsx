import React, { useEffect, useState } from 'react'
import JobListing from './component/JobListing'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/jobSlice'

const App = () => {
  const [length, setLength] = useState(15)
  const data = useSelector((x) => x.job.data)
  const offset = useSelector((x) => x.job.pageOffset)
  const [scrolledToEnd, setScrolledToEnd] = useState(0)
  const dispatch = useDispatch()

  const updateScroll = () => {
    setScrolledToEnd((...prevState) => prevState + 1)
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
      return
    }
    setLength((x) => {
      return x + 15
    })
    updateScroll()
  }

  useEffect(() => {
    offset !== 0 && dispatch(fetchData(offset))
  }, [scrolledToEnd])

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
        <div className='listing-grid grid-cols'>
          {/* {
            (() => {
              const cards = []
              for (let i = 0; i < length; i++) {
                cards.push(<JobListing key={i} />)
              }
              return cards
            })()
          } */}
          {(data && data.length > 0) && data.map((job, index) => {
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
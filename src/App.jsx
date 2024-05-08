import React, { useEffect, useState } from 'react'
import JobListing from './component/JobListing'

const App = () => {
  const [length, setLength] = useState(15)

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
      return
    }
    setLength((x) => {
      return x + 15
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className='app-root'>
      <div className='listing-container'>
        <div className='listing-grid grid-cols'>
          {
            (() => {
              const cards = []
              for (let i = 0; i < length; i++) {
                cards.push(<JobListing key={i} />)
              }
              return cards
            })()
          }
        </div>
      </div>
    </div>
  )
}

export default App
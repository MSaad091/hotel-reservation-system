import React from 'react'
import './Home.css'
import DisItem from '../DisItem'

function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='text'>
          <h1>
            Let’s Hunt For Your <br />
            Dream Residence
          </h1>
          <p>
            🏡 Ready to find your dream home? <br /><br />
            Start exploring now and make your dream a reality.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
      <DisItem />
    </>
  )
}

export default Home

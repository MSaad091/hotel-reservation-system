import React from 'react'
import './disitem.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function DisItem() {
  const product = useSelector((state) => state.homes)

  return (
    <div className='dis-container'>
      <button className='btn'>Discover</button>
      <h1 className='h1'>Best Recommendation</h1>

      <div className='cards'>
        {product.map((item, index) => (
          <div className='card' key={index}>
            <img src={item.img} alt="" />
            <h1 className='h1'>{item.name}</h1>
            <p>{item.location}</p>
            <h1 className='price'>Rs:{item.price}</h1>
            <p className='square'>{item.par}</p>
            <Link to={`/${item.id}`}>
            <button className='crd-btn'>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisItem

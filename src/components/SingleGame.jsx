import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';

function SingleGame() {
  const {_id,gameTitle,imageURL} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={imageURL} alt='' className='h-96'/>
      <h2>{gameTitle}</h2>
      <Link to="/payment"><button className='bg-blue-700 font-semibold text-white rounded'>Buy Now</button></Link>

    </div>
  )
}

export default SingleGame
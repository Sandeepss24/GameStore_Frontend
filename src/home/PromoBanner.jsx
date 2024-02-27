import React from 'react'
import { Link } from 'react-router-dom';
import gamePic from '../assets/promo.jpg'
function PromoBanner() {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-xl font-bold mb-6 leading-snug'>2023 National Game Awards for Fiction Shortlisted</h2>
                <Link to="/shop" className='block'><button className='bg-blue-700 text-white-center-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 text-white'>Get Promo Code</button></Link>
            </div>

            <div className='mt-2'>
                <img src={gamePic} alt='' className='w-96'></img>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner
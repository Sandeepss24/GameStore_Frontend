import React from 'react'
import FavGamesImg from '../assets/fav1.webp'
import { Link } from 'react-router-dom';

function FavGames() {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between'>
      <div className='md:w-1/2'>
          <img src={FavGamesImg} alt='' className='rounded md:w-10/12'/>
      </div>

      <div className='md:w-1/2'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-blue-700'>Games Here!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est hic, error praesentium recusandae dolores labore inventore quisquam similique dolore impedit quos, aut aperiam sed sit vero sint obcaecati. Rem!</p>
        {/* stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Game Listing</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>460+</h3>
            <p className='text-base'>Register Users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>Game Downloads</p>
          </div>
        </div>

        <Link to="/shop" className='mt-block'><button className='bg-blue-700 text-white-center-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 text-white'>Explore More</button></Link>
      </div>
    </div>
  )
}

export default FavGames
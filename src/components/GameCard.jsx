import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import {Link} from 'react-router-dom'

import { FaCartShopping } from 'react-icons/fa6'
function GameCard({headline,games}) {
    // console.log(games);
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/* cards */}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        {
            games.map(game => <SwiperSlide key={game._id}>
                <Link to={`/game/${game._id}`}>
                    <div className='relative '>
                        <img src={game.imageURL} alt=''/>
                        <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                        <FaCartShopping className='w-4 h-4 text-white' />
                        </div>
                    </div>
                    <div className='text-black'>
                        <div>
                        <h3>{game.gameTitle.split(' ').slice(0, 2).join(' ')}</h3>
                        {/* <p>{game.developer}</p> */}
                        </div>
                        <div>
                            <p>{game.gamePrice}</p>
                        </div>
                    </div>
                </Link>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default GameCard
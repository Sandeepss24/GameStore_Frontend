import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
function Shop() {
  const [games,setGames] = useState([])

  useEffect(()=>{
    fetch("http://localhost:7000/all-game").then(res=>res.json()).then(data=>setGames(data))
  },[])
   return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Games are here..</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 ms:grid-cols1'>
        {
          games.map(game =><Card
            className="max-w-sm"
            style={{backgroundColor:"yellow"}}>
            <img src={game.imageURL} alt='' className='h-70'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {game.gameTitle.split(' ').slice(0, 4).join(' ')}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {game.gameDescription.split(' ').slice(0, 7).join(' ')}
            </p>
              <Link to="/payment"><button className='bg-blue-700 font-semibold text-white rounded'>Buy Now &nbsp;&nbsp;{game.gamePrice}</button></Link>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
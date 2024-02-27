import React, { useEffect, useState } from 'react'
import GameCard from '../components/GameCard';

function BestSellerGame() {
    const [games , setGames] = useState([]);

    useEffect( () => {
        fetch("http://localhost:7000/all-game").then(res => res.json()).then(data => setGames(data.slice(0,6)))
    },[])
  return (
    <div>
        <GameCard games={games} headline="Best Seller Games"/>
    </div>
  )
}

export default BestSellerGame
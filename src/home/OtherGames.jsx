import React , {useState,useEffect} from 'react'
import GameCard from '../components/GameCard';

function OtherGames() {
    const [games , setGames] = useState([]);

    useEffect( () => {
        fetch("http://localhost:7000/all-game").then(res => res.json()).then(data => setGames(data.slice(0,8)))
    },[])
  return (
    <div>
        <GameCard games={games} headline="Other Games"/>
    </div>
  )
}

export default OtherGames
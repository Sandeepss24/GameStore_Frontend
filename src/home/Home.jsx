import React from 'react'
import Banner from '../components/Banner'
import BestSellerGame from './BestSellGames'
import FavGames from './FavGames'
import PromoBanner from './PromoBanner'
import OtherGames from './OtherGames'
import Review from './Review'
import About from '../components/About'
import Blog from '../components/Blog'

function Home() {
  return (
    <div>
      <Banner/>
      <BestSellerGame/>
      <FavGames/>
      <PromoBanner/>
      <OtherGames/>
      <Review/>
      <About/>
    </div>
  )
}

export default Home
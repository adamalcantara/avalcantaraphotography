import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"

import Carousel from "../../Components/CarouselComponent/CarouselComponent"

const Home = () => {
  return (
    <div>
      <Carousel />
      <div id="introDiv">
          <p id="weAre">We are Adam and Valerie Alcantara, a husband and wife photography team located in Orlando Florida! We specialize in headshots, portraits, and weddings.</p>
          <Link to="/about" id="learnMore">Learn More</Link>
      </div>

    </div>
  )
}

export default Home
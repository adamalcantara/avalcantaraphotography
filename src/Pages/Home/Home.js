import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"

// Import Slider pieces
import Deck from "../../Components/Deck/Deck"

const Home = () => {
  return (
    <div>
      <div id="introDiv">
          <p id="weAre">We are Adam and Valerie Alcantara, a husband and wife photography team located in Orlando Florida! We specialize in headshots, portraits, and weddings.</p>
          <Link to="/about" id="learnMore">Learn More</Link>
      </div>
    </div>
  )
}

export default Home
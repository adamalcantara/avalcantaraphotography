import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

import Carousel from "../../Components/CarouselComponent/CarouselComponent"

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className='textDivs'>
          <p className="homeText">We are Adam and Valerie Alcantara, a husband and wife photography team located in Orlando Florida! We specialize in headshots, portraits, and weddings.</p>
          <Link to="/about" className="learnMore">Learn More</Link>
      </div>
      <div id="photoTypes">
          <Link to="/headshots" id="headshots" className="services">
            <div className='overlay'>Headshots</div>
          </Link>
        
          <Link to="/portraits" id="portraits" className="services">
            <div className='overlay'>Portraits</div>
          </Link>

          <Link to="/weddings" id="weddings" className="services">
            <div className='overlay'>Weddings</div>
          </Link>

      </div>

      <div className='textDivs'>
          <p className="homeText">Please feel free to contact us if you have any questions. We look forward to hearing from you!</p>
          <Link to="/contact" className="learnMore">Contact Us</Link>
      </div>
    </div>
  )
}

export default Home
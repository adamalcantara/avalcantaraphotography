import React from 'react'
import './About.css'
import adam from "../../img/adam_headshot.jpg";
import valerie from "../../img/valerie_headshot.jpg";
import beach from "../../img/beach.jpg";

const About = () => {
  return (
    <div id="about">

      <div id="aboutTopSection">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={beach} id="topimg"></img>
      </div>

      <div id="adambio">
        <h2 className="headers">Adam</h2>
        <p>
            <img src={adam} id="adamheadshot"></img>
            I have been fascinated with photography for as long as I can remember. I purchased my first DSLR while studying film at Interlochen Arts Academy in Northern Michigan, and found that the challenge of telling a story in a single image was even more compelling than filmmaking.
            <br></br>
            My early photographic endeavors were in live concert photography. I have been fortunate to photograph concerts across the country, including prestigious venues like Red Rocks Amphitheater in Colorado. My concert photos have been featured in publications such as Modern Drummer, New York Magazine, and Playbill at Carnegie Hall.
            <br></br>
            When I relocated to Orlando in 2016, I turned my focus to portrait, wedding, and headshot photography. I have been fortunate to win awards for my work, and to have been published in a book.
            <br></br>
            I am very curious about light, and the various ways it can be used to create visually compelling images. My interest in lighting has led me to explore the art of cinematic lighting, and the way it can be used to create eye-catching images from scratch.
            <br></br>
            My photographic passion is capturing spectacular images that preserve memories and tell stories. I can&apos;t wait to tell yours.
        </p>
      </div>

      <div id="valeriebio">
        <h2 id="valerieheader" className="headers">Valerie</h2>
        <p><img src={valerie} id="verticalImg2"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>

      <div>

      </div>
        <h2>Testimonials</h2>
      <div id="testimonials">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  )
}

export default About
import React from 'react'
import './About.css'
import adam from "../../img/adam_headshot.jpg";
import valerie from "../../img/valerie_headshot.jpg";
import beach from "../../img/usbeach.jpg";

const About = () => {
  return (
    <div id="about">

      <div id="aboutTopSection">
        <p id="introText">We are A.V. Alcantara Photography, a husband and wife photography team based in Orlando, Florida! We specialize in headshot, portrait, and wedding photography. Our mutual love for the art of photography is what brought us together as a couple, and our aspiration continues to be telling stories through our photographs. Both of us have backgrounds in film, and have translated the knowledge of composition and storytelling to still photography. Please feel free to contact us if you have any questions! We can’t wait to hear from you.</p>
        <img src={beach} id="topimg" alt="couple on the beach"></img>
      </div>

      <div id="adambio">
        <h2 className="headers">Adam</h2>
        <p>
            <img src={adam} id="adamheadshot" alt="Adam's headshot"></img>
            I have been fascinated with photography for as long as I can remember. I purchased my first DSLR while studying film at Interlochen Arts Academy in Northern Michigan, and found that the challenge of telling a story in a single image was even more compelling than filmmaking.

            <div className="spacer"></div>

            My early photographic endeavors were in live concert photography. I have been fortunate to photograph concerts across the country, including prestigious venues like Red Rocks Amphitheater in Colorado. My concert photos have been featured in publications such as Modern Drummer, New York Magazine, and Playbill at Carnegie Hall.

            <div className="spacer"></div>

            When I relocated to Orlando in 2016, I turned my focus to portrait, wedding, and headshot photography. I have been fortunate to win awards for my work, and to have been published in a book.

            <div className="spacer"></div>

            I am very curious about light, and the various ways it can be used to create visually compelling images. My interest in lighting has led me to explore the art of cinematic lighting, and the way it can be used to create eye-catching images from scratch.

            <div className="spacer"></div>

            My photographic passion is capturing spectacular images that preserve memories and tell stories. I can&apos;t wait to tell yours.
        </p>
      </div>

      <div id="valeriebio">
        <h2 id="valerieheader" className="headers">Valerie</h2>
        <p><img src={valerie} id="valerieheadshot" alt="Valerie's headshot"></img>I have had a camera in my hand since I was a kid. My time living abroad had a profound affect on my drive to visually document life&#39;s beauty. I earned my Bachelors degree in Film Studies, learning many techniques of successful visual storytelling which translated well into photography.

        <div className="spacer"></div>

        After living in Europe, I spent time working in a darkroom learning the process of analog photography. This experience led me to further understand and appreciate the freedom of digital photography, and these days I focus on digital photography.

        <div className="spacer"></div>

        When I am taking photos, I am most passionate about ensuring that whoever is in front of my camera is presented in their best light. I look forward to helping you feel confident and empowered in your photos.
          </p>
      </div>

      <div>

      </div>

      <div id="testimonialSection">
        <h2 className="headers" id="testimonialHeader">Testimonials</h2>
        <div id="testimonials">

          <div className="testimonialCard">
                <p>"Our engagement photo session with Adam &amp; Valerie was an absolute dream come true. From the location, to our concept, to the photo shoot experience - we couldn&#39;t have asked for a better experience. Their vision, kindness, &amp; professionalism truly delivered stunning photographs that we&#39;ll treasure for a lifetime."</p>
                <p className='testimonialSig'>-Madison</p>
          </div>

          <div className="testimonialCard" id="middleTestimonial">
                <p>"I can highly recommend A.V. Alcantara Photography to anyone who&#39;s looking for creativity, and a result that&#39;s above and beyond the typical photo studio approach.”</p>
                <p className='testimonialSig'>-Larry</p>
          </div>
          
          <div className="testimonialCard">
                <p>“Getting photographed by Adam &amp; Valerie was such a joy. My boyfriend and I have never had professional photos taken before but they made it easy and comfortable for the both of us. The photos speak for themselves- beautiful!”</p>
                <p className='testimonialSig'>-Sarah</p>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default About
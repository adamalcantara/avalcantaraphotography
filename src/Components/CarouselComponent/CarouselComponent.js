import React from "react";
import { Carousel } from 'react-responsive-carousel';

// Carousel CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselComponent.css"

import slider1 from "../../img/slider/1.jpg"
import slider2 from "../../img/slider/2.jpg"
import slider3 from "../../img/slider/3.jpg"
import slider4 from "../../img/slider/4.jpg"
import slider5 from "../../img/slider/5.jpg"
import slider6 from "../../img/slider/6.jpg"



function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} interval={4000} transitionTime={450} animationHandler="fade" className="main-slide">
                <div>
                    <img src={slider1} alt="outdoor cinematic headshot" />
                </div>
                <div>
                    <img src={slider2} alt="studio headshot"/>
                </div>
                <div>
                    <img src={slider3} alt="black and white umbrella"/>
                </div>
                <div>
                    <img src={slider4} alt="organist portrait"/>
                </div>
                <div>
                    <img src={slider5} alt="wedding ring"/>
                </div>
                <div>
                    <img src={slider6} alt="outdoor flash composite"/>
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselComponent
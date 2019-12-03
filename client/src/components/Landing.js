import React from 'react';
import { Carousel } from 'react-bootstrap';

import SlideOne from '../assets/slide-01.png';
import SlideTwo from '../assets/slide-02.jpg';
import SlideThree from '../assets/slide-03.jpg';

const myStyles = {
    color: "#dc3545"
}

const Landing = () =>{
    return(
        <div>
            <Carousel style={{ marginTop: "20px" }}>
            <Carousel.Item>
               <img src={SlideOne} alt="Slide 1" width="750px" height="375px"/>
                <Carousel.Caption>
                <h3 style={myStyles}>Surel Feedback Information</h3>
                <p style={myStyles}>Melakukan voting atau feedback suatu perusahaan.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={SlideTwo} alt="Slide 2"/>
                <Carousel.Caption>
                <h3 style={myStyles}>Surel Feedback Information</h3>
                <p style={myStyles}>Melakukan voting atau feedback suatu perusahaan.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={SlideThree} alt="Slide 3"/>
                <Carousel.Caption>
                <h3 style={myStyles}>Surel Feedback Information</h3>
                <p style={myStyles}>Melakukan voting atau feedback suatu perusahaan.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Landing;
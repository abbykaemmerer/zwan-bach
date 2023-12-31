import React from 'react'
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='desktop-layout'>
        <h1 className='header'>
            <span>Welcome</span>
            <span>Campers.</span> 
          </h1>
          <figure className='picture' >
            <img
                src='images/smokey-7.jpeg'
                alt="Smokey Bear"
                className='hero_img'
            />
          </figure>
          <div className='information'>
            <div>Lake Grool, Tennessee</div>
            <div>May 17 - 19, 2023</div>
          </div>
      </div>
      <div className='bottom-div'>
        <div id='gif'>
            <iframe src="https://giphy.com/embed/xT1R9PD10fWEQxdDOw" frameBorder="0" className="giphy-embed gif" title='baby-gif' allowFullScreen></iframe>
        </div> 
        <div className='babies-div'>It's us. We're the babes.</div>
      </div>
    </div>
  );
}

export default HeroSection;
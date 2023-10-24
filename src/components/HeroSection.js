import React from 'react'
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className='header'>
        <span>Welcome</span>
        <span>Campers</span> 
      </h1>
      <figure className='picture' >
                <img
                    src='images/smokey-7.jpeg'
                    alt="Smokey Bear"
                    className='hero_img'
                />
            </figure>
      <div className='information'>
        <div>Lake Somewhere, Tennessee</div>
        <div>May 17 - 19, 2023</div>
      </div>
      <div id='gif'>
        <iframe src="https://giphy.com/embed/xT1R9PD10fWEQxdDOw" frameBorder="0" class="giphy-embed" className='gif' allowFullScreen></iframe>
      </div> 
      <div>It's us. We're the babies.</div>

    </div>
  );
}

export default HeroSection;
import React from 'react'
import './Itinerary.css';

function Itinerary() {
  return (
    <div className='itinerary-container'>
      <span className='header'>Itinerary</span>
      <div className='group-container'>
        <div className='night-groups'>
          <div className='night-title'>Friday</div>
          <ul>
            <li>Arrivals</li>
            <li>Games and gifts</li>
            <li>Taco night</li>
          </ul>
        </div>
        <div className='night-groups'>
          <div className='night-title'>Saturday</div>
          <ul>
            <li>Bagel Brunch</li>
            <li>Boat</li>
            <li>Smorez & Stars</li>
          </ul>
        </div>
        <div className='night-groups'>
          <div className='night-title'>Sunday</div>
          <ul>
            <li>Breakfast tacos</li>
            <li>Kayaks, canoes, & paddleboards</li>
            <li>Sunset hike</li>
          </ul>
        </div>
      </div>
      {/* <div className='gif-container'>
        <iframe src="https://giphy.com/embed/l4FGoqQEuWwa02zQI" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div> */}
    </div>
  )
}

export default Itinerary
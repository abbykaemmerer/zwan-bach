import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Itinerary from '../Itinerary';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection />
            <Itinerary/>
            <Footer/>
        </>
    );
}

export default Home;
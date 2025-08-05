import React from 'react';
import Awards from './Awards';
import Pricing from './Pricing';
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
     );
}

export default HomePage;
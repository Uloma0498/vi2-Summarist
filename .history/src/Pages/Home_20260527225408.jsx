import React, { useState } from 'react';
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Numbers from '../components/Numbers';
import Footer from '../components/Footer';


const Home = ( { setIsOpen, setIsSignUpOpen }) => {
    return (
        <>
        <Nav setIsOpen={setIsOpen} />
        <Landing setIsOpen={setIsOpen} setIsSignUpOpen={setIsSign} />
        <Features />
        <Reviews />
        <Numbers />
        <Footer />
        </>
    )
}

export default Home;